<template>
  <div id="app">
      <router-link to="/welcome">Welcome</router-link> ||
      <router-link to="/login">login</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
@import './App.less';
</style>
