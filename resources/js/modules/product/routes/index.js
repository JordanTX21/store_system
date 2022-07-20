/** MODULO BASE PARA COPIAR Y PEGAR
 * SI NO PUEDES NI ESO YA VENDE CARAMELOS NO MAS
 * BY JORDAN 11-02-2022*/

 export default {
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../layouts/ProductLayout.vue'),
    children: [
        {
            path: '/product/new',
            name: 'newproduct',
            component: () => import(/* webpackChunkName: "newproduct" */ '../views/FormProduct.vue'),
        },
        {
            path: '/product/update',
            name: 'updateproduct',
            component: () => import(/* webpackChunkName: "updateproduct" */ '../views/FormProduct.vue'),
            props:true
        },
        {
            path: '/product/listar',
            name: 'listproduct',
            component: () => import(/* webpackChunkName: "listproduct" */ '../views/ListProduct.vue'),
        },
    ]
}