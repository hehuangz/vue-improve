let Vue
class hrouter {
    constructor (options) {
        this.$options = options
        this.current = ''
        // 把current变成响应式的，默认为/
        Vue.util.defaineReactive(this, 'current', '/')
        // hashChange时拿到当前的hash，bind是为了不改变this
        window.addEventListener('hashChange', this.hashChange.bind(this))
        // load时拿到当前的hash
        window.addEventListener('load', this.onHashChange.bind(this))
    }
    hashChange () {
        this.current = this.window.current.hash
    }
}

hrouter.install = function (_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeMount () {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        }
    })
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        render (h) {
            // h(tag, attr, data)
            return h('a', { attrs: { href: this.to } }, this.$slots.default)
        }
    })
    Vue.component('router-view', {
        render (h) {
            const { routeMap, current } = this.$router
            const component = routeMap[current].component || null
            return h(component)
        }
    })
}
export default hrouter
