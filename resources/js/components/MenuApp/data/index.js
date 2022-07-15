export default [
    {
        titulo:'Mantenimiento',
        options:[
            {
                name:'Usuarios',
                icon:'fas fa-user',
                nameroute:'listuser',
                permission:'view_user'
            },
            {
                name:'Roles',
                icon:'fas fa-briefcase',
                nameroute:'listrole',
                permission:'view_role'
            },
            {
                name:'Productos',
                icon:'fas fa-box-open',
                nameroute:'listproduct',
                permission:'view_product'
            },
        ]
    },
    {
        titulo:'Operaciones',
        options:[
            {
                name:'Ventas',
                icon:'fas fa-shopping-cart',
                nameroute:'newservice_order',
                permission:'view_sale'
            },
        ]
    },
]