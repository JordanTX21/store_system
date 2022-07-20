<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
Route::get('/', 'HomeController@index')->name('home');

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home', function () {
    return redirect('/');
});

/** ABILITIES */
Route::resource('abilities','PermissionController');

/** FILES */
Route::resource('file','FileController');
Route::get('view-file/{folder}/{filename}','FileController@viewFile');
Route::get('download-file/{folder}/{filename}','FileController@downloadFile');

/** EXCEL */
Route::resource('excel','ExcelController');

/** USER */
Route::resource('user','UserController');
Route::post('search-user','UserController@search');
/** ROLE */
Route::resource('role','RoleController');
Route::post('search-role','RoleController@search');
/** PROVIDER */
Route::resource('provider','ProviderController');
Route::post('search-provider','ProviderController@search');
/** PRODUCT */
Route::resource('product','ProductController');
Route::post('search-product','ProductController@search');
/** SOLICITUDE */
Route::resource('solicitude','SolicitudeController');
Route::post('search-solicitude','SolicitudeController@search');
/** PROFORMA */
Route::resource('proforma','ProformaController');
Route::post('search-proforma','ProformaController@search');
/** INVOICE */
Route::resource('invoice','InvoiceController');
Route::post('search-invoice','InvoiceController@search');