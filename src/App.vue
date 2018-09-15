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
    // this.$router.push('/authen')
    this.$store.commit('resetAppState', '')
    localStorage.clear()
  }
}
</script>

<style>
@font-face {
      font-family: "Raleway";
      src: url("./assets/fonts/Raleway/Raleway-Regular.ttf");
    }
@font-face {
      font-family: "Raleway Bold";
      src: url("./assets/fonts/Raleway/Raleway-Bold.ttf");
    }
@font-face {
      font-family: "supermarketregular";
      src: url("./assets/fonts/supermarket-webfont.ttf");
    }
@font-face {
    font-family: 'cs_prajad';
    src: url('./assets/fonts/PraJad/CSPraJad-webfont.eot');
    src: url('./assets/fonts/PraJad/CSPraJad-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/PraJad/CSPraJad-webfont.woff2') format('woff2'),
         url('./assets/fonts/PraJad/CSPraJad-webfont.woff') format('woff'),
         url('./assets/fonts/PraJad/CSPraJad-webfont.ttf') format('truetype'),
         url('./assets/fonts/PraJad/CSPraJad-webfont.svg#cs_prajadregular') format('svg');
    font-weight: normal;
    font-style: normal;
}

body {
  background: url('./assets/Asset-1.svg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  /* color: #716AB1; */
  /* font-family: 'supermarketregular', sans-serif; */
}

.text-field-font {
  font-family: 'cs_prajad', sans-serif;
  font-size: 20px;
}

.form-control::-webkit-input-placeholder { color: #e3e0f1 }  /* WebKit, Blink, Edge */
.form-control:-moz-placeholder { color: #e3e0f1; }  /* Mozilla Firefox 4 to 18 */
.form-control::-moz-placeholder { color: #e3e0f1; }  /* Mozilla Firefox 19+ */
.form-control:-ms-input-placeholder { color: #e3e0f1; }  /* Internet Explorer 10-11 */
.form-control::-ms-input-placeholder { color: #e3e0f1; }  /* Microsoft Edge */


.text-field {
  font-family: 'cs_prajad', sans-serif;
  color: #9b8db9
}

.has-error .form-control {
  border-color: #ff9895 !important;
}

.text-field-red {
  font-family: 'cs_prajad', sans-serif;
  color:#ff9895 !important;
}

.text-Step {
    font-family: 'Raleway Bold', sans-serif;
    /* font-weight: 900; */
    color: rgba(108, 88, 179, 0.75);
    font-size: 42px;
}

.text-head-page {
  font-family: 'supermarketregular', sans-serif;
  font-size: 26px;
  color: #000;
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
.space-body {
  margin-top:30px;
  margin-bottom:30px;
  margin-left:30px;
  margin-right:30px;
}
.button-font {
  font-family: 'Raleway Bold', sans-serif;
}
.btn-default {
  font-family: 'Raleway';
  /* font-family: Raleway-SemiBold; */
  font-size: 20px;
  color: rgba(108, 88, 179, 0.931);
  letter-spacing: 1px;
  line-height: 20px;
  border: 2px solid #6d65ac;
  border-radius: 40px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 28px;
  padding-right: 28px;
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
