import Vue from 'vue'
function create (Component, props) {
    const vm = new Vue({
        render (h) {
            // render方法将传入的实例转化为虚拟方法
            return h(Component, { props })
        }
    }).$mount() // 执行挂载函数，但未指定挂载目标，表示只执行初始化工作

    document.body.appendChild(vm.$el)

    const comp = vm.$children[0]
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}

export default create
