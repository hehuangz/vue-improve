<template>
    <div v-on="$listeners">child2</div>
</template>

<script>
export default {
    inject: ['eat'],
    mounted () {
        // this.$parent.$on('send', msg => {
        //     console.log('child2', msg)
        // })
        console.log('child2', this.eat())
    },
    methods: {
        handleGet () {
        }
    }
}
</script>

<style>

</style>
