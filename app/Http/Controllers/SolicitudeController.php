<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Solicitude;
use App\SolicitudeProduct;
use App\Product;
use App\Utils\WithUtils;

class SolicitudeController extends Controller
{
    const MODULE_NAME = 'solicitude';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $solicitudes = Solicitude::with(WithUtils::withSolicitude())->all();

        if (count($solicitudes) == 0) {
            return response()->json(['success' => false, 'message' => 'No hay solicitudes registrados'], 200);
        }

        return response()->json(['success' => true, 'message' => 'Lista de roles', 'data' => $solicitudes], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'create_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        $products = $request->products;

        if (!$products || !is_array($products) || count($products) == 0) {
            return response()->json(['success' => false, 'message' => 'debe agregar al menos 1 producto para la solicitud'], 200);
        }

        $solicitude = Solicitude::create([
            'request_user_id' => Auth::id(),
        ]);

        foreach ($products as $product) {
            if (!$product['id'] || !$product['quantity']) {
                return response()->json(['success' => false, 'message' => 'debe agregar al menos 1 producto para la solicitud'], 200);
            }
            SolicitudeProduct::create([
                'solicitude_id' => $solicitude->id,
                'product_id' => $product['id'],
                'quantity' => $product['quantity']
            ]);
        }

        return response()->json(['success' => true, 'message' => 'Solicitud creada correctamente'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'update_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        $products = $request->products;
        $status_solicitude = $request->status_solicitude;
        $solicitude = Solicitude::with(WithUtils::withSolicitude())->where('id', $id)->first();

        if ($products) {
            foreach ($products as $product) {
                if (!$product['id'] || !$product['quantity']) {
                    return response()->json(['success' => false, 'message' => 'debe agregar al menos 1 producto para la solicitud'], 200);
                }
                SolicitudeProduct::updateOrCreate([
                    'solicitude_id' => $solicitude->id,
                    'product_id' => $product['id']
                ], [
                    'quantity' => $product['quantity']
                ]);
            }
        }
        if ($status_solicitude) {
            if ($solicitude->status_solicitude == $status_solicitude) {
                $status_string = '';
                if ($status_solicitude == 1) {
                    $status_string = 'aprobada';
                } elseif ($status_solicitude == 2) {
                    $status_string = 'rechazada';
                } elseif ($status_solicitude == 3) {
                    $status_string = 'finalizada';
                }
                return response()->json(['success' => false, 'message' => 'La solicitud ya fue ' . $status_string], 200);
            }
            if($status_solicitude == 1){
                $solicitude_products = SolicitudeProduct::with(WithUtils::withSolicitudeProduct())
                ->where([
                    'solicitude_id' => $solicitude->id
                ])
                ->get();
                foreach ($solicitude_products as $solicitude_product) {
                    $product_new = Product::findOrFail($solicitude_product->product_id);
                    $product_new->update([
                        'quantity' => $product_new->quantity + $solicitude_product->quantity
                    ]);
                }
            }
            $solicitude_new = Solicitude::findOrFail($id)
            ->update([
                'status_solicitude' => $status_solicitude
            ]);
        }
        return response()->json(['success' => true, 'message' => 'Solicitud actualizada correctamente'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'delete_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $solicitude = Solicitude::findOrFail($id)->update([
            'status' => false
        ]);
        return response()->json(['success' => true, 'message' => 'Solicitud eliminada correctamente'], 200);
    }
    public function search(Request $request)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $where = [];
        $status_solicitude = $request->status_solicitude;
        $date_start = $request->date_start;
        $date_end = $request->date_end;
        $length = $request->length;
        $start = $request->start;

        if ($status_solicitude) {
            if($status_solicitude == "PENDIENTE"){
                $where[] = ['status_solicitude', '=', 0];
            }else if($status_solicitude == "APROBADO"){
                $where[] = ['status_solicitude', '=', 1];
            }elseif($status_solicitude == "RECHAZADO"){
                $where[] = ['status_solicitude', '=', 2];
            }elseif($status_solicitude == "FINALIZADO"){
                $where[] = ['status_solicitude', '=', 3];
            }
        }

        $solicitudes = Solicitude::with(WithUtils::withSolicitude())
            ->where($where)
            ->whereBetween('created_at', [$date_start." 00:00:00", $date_end." 23:59:59"])
            ->orderBy('created_at', 'desc');

        $count = $solicitudes->count();

        $solicitudes = $solicitudes
        ->offset($start)
        ->limit($length)
        ->get();

        if (count($solicitudes) == 0) {
            return response()->json(['success' => false, 'message' => 'No se encontraron resultados'], 200);
        }

        foreach ($solicitudes as $key => $solicitude) {
            $products = [];
            $solicitude_products = SolicitudeProduct::with(WithUtils::withSolicitudeProduct())
            ->where([
                'solicitude_id' => $solicitude->id
            ])
            ->get();
            foreach ($solicitude_products as $solicitude_product) {
                $solicitude_product->product->quantity = $solicitude_product->quantity;
                $solicitude_product->product->purchase_price = $solicitude_product->product->purchase_price * $solicitude_product->product->quantity;
                $products[] = $solicitude_product->product;
            }
            $solicitudes[$key]->products = $products;
        }


        return response()->json(['success' => true, 'message' => 'Lista de solicitudes', 'data' => $solicitudes, 'count' => $count], 200);
    }
}
