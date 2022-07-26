/** MODULO BASE PARA COPIAR Y PEGAR
 * SI NO PUEDES NI ESO YA VENDE CARAMELOS NO MAS
 * BY JORDAN 11-02-2022*/

 export default {
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '../layouts/ReportLayout.vue'),
    children: [
        {
            path: '/report/new',
            name: 'newreport',
            component: () => import(/* webpackChunkName: "newreport" */ '../views/FormReport.vue'),
        },
        {
            path: '/report/update',
            name: 'updatereport',
            component: () => import(/* webpackChunkName: "updatereport" */ '../views/FormReport.vue'),
            props:true
        },
        {
            path: '/report/listar',
            name: 'listreport',
            component: () => import(/* webpackChunkName: "listreport" */ '../views/ListReport.vue'),
        },
    ]
}