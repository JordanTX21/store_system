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