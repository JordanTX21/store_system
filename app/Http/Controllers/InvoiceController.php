<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Invoice;
use App\ProformaProduct;
use PDF;
use App\Utils\WithUtils;

class InvoiceController extends Controller
{
    const MODULE_NAME = 'invoice';
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        /*if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'Se ha detectado un acceso no permitido'], 200);
        }*/

        $invoice = Invoice::with(WithUtils::withInvoice())->findOrFail($id)->toArray();

        $proforma_products = ProformaProduct::with(WithUtils::withProformaProduct())
        ->where([
            ['proforma_id' ,'=', $invoice['proforma']['id']],
            ['status' ,'=', true],
        ])
        ->get()->toArray();

        $invoice['products'] = $proforma_products;

        $pdf = PDF::loadView("pdf.invoice_pdf", ["data"=>$invoice])->setPaper('a4', 'portrait');
        return $pdf->stream();
        //return $pdf->download('invoice_pdf.pdf');
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
