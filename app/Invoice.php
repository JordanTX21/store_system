<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $table = "invoice";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'proforma_id',
        'quantity',
        'total'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id','proforma_id','status','created_at', 'update_at',
    ];
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function proforma(){
        return $this->belongsTo('App\Proforma');
    }
}
