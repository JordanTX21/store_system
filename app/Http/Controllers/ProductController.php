<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Product;
use App\Utils\WithUtils;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!app(UserController::class)->havePermission($auth_user,'read_product')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $products = Product::where('status', true)->get();

        if(count($products) == 0){
            return response()->json(['success' => false,'message' => 'No hay productos registrados'], 200);
        }

        return response()->json(['success' => true,'message' => 'Lista de productos','data' => $products], 200);
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

        if(!app(UserController::class)->havePermission($auth_user,'create_product')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $name = trim($request->name);
        $unit = trim($request->unit);
        $price = $request->price;
        $purchase_price = $request->purchase_price;
        $provider_id = $request->provider_id;

        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del producto es requerido'], 200);
        }
        if(!$unit){
            return response()->json(['success' => false,'message' => 'La unidad del producto es requerida'], 200);
        }
        if(!$price){
            return response()->json(['success' => false,'message' => 'El precio del producto es requerido'], 200);
        }
        if(!$purchase_price){
            return response()->json(['success' => false,'message' => 'El precio de compra del producto es requerido'], 200);
        }

        $provider = User::findOrFail($provider_id)->first();
        if(!$provider){
            return response()->json(['success' => false,'message' => 'El provedor del producto es requerido'], 200);
        }

        $product_new = Product::create([
            'name' => $name,
            'unit' => $unit,
            'quantity' => 0,
            'price' => $price,
            'purchase_price' => $purchase_price,
            'provider_id' => $provider_id,
            'status' => true
        ]);
        if(!$product_new){
            return response()->json(['success' => false,'message' => 'Error al crear el producto'], 200);
        }
        return response()->json(['success' => true,'message' => 'Producto creado correctamente'], 200);
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

        if(!app(UserController::class)->havePermission($auth_user,'update_product')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $name = trim($request->name);
        $unit = trim($request->unit);
        $price = $request->price;
        $purchase_price = $request->purchase_price;
        $provider_id = $request->provider_id;

        if(!$name){
            return response()->json(['success' => false,'message' => 'El nombre del producto es requerido'], 200);
        }
        if(!$unit){
            return response()->json(['success' => false,'message' => 'La unidad del producto es requerida'], 200);
        }
        if(!$price){
            return response()->json(['success' => false,'message' => 'El precio del producto es requerido'], 200);
        }
        if(!$purchase_price){
            return response()->json(['success' => false,'message' => 'El precio de compra del producto es requerido'], 200);
        }

        $provider = User::findOrFail($provider_id)->first();
        if(!$provider){
            return response()->json(['success' => false,'message' => 'El provedor del producto es requerido'], 200);
        }

        $product_new = Product::findOrFail($id)->update([
            'name' => $name,
            'unit' => $unit,
            'price' => $price,
            'purchase_price' => $purchase_price,
            'provider_id' => $provider_id,
            'status' => true
        ]);
        
        return response()->json(['success' => true,'message' => 'Producto actualizado correctamente'], 200);
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

        if(!app(UserController::class)->havePermission($auth_user,'delete_product')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $product_new = Product::findOrFail($id)->update([
            'status' => false
        ]);
        
        return response()->json(['success' => true,'message' => 'Producto eliminado correctamente'], 200);
    }
    public function search()
    {
        $auth_user = User::with(WithUtils::withUser())->findOrFail(Auth::id());

        if(!app(UserController::class)->havePermission($auth_user,'read_product')){
            return response()->json(['success' => false,'message' => 'No tiene permiso para realizar esta accion'], 200);
        }
        $name = trim(request()->name);
        $where = [
            ['status','=',true]
        ];
        if($name){
            $where[] = ['name','like','%'.$name.'%'];
        }
        $products = Product::with(WithUtils::withProduct())->where($where)->get();

        if(count($products) == 0){
            return response()->json(['success' => false,'message' => 'No se encontraron productos'], 200);
        }

        return response()->json(['success' => true,'message' => 'Lista de productos','data' => $products], 200);
    }
}
