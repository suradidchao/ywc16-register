<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    this.$router.push({name: 'authen'})
  }
}
</script>

<style>

</style>
