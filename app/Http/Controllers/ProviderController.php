<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Provider;
use App\Utils\WithUtils;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!app(UserController::class)->havePermission($auth_user,'read_provider')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $providers = Provider::where('status', true)->get();

        if(count($providers) == 0){
            return response()->json(['success' => false,'message' => 'No hay provedores registrados'], 200);
        }

        return response()->json(['success' => true,'message' => 'Lista de provedores','data' => $providers], 200);
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

        if(!app(UserController::class)->havePermission($auth_user,'create_provider')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $name = trim($request->name);
        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del provedor es requerido'], 200);
        }
        $provider = Provider::where([['name',$name]])->first();
        if($provider){
            return response()->json(['success' => false,'message' => 'El provedor ya existe'], 200);
        }
        $provider_new = Provider::create([
            'name' => $name,
            'status' => true
        ]);
        if(!$provider_new){
            return response()->json(['success' => false,'message' => 'Error al crear el provedor'], 200);
        }
        return response()->json(['success' => true,'message' => 'Provedor creado correctamente'], 200);
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

        if(!app(UserController::class)->havePermission($auth_user,'update_provider')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $name = trim($request->name);
        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del provedor es requerido'], 200);
        }
        $provider_new = Provider::findOrFail($id)->update([
            'name' => $name,
            'status' => true
        ]);
        if(!$provider_new){
            return response()->json(['success' => false,'message' => 'Error al actulizar el provedor'], 200);
        }
        return response()->json(['success' => true,'message' => 'Provedor actualizado correctamente'], 200);
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

        if(!app(UserController::class)->havePermission($auth_user,'delete_provider')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $provider_new = Provider::findOrFail($id)->update([
            'status' => false
        ]);
        if(!$provider_new){
            return response()->json(['success' => false,'message' => 'Error al eliminar el provedor'], 200);
        }
        return response()->json(['success' => true,'message' => 'Provedor eliminado correctamente'], 200);
    }
    public function search()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!app(UserController::class)->havePermission($auth_user,'read_provider')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $name = trim(request()->name);
        $where = [
            ['status','=',true]
        ];
        if($name){
            $where[] = ['name','like','%'.$name.'%'];
        }
        $providers = Provider::where($where)->get();

        if(count($providers) == 0){
            return response()->json(['success' => false,'message' => 'No se encontraron provedores'], 200);
        }

        return response()->json(['success' => true,'message' => 'Lista de provedores','data' => $providers], 200);
    }
}
