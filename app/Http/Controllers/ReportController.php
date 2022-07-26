<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Utils\WithUtils;
use App\Exports\ArrayExport;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    const MODULE_NAME = 'report';


    public function search(Request $request)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        $type_report = $request->type_report;

        if($type_report == 'COMPRAS'){
            return app(SolicitudeController::class)->search($request);
        }else if($type_report == 'VENTAS'){
            return app(ProformaController::class)->search($request);
        }
        return response()->json(['success' => false, 'message' => 'No se encontro el tipo de reporte'], 200);
       
    }

    public function generateReport($type_report,$date_start,$date_end)//
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }

        $request = new Request();

        $request->type_report = $type_report;
        $request->date_start = $date_start;
        $request->date_end = $date_end;

        $data = $this->search($request);

        $data = json_decode($data->getContent());
        if(!$data->success){
            return response()->json(['success' => false, 'message' => $data->message], 200);
        }

        $data = $data->data;

        $data_excel = [
            [
                'Fecha',
                'Tipo',
                'Numero',
                'Cliente',
                'Producto',
                'Cantidad',
                'Precio',
                'Total',
            ]
        ];

        //return $data;

        foreach ($data as $key => $value) {

            $quantity = 0;
            $price = 0;
            $total = 0;
            $products = [];
            $providers = [];
            foreach ($value->products as $product){
                $quantity += $product->quantity;
                if($type_report == 'COMPRAS'){
                    $price = $product->purchase_price;
                }else if($type_report == 'VENTAS'){
                    $price += $product->price;
                }
                $total += ($quantity * $price);
                $products[] = $product->name;
            }

            $products = implode(', ', $products);

            $data_excel[] = [
                explode(' ', $value->created_at)[0],
                $type_report,
                str_pad($value->id,10,'0',STR_PAD_LEFT),
                $type_report == 'VENTAS'?$value->client_document:'',
                $products,
                $quantity,
                number_format($price,2),
                number_format($total,2),
            ];
        }

        return Excel::download(new ArrayExport($data_excel), $type_report.'.xlsx');
       
    }
}
