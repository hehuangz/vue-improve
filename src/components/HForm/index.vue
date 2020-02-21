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
    data () {
        return {

        }
    }
}
</script>
