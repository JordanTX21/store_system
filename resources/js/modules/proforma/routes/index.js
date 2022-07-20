/** MODULO BASE PARA COPIAR Y PEGAR
 * SI NO PUEDES NI ESO YA VENDE CARAMELOS NO MAS
 * BY JORDAN 11-02-2022*/

 export default {
    name: 'proforma',
    component: () => import(/* webpackChunkName: "proforma" */ '../layouts/ProformaLayout.vue'),
    children: [
        {
            path: '/proforma/new',
            name: 'newproforma',
            component: () => import(/* webpackChunkName: "newproforma" */ '../views/FormProforma.vue'),
        },
        {
            path: '/proforma/update',
            name: 'updateproforma',
            component: () => import(/* webpackChunkName: "updateproforma" */ '../views/FormViewProforma.vue'),
            props:true
        },
        {
            path: '/proforma/listar',
            name: 'listproforma',
            component: () => import(/* webpackChunkName: "listproforma" */ '../views/ListProforma.vue'),
        },
    ]
}