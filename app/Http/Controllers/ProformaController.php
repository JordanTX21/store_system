<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Proforma;
use App\ProformaProduct;
use App\Product;
use App\Invoice;
use App\Utils\WithUtils;

class ProformaController extends Controller
{
    const MODULE_NAME = 'proforma';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        $proformas = Proforma::with(WithUtils::withProforma())->where('status', true)->get();
        if (count($proformas) == 0) {
            return response()->json(['success' => false, 'message' => 'No hay proformas registrados'], 200);
        }
        return response()->json(['success' => true, 'message' => 'Lista de proformas', 'data' => $proformas], 200);
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
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        $products = $request->products;
        $client_document = $request->client_document;

        if (!$products || !is_array($products) || count($products) == 0) {
            return response()->json(['success' => false, 'message' => 'Debe agregar al menos 1 producto para la proforma'], 200);
        }
        if (!$client_document) {
            return response()->json(['success' => false, 'message' => 'Debe agregar un cliente para la proforma'], 200);
        }
        if (!is_numeric($client_document)) {
            return response()->json(['success' => false, 'message' => 'El documento del cliente debe ser numerico'], 200);
        }
        if(strlen($client_document) < 8){
            return response()->json(['success' => false, 'message' => 'El documento del cliente debe tener al menos 8 digitos'], 200);
        }
        $proforma = Proforma::create([
            'client_document' => $client_document,
            'create_user_id' => Auth::id(),
            'status' => true,
        ]);
        /**PRIMERO VALIDA */
        foreach ($products as $product) {
            if (!$product['id'] || !$product['quantity']) {
                return response()->json(['success' => false, 'message' => 'debe agregar al menos 1 producto para la solicitud'], 200);
            }
            $product_db = Product::findOrFail($product['id']);
            if ($product_db->quantity < $product['quantity']) {
                return response()->json(['success' => false, 'message' => 'No hay suficiente stock para el producto ' . $product_db->name], 200);
            }
        }
        /**AHORA SI INSERTA */
        foreach ($products as $product) {
            Product::findOrFail($product['id'])->decrement('quantity', $product['quantity']);
            ProformaProduct::create([
                'proforma_id' => $proforma->id,
                'product_id' => $product['id'],
                'quantity' => $product['quantity']
            ]);
        }
        return response()->json(['success' => true, 'message' => 'Proforma creada correctamente'], 200);
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
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        $products = $request->products;

        if (!$products || !is_array($products) || count($products) == 0) {
            return response()->json(['success' => false, 'message' => 'Debe agregar al menos 1 producto para la proforma'], 200);
        }
        $proforma = Proforma::findOrFail($id);
        $quantity = 0;
        $total = 0;
        /**PRIMERO VALIDA */
        foreach ($products as $product) {
            if (!$product['id'] || !$product['quantity']) {
                return response()->json(['success' => false, 'message' => 'debe agregar al menos 1 producto para la solicitud'], 200);
            }
            $product_db = Product::findOrFail($product['id']);
            if ($product_db->quantity < $product['quantity']) {
                return response()->json(['success' => false, 'message' => 'No hay suficiente stock para el producto ' . $product_db->name], 200);
            }
            $quantity += $product['quantity'];
            $total += $product['quantity'] * $product_db->price;
        }
        /**AHORA SI INSERTA O ACTUALIZA */
        foreach ($products as $product) {
            ProformaProduct::updateOrCreate([
                'proforma_id' => $proforma->id,
                'product_id' => $product['id'],
            ],[
                'quantity' => $product['quantity']
            ]);
        }
        $proforma->update([
            'update_user_id' => Auth::id(),
            'status' => true,
        ]);
        $invoice = Invoice::create([
            'proforma_id' => $proforma->id,
            'user_id' => Auth::id(),
            'quantity' => $quantity,
            'total' => $total,
            'status' => true,
        ]);

        return response()->json(['success' => true, 'message' => 'Boleta creada correctamente','data'=>$invoice], 200);
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
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
    }
    public function search(Request $request)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        $client_document = $request->client_document;
        $length = $request->length;
        $start = $request->start;
        $date_start = $request->date_start;
        $date_end = $request->date_end;
        $where = [
            ['status','=', true],
        ];

        if($client_document){
            $where[] = ['client_document','=', $client_document];
        }

        $proformas = Proforma::with(WithUtils::withProforma())
            ->where($where)
            ->whereBetween('created_at', [$date_start.' 00:00:00', $date_end.' 23:59:59'])
            ->orderBy('created_at', 'desc');

        $count = $proformas->count();

        if($length && $start){
            $proformas = $proformas
            ->limit($length)
            ->offset($start);
        }

        $proformas = $proformas
            ->get();

        if (count($proformas) == 0) {
            return response()->json(['success' => false, 'message' => 'No hay proformas registrados'], 200);
        }
        foreach ($proformas as $key => $proforma) {
            $products = [];
            $proforma_products = ProformaProduct::with(WithUtils::withProformaProduct())
            ->where([
                'proforma_id' => $proforma->id
            ])
            ->get();
            $invoice = Invoice::where([
                ['proforma_id', '=', $proforma->id],
                ['status','=',true]
            ])
            ->first();
            $proforma->invoice = $invoice;
            foreach ($proforma_products as $proforma_product) {
                $proforma_product->product->quantity = $proforma_product->quantity;
                $proforma_product->product->price = $proforma_product->product->price * $proforma_product->product->quantity;
                $products[] = $proforma_product->product;
            }
            $proformas[$key]->products = $products;
        }
        return response()->json(['success' => true, 'message' => 'Lista de proformas', 'data' => $proformas, 'count' => $count], 200);
    }

    public function send(Request $request){
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'update_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        $proforma = Proforma::findOrFail($request->id)->update([
            'status_proforma' => 1,
        ]);

        if(!$proforma){
            return response()->json(['success' => false, 'message' => 'No se logró modificar el estado de la boleta'], 200);
        }
        return response()->json(['success' => true, 'message' => 'Productos entregados'], 200);

    }
}
