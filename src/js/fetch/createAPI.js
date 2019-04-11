import axios from 'axios'
import baseURL from './baseUrlConfig.js'
import router from '../../router'

// 正式环境 -- 请使用真实请求 -- start
const instance = axios.create({
    // 设置超时时间 -30秒
    timeout: 30000,
    // 请求的baseUrl
    baseURL: baseURL,
    // 请求头部信息
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 修改请求数据
    transformRequest: [function (data, headers) {
        let ret = ''
        for (let it in data) {
            // 去除空字符串的请求字段
            if (data[it] !== '' && data[it] !== undefined) {
                if (ret !== '') ret += '&'
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])
            }
        }
        return ret
    }],
    // 跨域请求时允许携带凭证（cookie）
    withCredentials: process.env.NODE_ENV === 'production'
})

// 用户登录状态过期，路由重定向至登录界面
instance.interceptors.response.use((res) => {
    if (res.data.code === '2001') {
        localStorage.clear()
        const route = router.history.pending || router.history.current
        if (route.path !== '/login' || route.name !== '404') {
            router.replace('/login')
        }
        return Promise.reject(res.data)
    }
    if (!res) {
        return Promise.reject(res)
    }
    return res.data
}, (error) => {
    return Promise.reject(error)
})

const CancelToken = axios.CancelToken
function addCancel (config, $this, cancel) {
    if ($this) {
        config.CancelToken = new CancelToken(function executor (c) {
            $this[cancel] = c
        })
    }
}

function createAPI (url, method, data, $this, cancel) {
    let config = {
        method: method,
        url: url,
        data
    }
    addCancel(config, $this, cancel)
    return instance(config)
}
// 正式环境 -- 请使用真实请求 -- end

export default createAPI
