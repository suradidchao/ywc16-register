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
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import './assets/styles/main.css'
</style>
