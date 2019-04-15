import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'welcome'
        },
        {
            path: '*',
            name: '404',
            component: () => import(/* webpackChunkName: "about" */ './views/404')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/login')
        },
        {
            path: '/layout',
            name: 'layout',
            component: () => import(/* webpackChunkName: "about" */ './views/layout'),
            children: [{
                path: '/welcome',
                name: 'welcome',
                component: resolve => require(['@/views/welcome'], resolve)
            }, {
                path: '/accountManage',
                name: 'accountManage',
                component: resolve => require(['@/views/systemManage/accountManage'], resolve),
                meta: {
                    preTitle: '系统管理',
                    title: '后台账号管理'
                }
            }]
        }
    ]
})
