export default [
    {
        titulo:'Mantenimiento',
        options:[
            {
                name:'Usuarios',
                module:'user',
                icon:'fas fa-user',
                nameroute:'listuser',
                permission:'view_user',
                disabled:false
            },
            {
                name:'Roles',
                module:'role',
                icon:'fas fa-briefcase',
                nameroute:'listrole',
                permission:'view_role',
                disabled:false
            },
            {
                name:'Provedores',
                module:'provider',
                icon:'fas fa-users',
                nameroute:'listprovider',
                permission:'view_provider',
                disabled:false
            },
            {
                name:'Productos',
                module:'product',
                icon:'fas fa-box-open',
                nameroute:'listproduct',
                permission:'view_product',
                disabled:false
            },
            {
                name:'Generar_Pedido',
                module:'solicitude',
                icon:'fas fa-truck-loading',
                nameroute:'listsolicitude',
                permission:'view_solicitude',
                disabled:false
            },
        ],
        disabled:false
    },
    {
        titulo:'Operaciones',
        options:[
            {
                name:'Ventas',
                module:'proforma',
                icon:'fas fa-shopping-cart',
                nameroute:'listproforma',
                permission:'view_proforma',
                disabled:false
            },
        ],
        disabled:false
    },
]