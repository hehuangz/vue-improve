<template>
    <div></div>
</template>

<script>
export default {
    mounted () {
        this.$bus.$on('send', this.getMsg)
    },
    methods: {
        getMsg (val) {
            console.log(val)
        }
    }
}
</script>

<style>

</style>
