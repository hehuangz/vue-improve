import Vue from 'vue'
// import Notice from '@/components/Notice'
function create (Component, props) {
    // 获取组件实例的方法有两个：
    // 1.vue.extend()
    const con = Vue.extend(Component)
    const vm = new con({ propsData: props })
    vm.$mount()
    // 2.render()
    // const vm = new Vue({
    //     render (h) {
    //         // render方法将传入的实例转化为虚拟方法
    //         return h(Component, { props })
    //     }
    // }).$mount() // 执行挂载函数，但未指定挂载目标，表示只执行初始化工作

    document.body.appendChild(vm.$el)
    // const comp = vm.$children[0]
    vm.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return vm
}

export default create
