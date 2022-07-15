<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Role;
use App\Permission;
use App\Utils\WithUtils;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!$this->havePermission($auth_user,'read_user')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $users = User::with(WithUtils::withUser())
        ->orderBy('created_at','DESC')->all();

        if(count($users) == 0){
            return response()->json(['success' => false,'message' => 'No hay usuarios registrados'], 200);
        }

        return response()->json(['success' => true,'message' => 'Lista de usuarios','data' => $users], 200);
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
        $email = $request->email;
        $password = $request->password;
        $repeat_password = $request->repeat_password;
        $role = $request->role;

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!$this->havePermission($auth_user,'create_user')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre es requerido'], 200);
        }

        if(!$email){
            return response()->json(['success' => false,'message' => 'El email es requerido'], 200);
        }

        if(!$password){
            return response()->json(['success' => false,'message' => 'La contraseña es requerida'], 200);
        }

        if(!$repeat_password){
            return response()->json(['success' => false,'message' => 'La confirmacion de contraseña es requerida'], 200);
        }

        if($password != $repeat_password){
            return response()->json(['success' => false,'message' => 'Las contraseñas no coinciden'], 200);
        }
        $request->merge(['password' => bcrypt($password)]);

        $new_user = User::create($request->all());
        $new_user->roles()->attach($role);
        $new_user->save();
        return response()->json(['success' => true,'message' => 'Usuario creado'], 200);
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

        if(!$this->havePermission($auth_user,'read_user')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        $user = User::with(WithUtils::withUser())->findOrFail($id);
        if(!$user){
            return response()->json(['success' => false,'message' => 'Usuario no encontrado'], 200);
        }
        return response()->json(['success' => true,'message' => 'Usuario encontrado','data' => $user], 200);
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
        $email = $request->email;
        $password = $request->password;
        $repeat_password = $request->repeat_password;
        $role = $request->role;

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!$this->havePermission($auth_user,'update_user')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre es requerido'], 200);
        }
        
        if(!$email){
            return response()->json(['success' => false,'message' => 'El email es requerido'], 200);
        }

        if($password){
            if($password != $repeat_password){
                return response()->json(['success' => false,'message' => 'Las contraseñas no coinciden'], 200);
            }
            $request->merge(['password' => bcrypt($password)]);
        }

        $new_user = User::findOrFail($id)->update($request->all());
        $new_user->roles()->sync($role);
        $new_user->save();
        return response()->json(['success' => true,'message' => 'Usuario creado'], 200);
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

        if(!$this->havePermission($auth_user,'delete_user')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        $user = User::findOrFail($id)->update(['status' => 0]);

        return response()->json(['success' => true,'message' => 'Usuario eliminado'], 200);
    }

    public function havePermission($user,$permission_validate){
        
        foreach ($user->roles as $role) {
            foreach ($role->permissions as $permission) {
                if($permission->name == $permission_validate){
                    return true;
                }
            }
        }
        return false;
    }

    public function searchUsers(Request $request){
        $name = $request->name;
        $date_start = $request->date_start;
        $date_end = $request->date_end;
        $limit = $request->limit;
        $start = $request->start;

        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!$this->havePermission($auth_user,'read_user')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }

        $users = User::with(WithUtils::withUser())->where([
            ['name','like','%'.$name.'%']
        ])
        ->whereBetween('created_at',["$date_start 00:00:00","$date_end 23:59:59"])
        ->orderBy('created_at','DESC');

        $count = $users->count();
        $users = $users->offset($start)->limit($limit)->get();
        return response()->json(['success' => true,'message' => 'Usuarios encontrados','data' => $users,'count' => $count], 200);
    }
}
