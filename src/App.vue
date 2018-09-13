<template>
  <div id="app">
    <transition name="fades" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    // this.$router.push({name: 'authen'})
    this.$store.commit('resetAppState', '')
    localStorage.clear()
  }
}
</script>

<style>
@font-face {
      font-family: "Raleway";
      src: url("./assets/fonts/Raleway-Regular.ttf");
    }

body {
  background: url('./assets/Asset-1.svg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  color: #716AB1;
  font-family: 'Raleway', sans-serif;
}

.input-css {
  border:2px solid #E3E0F1;
  color: #716AB1;
}
.form-control:focus {
  border-color: #716AB1;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(160, 160, 232, 1), 0 0 8px rgba(113, 106, 177, 1);
          box-shadow: inset 0 1px 1px rgba(160, 160, 232, 1), 0 0 8px rgba(113, 106, 177, 1);
}
.btn-default {
  /* font-family: Raleway-SemiBold; */
  font-size: 20px;
  color: rgba(108, 88, 179, 0.75);
  letter-spacing: 2px;
  line-height: 20px;
  border: 2px solid rgba(108, 89, 179, 0.75);
  border-radius: 40px;
  background: transparent;
  transition: all 0.3s ease 0s;
}

.btn-default:hover {
  color: #FFF;
  background: rgba(108, 88, 179, 0.75);
  border: 2px solid rgba(108, 89, 179, 0.75);
}

.fades-enter{
  opacity: 0;
}

.fades-enter-active{
  transition: opacity 1s;
}

.fades-leave-active{
  transition: opacity 1s;
  opacity: 0;
  }
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import './assets/styles/main.css'
</style>
