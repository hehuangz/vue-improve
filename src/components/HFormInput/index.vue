<template>
    <div>
        <input
            :value='value'
            :type="type"
            @input="onInput"
            v-bind="$attrs"
        >
    </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
    mixins: [emitter],
    inheritAttrs: false, // 设置为false避免展开的attr设置在根元素上
    inject: ['form'],
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        onInput (e) {
            this.$emit('input', e.target.value)
            // console.log(this.dispatch)
            this.dispatch('HFormItem', 'validate')
            // this.$parent.$emit('validate', e.target.value)
        }
    }
}
</script>
