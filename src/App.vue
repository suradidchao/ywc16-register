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
body {
  background: url('./assets/Asset-1.svg'), url('./assets/bg-register.svg') center bottom no-repeat;
  color: #625EA2;
}
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import './assets/styles/main.css'
</style>
