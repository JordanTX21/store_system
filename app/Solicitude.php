<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solicitude extends Model
{
    protected $table = "solicitude";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'request_user_id',
        'update_user_id',
        'status_solicitude', // 0 = Pendiente, 1 = Aceptada, 2 = Rechazada, 3 = Finalizada
        'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'request_user_id','update_user_id','status', 'update_at',
    ];//'created_at'

    public function products(){
        return $this->belongsToMany(Product::class,'solicitude_product');
    }
    public function request_user(){
        return $this->belongsTo('App\User','request_user_id');
    }
    public function update_user(){
        return $this->belongsTo('App\User','update_user_id');
    }
}
