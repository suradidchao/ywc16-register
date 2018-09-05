<template>
  <div>
    <div class="container-fluid">
      <h1>Step bar</h1>
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
