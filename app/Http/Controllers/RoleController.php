<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Role;
use App\Permission;
use App\Utils\WithUtils;

class RoleController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!app(UserController::class)->havePermission($auth_user,'read_role')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $roles = Role::with(WithUtils::withUser())->all();

        if(count($roles) == 0){
            return response()->json(['success' => false,'message' => 'No hay roles registrados'], 200);
        }

        return response()->json(['success' => true,'message' => 'Lista de roles','data' => $roles], 200);
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
        $name = $request->name;
        $permissions = $request->permissions;

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());
        
        if(!app(UserController::class)->havePermission($auth_user,'create_role')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del rol es requerido'], 200);
        }
        if(!$permissions || !is_array($permissions) || count($permissions) == 0){
            return response()->json(['success' => false,'message' => 'Las permisos son requeridos'], 200);
        }
        $role = Role::create([
            'name' => $name,
            'status' => true
        ]);
        $role->permissions()->attach($permissions);
        return response()->json(['success' => true,'message' => 'Rol creado correctamente','data' => $role], 200);
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
        $name = $request->name;
        $permissions = $request->permissions;

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());
        
        if(!app(UserController::class)->havePermission($auth_user,'update_role')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del rol es requerido'], 200);
        }
        if(!$permissions || !is_array($permissions) || count($permissions) == 0){
            return response()->json(['success' => false,'message' => 'Las permisos son requeridos'], 200);
        }
        $role = Role::findOrFail($id)->update([
            'name' => $name
        ]);
        $role->permissions()->sync($permissions);
        $role->save();
        return response()->json(['success' => true,'message' => 'Rol creado correctamente','data' => $role], 200);
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

        if(!app(UserController::class)->havePermission($auth_user,'delete_role')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        $role = Role::findOrFail($id)->update(['status' => 0]);

        return response()->json(['success' => true,'message' => 'Usuario eliminado'], 200);
    }
}