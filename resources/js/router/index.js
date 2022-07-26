import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import NProgress from 'nprogress'

import homeRouter from '../modules/home/routes/index.js'
import userRouter from '../modules/user/routes/index.js'
import roleRouter from '../modules/role/routes/index.js'
import providerRouter from '../modules/provider/routes/index.js'
import productRouter from '../modules/product/routes/index.js'
import solicitudeRouter from '../modules/solicitude/routes/index.js'
import proformaRouter from '../modules/proforma/routes/index.js'
import reportRouter from '../modules/report/routes/index.js'

Vue.use(Meta)
Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                ...homeRouter
            },
            {
                path: '/user',
                ...userRouter
            },
            {
                path: '/role',
                ...roleRouter
            },
            {
                path: '/provider',
                ...providerRouter
            },
            {
                path: '/product',
                ...productRouter
            },
            {
                path: '/solicitude',
                ...solicitudeRouter
            },
            {
                path: '/proforma',
                ...proformaRouter
            },
            {
                path: '/report',
                ...reportRouter
            },
        ],
        props: true
    },
    {
        path: '*',
        component: {template: '<h2>Error 404</h2>'}
    }
]

const router = new Router({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

router.beforeResolve((to, from, next) => {
    if (to.path) {
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router