<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProformaProduct extends Model
{
    protected $table = "proforma_product";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id','proforma_id','quantity','status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'product_id','proforma_id','status','created_at', 'update_at',
    ];
    public function product(){
        return $this->belongsTo('App\Product');
    }
    public function proforma(){
        return $this->belongsTo('App\Proforma');
    }
}
