<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    created () {
        !localStorage.operatorId && this.$router.replace('/login')
        console.log('app')
    }
}
</script>

<style lang="less">
@import './App.less';
</style>
