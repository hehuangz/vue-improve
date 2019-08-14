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
            component: resolve => require(['@/views/404'], resolve)
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/login'], resolve)
        },
        {
            path: '/layout',
            name: 'layout',
            component: resolve => require(['@/views/layout'], resolve),
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
