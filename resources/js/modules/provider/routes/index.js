/** MODULO BASE PARA COPIAR Y PEGAR
 * SI NO PUEDES NI ESO YA VENDE CARAMELOS NO MAS
 * BY JORDAN 11-02-2022*/

 export default {
    name: 'provider',
    component: () => import(/* webpackChunkName: "provider" */ '../layouts/ProviderLayout.vue'),
    children: [
        {
            path: '/provider/new',
            name: 'newprovider',
            component: () => import(/* webpackChunkName: "newprovider" */ '../views/FormProvider.vue'),
        },
        {
            path: '/provider/update',
            name: 'updateprovider',
            component: () => import(/* webpackChunkName: "updateprovider" */ '../views/FormProvider.vue'),
            props:true
        },
        {
            path: '/provider/listar',
            name: 'listprovider',
            component: () => import(/* webpackChunkName: "listprovider" */ '../views/ListProvider.vue'),
        },
    ]
}