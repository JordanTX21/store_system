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
    public static function withMessage()
    {
        return array(
            'user',
            'otherUser',
            'parentTicket'
        );
    }
}