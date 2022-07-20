<?php


namespace App\Utils;


class WithUtils
{
    public static function withUser()
    {
        return array(
            'roles',
            'roles.permissions',
        );
    }
    public static function withRole()
    {
        return array(
            'permissions',
        );
    }
    public static function withProduct()
    {
        return array(
            'provider',
        );
    }
    public static function withSolicitude()
    {
        return array(
            //'products',
            //'products.provider',
            'request_user',
            'update_user',
        );
    }
    public static function withSolicitudeProduct()
    {
        return array(
            'product',
            'product.provider',
            'solicitude'
        );
    }
    public static function withMessage()
    {
        return array(
            'user',
            'otherUser',
            'parentTicket'
        );
    }
    public static function withProforma(){
        return array(
            'create_user',
            'update_user',
        );
    }
    public static function withProformaProduct(){
        return array(
            'product',
            'proforma',
        );
    }
}