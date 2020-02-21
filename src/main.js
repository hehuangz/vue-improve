import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import moment from 'moment'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import apis from './apis'
import formatters from './js/formatters'
import veeValidate from './js/veeValidate'
import './assets/less/index.less' // 自定义的icon
import '@/js/utils/bus'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 全局使用 element-ui
Vue.use(elementUi)

// 全局使用 vee-validate
Vue.use(veeValidate, {
    locale: 'zh_CN',
    fieldsBagName: 'errorBag',
    events: 'blur|input'
})

// vue原型挂载 - 请求接口函数
Vue.prototype.$apis = apis

// vue原型挂载 - 时间格式化插件
Vue.prototype.$moment = moment

// vue原型挂载 - 初始化平台信息，默认配置为【喵盟】
Vue.prototype.$brandInfo = {
    brandId: 1,
    brandName: '乐客'
}

// vue原型挂载 - 表格数据格式化函数
const formatKeys = Object.keys(formatters)
formatKeys.forEach((item) => {
    Vue.prototype[`$${item}`] = formatters[item]
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
