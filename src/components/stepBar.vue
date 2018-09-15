<template>
  <div>
  <div class="row bs-wizard" style="border-bottom:0; margin-left:17px;">
    <div class="col-sm-1"></div>
    <div id="step-1" class="col-xs-2 bs-wizard-step">
      <div class="text-left bs-wizard-stepnum">Step 1</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <router-link to="/steps/1" class="bs-wizard-dot"></router-link>
    </div>

    <div id="step-2" class="col-xs-2 bs-wizard-step">
      <div class="text-left bs-wizard-stepnum">Step 2</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <router-link to="/steps/2" class="bs-wizard-dot"></router-link>
    </div>

    <div id="step-3" class="col-xs-2 bs-wizard-step">
      <div class="text-left bs-wizard-stepnum">Step 3</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <router-link to="/steps/3" class="bs-wizard-dot"></router-link>
    </div>

    <div id="step-4" class="col-xs-2 bs-wizard-step">
      <div class="text-left bs-wizard-stepnum">Step 4</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <router-link to="/steps/4" class="bs-wizard-dot"></router-link>
    </div>

    <div id="step-5" class="col-xs-2 bs-wizard-step">
      <div class="text-left bs-wizard-stepnum">Step 5</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <router-link to="/steps/5" class="bs-wizard-dot"></router-link>
    </div>

      <div id="step-6" class="col-xs-1 bs-wizard-step">
        <div class="text-left bs-wizard-stepnum end">End</div>
      <router-link to="/steps/6" class="bs-wizard-dot"></router-link>
    </div>
</div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      stepEnd: 6
    }
  },
  watch: {
    '$route' (to, from) {
      let id = to.path.split('/')
      let path = id[id.length - 1]
      let num = parseInt(path)
      this.removeClassStep(1, this.stepEnd)
      this.isStepActive(num)
    }
  },
  methods: {
    isStepActive (id) {
      document.getElementById('step-' + id).classList.add('active')
      if (id !== 1) {
        this.isStepComplete(id)
      }
      if (id !== this.stepEnd) {
        this.isStepDisabled(id)
      }
    },
    isStepComplete (id) {
      let end = id - 1
      for (let i = 1; i <= end; i++) {
        document.getElementById('step-' + i).classList.add('complete')
      }
    },
    isStepDisabled (id) {
      let start = id + 1
      for (let i = start; i <= this.stepEnd; i++) {
        document.getElementById('step-' + i).classList.add('disabled')
      }
    },
    removeClassStep (start, end) {
      for (let i = start; i <= end; i++) {
        document.getElementById('step-' + i).classList.remove('disabled', 'active', 'complete')
      }
    }
  }
}
</script>
<style>
.bs-wizard {margin-top: 30px;}
.bs-wizard {border-bottom: solid 1px #e0e0e0; padding: 0 0 10px 0;}
.bs-wizard > .bs-wizard-step {padding: 0; position: relative;}
.bs-wizard > .bs-wizard-step .bs-wizard-stepnum {color: #6C64AC; font-family: 'Raleway', sans-serif; font-size: 18px; margin-bottom: 5px; margin-left: -22px;}
.bs-wizard > .bs-wizard-step > .bs-wizard-dot {position: absolute; width: 34px; height: 34px; display: block; background: #ffffff; top: 50px; left: 0%; margin-top: -18px; margin-left: -17px; border-radius: 50%;}
.bs-wizard > .bs-wizard-step > .bs-wizard-dot:after {content: ' '; width: 28px; height: 28px; background: #6C64AC; border-radius: 50px; position: absolute; top: 3px; left: 3px; }
.bs-wizard > .bs-wizard-step > .progress {position: relative; border-radius: 0px; height: 14px; box-shadow: none; margin: 17px 0;}
.bs-wizard > .bs-wizard-step > .progress > .progress-bar {width:0px; box-shadow: none; background: #6C64AC;}
.bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {width:100%;}
.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:0px; box-shadow: none; background: #6C64AC;}
.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:100%; background: #E6E6F4;}
.bs-wizard > .bs-wizard-step.active > .bs-wizard-dot {position: absolute; width: 34px; height: 34px; display: block; background: #6C64AC; top: 50px; left: 0%; margin-top: -18px; margin-left: -17px; border-radius: 50%;}
.bs-wizard > .bs-wizard-step.active > .bs-wizard-dot:after {content: ' '; width: 28px; height: 28px; background-image: linear-gradient(to left, #fe9c94, #ffaa8a, #ffba81, #ffcd7c, #fbe07d); border-radius: 50px; position: absolute; top: 3px; left: 3px; }
.bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {width:100%;}
.bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {width: 100%;}
.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {position: absolute; width: 34px; height: 34px; display: block; background: #E6E6F4; top: 50px; left: 0%; margin-top: -18px; margin-left: -17px; border-radius: 50%;}
.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot:after {content: ' '; width: 28px; height: 28px; background: #ffffff; border-radius: 50px; position: absolute; top: 3px; left: 3px; }
.bs-wizard > .bs-wizard-step.disabled > .progress > .progress-bar {width:0px; box-shadow: none; background: #E6E6F4;}
.bs-wizard > .bs-wizard-step.disabled > .progress > .progress-bar {width: 1000px;}
.bs-wizard > .bs-wizard-step:first-child  > .progress {left: 0%; width: 100%;}
.bs-wizard > .bs-wizard-step:last-child  > .progress {width: 50%;}
.bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot{ pointer-events: none; }
.bs-wizard > .bs-wizard-step > .end {margin-left: -14px;}

@media only screen and (min-width: 0px) {
    .bs-wizard > .bs-wizard-step .bs-wizard-stepnum  {
      font-size: 14px
    }
    .bs-wizard > .bs-wizard-step > .progress {
      height: 10px;
      margin: 24px 0;
    }
}

@media only screen and (min-width: 400px) {
    .bs-wizard > .bs-wizard-step .bs-wizard-stepnum  {
      font-size: 18px
    }
    .bs-wizard > .bs-wizard-step > .progress {
      height: 14px;
      margin: 17px 0;
    }
}
</style>
