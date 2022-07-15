/** MODULO BASE PARA COPIAR Y PEGAR
 * SI NO PUEDES NI ESO YA VENDE CARAMELOS NO MAS
 * BY JORDAN 11-02-2022*/

 export default {
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../layouts/UserLayout.vue'),
    children: [
        {
            path: '/user/new',
            name: 'newuser',
            component: () => import(/* webpackChunkName: "newuser" */ '../views/FormUser.vue'),
        },
        {
            path: '/user/update',
            name: 'updateuser',
            component: () => import(/* webpackChunkName: "updateuser" */ '../views/FormUser.vue'),
            props:true
        },
        {
            path: '/user/listar',
            name: 'listuser',
            component: () => import(/* webpackChunkName: "listuser" */ '../views/ListUser.vue'),
        },
    ]
}