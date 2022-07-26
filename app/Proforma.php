<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proforma extends Model
{
    protected $table = "proforma";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'client_document',
        'create_user_id',
        'update_user_id',
        'status_proforma',
        'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'create_user_id','update_user_id','status', 'update_at',
    ];//'created_at'
    public function create_user(){
        return $this->belongsTo('App\User','create_user_id');
    }
    public function update_user(){
        return $this->belongsTo('App\User','update_user_id');
    }
}
