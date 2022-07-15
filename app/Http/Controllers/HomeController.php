<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\Utils\WithUtils;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $roles = Role::with(WithUtils::withRole())->where('status',true)->get();
        return view('home',[
            "roles" => $roles
        ]);
    }
}
