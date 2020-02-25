<template>
    <div>
        <span>{{label}}</span>
        <slot></slot>
        <span
            v-if="error"
            style="color: red"
        >{{error}}</span>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    name: 'HFormItem',
    componentName: 'HFormItem',
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            error: ''
        }
    },
    mounted () {
        this.$on('validate', () => { this.validator() })
    },
    methods: {
        validator () {
            const rules = this.form.rules[this.prop]
            const value = this.form.model[this.prop]
            const desc = { [this.prop]: rules }
            const schema = new Schema(desc)
            return schema.validate({ [this.prop]: value }, errors => {
                if (errors) {
                    // 将错误信息显示
                    this.error = errors[0].message
                } else {
                    // 校验通过
                    this.error = ''
                }
            })
        }
    }
}
</script>
