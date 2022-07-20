/** MODULO BASE PARA COPIAR Y PEGAR
 * SI NO PUEDES NI ESO YA VENDE CARAMELOS NO MAS
 * BY JORDAN 11-02-2022*/

 export default {
    name: 'role',
    component: () => import(/* webpackChunkName: "role" */ '../layouts/RoleLayout.vue'),
    children: [
        {
            path: '/role/new',
            name: 'newrole',
            component: () => import(/* webpackChunkName: "newrole" */ '../views/FormRole.vue'),
        },
        {
            path: '/role/update',
            name: 'updaterole',
            component: () => import(/* webpackChunkName: "updaterole" */ '../views/FormRole.vue'),
            props:true
        },
        {
            path: '/role/listar',
            name: 'listrole',
            component: () => import(/* webpackChunkName: "listrole" */ '../views/ListRole.vue'),
        },
    ]
}