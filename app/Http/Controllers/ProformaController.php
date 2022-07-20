<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Proforma;
use App\ProformaProduct;
use App\Product;
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
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $proformas = Proforma::with(WithUtils::withProforma())->where('status', true)->get();
        if(count($proformas) == 0){
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
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
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
    }
    public function search(Request $request)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if (!app(UserController::class)->havePermission($auth_user, 'read_' . self::MODULE_NAME)) {
            return response()->json(['success' => false, 'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $length = $request->length;
        $start = $request->start;
        $date_start = $request->date_start;
        $date_end = $request->date_end;
        $proformas = Proforma::with(WithUtils::withProforma())
        ->where('status', true)
        ->whereBetween('created_at', [$date_start, $date_end])
        ->orderBy('created_at','desc');

        $count = $proformas->count();

        $proformas = $proformas
        ->limit($length)
        ->offset($start)
        ->get();

        if(count($proformas) == 0){
            return response()->json(['success' => false, 'message' => 'No hay proformas registrados'], 200);
        }
        return response()->json(['success' => true, 'message' => 'Lista de proformas', 'data' => $proformas,'count' => $count], 200);
    }
}
