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
export default {
    inject: ['form'],
    props: {
        label: {
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
        console.log(this.form, 11)
    }
}
</script>
