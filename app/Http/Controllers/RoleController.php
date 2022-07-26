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
    const MODULE_NAME = 'solicitude';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!app(UserController::class)->havePermission($auth_user,'read_'.self::MODULE_NAME)){
            return response()->json(['success' => false,'message' => 'Se ha detectado un acceso no permitido'], 200);
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
        $name = trim($request->name);
        $permissions = $request->permissions;

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());
        
        if(!app(UserController::class)->havePermission($auth_user,'create_'.self::MODULE_NAME)){
            return response()->json(['success' => false,'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del rol es requerido'], 200);
        }
        if(!$permissions || !is_array($permissions) || count($permissions) == 0){
            return response()->json(['success' => false,'message' => 'Las permisos son requeridos'], 200);
        }
        $role = Role::where([['name',$name]])->first();
        if($role){
            return response()->json(['success' => false,'message' => 'El rol ya existe'], 200);
        }

        $permissions_array = [];
        foreach($permissions as $permission){
            foreach($permission as $key => $value){
                if(in_array($key, ['view','read','create','update','delete'])){
                    $permission_new = Permission::updateOrCreate(
                        [
                            'name' => $key."_".$permission["module"]
                        ],
                        [
                            'name' => $key."_".$permission["module"],
                            'status' => true
                        ]
                    );
                    if($permission[$key]){
                        $permissions_array[] = $permission_new->id;
                    }
                }
            }
        }
        $role_new = Role::create([
            'name' => $name,
            'status' => true
        ]);
        $role_new->permissions()->attach($permissions_array);
        return response()->json(['success' => true,'message' => 'Rol creado correctamente','data' => $role_new], 200);
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
        $name = trim($request->name);
        $permissions = $request->permissions;

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());
        
        if(!app(UserController::class)->havePermission($auth_user,'update_'.self::MODULE_NAME)){
            return response()->json(['success' => false,'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del rol es requerido'], 200);
        }
        if(!$permissions || !is_array($permissions) || count($permissions) == 0){
            return response()->json(['success' => false,'message' => 'Las permisos son requeridos'], 200);
        }
        $permissions_array = [];
        foreach($permissions as $permission){
            foreach($permission as $key => $value){
                if(in_array($key, ['view','read','create','update','delete'])){
                    $permission_new = Permission::updateOrCreate(
                        [
                            'name' => $key."_".$permission["module"]
                        ],
                        [
                            'name' => $key."_".$permission["module"],
                            'status' => true
                        ]
                    );
                    if($permission[$key]){
                        $permissions_array[] = $permission_new->id;
                    }
                }
            }
        }
        $role = Role::findOrFail($id);
        $role->update([
            'name' => $name
        ]);
        $role->permissions()->sync($permissions_array);
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

        if(!app(UserController::class)->havePermission($auth_user,'delete_'.self::MODULE_NAME)){
            return response()->json(['success' => false,'message' => 'Se ha detectado un acceso no permitido'], 200);
        }

        $role = Role::findOrFail($id)->update(['status' => 0]);

        return response()->json(['success' => true,'message' => 'Usuario eliminado'], 200);
    }
    public function search(Request $request)
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!app(UserController::class)->havePermission($auth_user,'read_'.self::MODULE_NAME)){
            return response()->json(['success' => false,'message' => 'Se ha detectado un acceso no permitido'], 200);
        }
        $where = [];
        $name = $request->name;
        $length = $request->length;
        $start = $request->start;
        if($name){
            if(strlen($name) < 4){
                return response()->json(['success' => false,'message' => 'Debe ingresar al menos 4 caracteres para la busqueda'], 200);
            }
            $where[] = ['name','like','%'.trim($name).'%'];
        }
        $roles = Role::with(WithUtils::withRole())
        ->where($where)
        ->orderBy('created_at','DESC')
        ->offset($start)
        ->limit($length)
        ->get();

        if(count($roles) == 0){
            return response()->json(['success' => false,'message' => 'No hay roles registrados'], 200);
        }

        return response()->json(['success' => true,'message' => 'Lista de roles','data' => $roles], 200);
    }
}
