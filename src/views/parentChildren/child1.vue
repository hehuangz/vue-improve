<template>
    <div @click="handleSend">发送</div>
</template>

<script>
export default {
    inject: ['eat'],
    data () {
        return {
            bar: '11'
        }
    },
    mounted () {
        // console.log('attrs:', this.$attrs)
        console.log('child1', this.eat())
    },
    methods: {
        handleSend () {
            // this.$parent.$emit('send', 88)
        }
    }
}
</script>

<style>

</style>
