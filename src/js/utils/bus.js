import Vue from 'vue'
class bus {
    constructor () {
        this.callback = {}
    }
    $on (name, fn) {
        this.callback[name] = this.callback[name] || []
        this.callback[name].push(fn)
    }
    $emit (name, args) {
        if (this.callback[name]) {
            this.callback[name].forEach(fn => fn(args))
        }
    }
}

Vue.prototype.$bus = new bus()
