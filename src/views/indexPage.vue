<template>
  <div>

    <div class="container-fluid">
      <div class="container">
      <stepBar></stepBar>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    </div>
      <footer></footer>
</div>
</template>
<style>
@media only screen and (min-width: 300px) {
  footer {
    min-height: 170px;
    max-height: 170px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  footer {
    min-height: 270px;
    max-height: 270px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  footer {
    min-height: 270px;
    max-height: 270px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  footer {
    min-height: 370px;
    max-height: 370px;
  }
}
footer {
    /* position:absolute; */
    bottom:0;
    position:fixed;
    width: 100%;
    z-index: -1;
    background: url('../assets/bg-register.png') no-repeat center center;
    background-size: 100% 100%;
}
  .fade-enter{
    opacity: 0;
  }

  .fade-enter-active{
    transition: opacity 1s;
  }

  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
</style>
<script>
import stepBar from '@/components/stepBar'
export default {
  components:{
      stepBar
  }
}
</script>

