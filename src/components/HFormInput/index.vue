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
export default {
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
        }
    }
}
</script>
