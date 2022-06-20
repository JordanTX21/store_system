export default [
    {
        titulo:'Mantenimiento',
        options:[
            {
                name:'Usuarios',
                icon:'fas fa-user',
                nameroute:'list_user'
            },
            {
                name:'Roles',
                icon:'fas fa-briefcase',
                nameroute:'list_role'
            },
            {
                name:'Métodos de Pago',
                icon:'fas fa-money-check-alt',
                nameroute:'list_method_payment'
            },
            {
                name:'Productos',
                icon:'fas fa-box-open',
                nameroute:'list_products'
            },
        ]
    },
    {
        titulo:'Operaciones',
        options:[
            {
                name:'Ventas',
                icon:'fas fa-shopping-cart',
                nameroute:'newservice_order'
            },
        ]
    },
]