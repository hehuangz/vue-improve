<template>
    <div>
        <child1 :foo='foo'></child1>
        <child2 @click="handleChild2"></child2>
    </div>
</template>

<script>
import child1 from './child1.vue'
import child2 from './child2.vue'
export default {
    components: {
        child1,
        child2
    },
    provide: function () {
        return {
            eat: this.toEat
        }
    },
    data () {
        return {
            foo: 'foooo'
        }
    },
    mounted () {
        console.log(this.$children[0].bar)
    },
    methods: {
        handleChild2 () {
            console.log('handleChild2')
        },
        toEat () {
            return 'hh'
        }
    }
}
</script>

<style>

</style>
