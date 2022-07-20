<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SolicitudeProduct extends Model
{
    protected $table = "solicitude_product";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id','solicitude_id','quantity','status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'product_id','solicitude_id','status','created_at', 'update_at',
    ];
    public function product(){
        return $this->belongsTo('App\Product');
    }
    public function solicitude(){
        return $this->belongsTo('App\Solicitude');
    }
}
