<template>
    <div @click="handleSend">向我的兄弟发我的成绩</div>
</template>

<script>
export default {
    mounted () {
    },
    methods: {
        handleSend () {
            this.$bus.$emit('send', 98)
        }
    }
}
</script>

<style>

</style>
