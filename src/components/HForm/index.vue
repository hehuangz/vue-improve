<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide () {
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object,
            require: true,
            default () {
                return {}
            }
        },
        rules: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        validate (cb) {
            const flag = true
            const flag2 = false
            // 获取所有孩子KFormItem
            // [resultPromise]
            const tasks = this.$children
                .filter(item => item.prop) // 过滤掉没有prop属性的Item
                .map(item => item.validator())

            // 统一处理所有Promise结果
            Promise.all(tasks).then(() => cb(flag)).catch(() => cb(flag2))
        }
    }
}
</script>
