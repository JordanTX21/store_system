/** MODULO BASE PARA COPIAR Y PEGAR
 * SI NO PUEDES NI ESO YA VENDE CARAMELOS NO MAS
 * BY JORDAN 11-02-2022*/

 export default {
    name: 'solicitude',
    component: () => import(/* webpackChunkName: "solicitude" */ '../layouts/SolicitudeLayout.vue'),
    children: [
        {
            path: '/solicitude/new',
            name: 'newsolicitude',
            component: () => import(/* webpackChunkName: "newsolicitude" */ '../views/FormSolicitude.vue'),
        },
        {
            path: '/solicitude/update',
            name: 'updatesolicitude',
            component: () => import(/* webpackChunkName: "updatesolicitude" */ '../views/FormViewSolicitude.vue'),
            props:true
        },
        {
            path: '/solicitude/listar',
            name: 'listsolicitude',
            component: () => import(/* webpackChunkName: "listsolicitude" */ '../views/ListSolicitude.vue'),
        },
    ]
}