<template>
    <div>
        <slotCom>
            <template v-slot:default>默认</template>
            <template v-slot:hh>是好好睡</template>
            <template v-slot:h2="{ foo }">我是插入的1{{foo}}</template>
        </slotCom>
    </div>
</template>

<script>
import slotCom from '@/components/slotCom'
export default {
    components: {
        slotCom
    },
    mounted () {
    }
}
</script>

<style>

</style>
