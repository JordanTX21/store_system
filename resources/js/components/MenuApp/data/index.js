export default [
    {
        titulo:'Seguridad',
        icon:'fas fa-shield-alt',
        options: [
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
        ],
        disabled:false
    },
    {
        titulo:'Administracion',
        icon:'fas fa-user-cog',
        options:[
            {
                name:'Provedores',
                module:'provider',
                icon:'fas fa-users',
                nameroute:'listprovider',
                permission:'view_provider',
                disabled:false
            },
        ],
        disabled:false
    },
    {
        titulo:'Almacen',
        icon:'fas fa-boxes',
        options: [
            {
                name:'Generar_Pedido',
                module:'solicitude',
                icon:'fas fa-truck-loading',
                nameroute:'listsolicitude',
                permission:'view_solicitude',
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
        ],
        disabled:false
    },
    {
        titulo:'Operaciones',
        icon:'fas fa-toolbox',
        options:[
            {
                name:'Ventas',
                module:'proforma',
                icon:'fas fa-shopping-cart',
                nameroute:'listproforma',
                permission:'view_proforma',
                disabled:false
            },
            {
                name:'Reportes',
                module:'report',
                icon:'fas fa-file',
                nameroute:'listreport',
                permission:'view_report',
                disabled:false
            },
        ],
        disabled:false
    },
]