<template>
  <div>

    <div class="container-fluid">
      <stepBar></stepBar>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</div>
</template>
<style>
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

