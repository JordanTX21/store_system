<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Proforma;
use App\Invoice;
use App\Solicitude;
use App\Product;
use App\ProformaProduct;
use App\InvoiceProduct;
use App\SolicitudeProduct;
use App\Utils\WithUtils;

class ReportController extends Controller
{
    const MODULE_NAME = 'report';


    public function search(Request $request)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $type_report = $request->type_report;

        if($type_report == 'COMPRAS'){
            return app(SolicitudeController::class)->search($request);
        }else if($type_report == 'VENTAS'){
            return app(SolicitudeController::class)->search($request);
        }
        return response()->json(['success' => false, 'message' => 'No se encontro el tipo de reporte'], 200);
       
    }
}
