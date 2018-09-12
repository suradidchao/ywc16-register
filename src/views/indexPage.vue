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
    transition: opacity 0.5s;
  }

  .fade-leave-active{
    transition: opacity 0.5s;
    opacity: 0;
  }
</style>
<script>
import stepBar from '@/components/stepBar'
export default {
  data () {
    return {
      stepEnd: 6
    }
  },
  created () {
    let majorUser = window.localStorage.getItem('ywc16_user_major')
    if (majorUser) {
      // this.$store.commit('setMajor', majorUser)
    }
  },
  mounted() {
      let id = window.location.pathname.split('/')
      console.log(id)
      let path = id[id.length - 1]
      const num = parseInt(path)
      this.removeClassStep(1, this.stepEnd)
      this.isStepActive(num)
    },
    methods: {
      isStepActive(id) {
        document.getElementById("step-" + id).classList.add('active')
        if(id != 1){
          this.isStepComplete(id)
        }
        if(id != this.stepEnd){
          this.isStepDisabled(id)
        }
      },
      isStepComplete(id) {
        let end = id - 1
        for (let i = 1; i <= end; i++) {
          document.getElementById("step-" + i).classList.add('complete')
        }
      },
      isStepDisabled(id) {
        let start = id + 1
        for (let i = start; i <= this.stepEnd; i++) {
          document.getElementById("step-" + i).classList.add('disabled')
        }
      },
      removeClassStep(start, end) {
        for (let i = start; i <= end; i++) {
          document.getElementById("step-" + i).classList.remove('disabled', 'active', 'complete')
        }
      }
    },
  components:{
      stepBar
  }
}
</script>

