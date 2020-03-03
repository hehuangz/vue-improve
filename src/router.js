import Vue from 'vue'
import Router from './hrouter'

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
            path: '/form',
            name: 'form',
            component: resolve => require(['@/views/form'], resolve)
        },
        {
            path: '/bus',
            name: 'bus',
            component: resolve => require(['@/views/bus'], resolve)
        },
        {
            path: '/parentChildren',
            name: 'parentChildren',
            component: resolve => require(['@/views/parentChildren'], resolve)
        },
        {
            path: '/slot',
            name: 'slot',
            component: resolve => require(['@/views/slot'], resolve)
        },
        {
            path: '/myForm',
            name: 'myForm',
            component: resolve => require(['@/views/myForm'], resolve)
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
