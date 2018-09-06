<template>
  <div>
  <div class="row bs-wizard" style="border-bottom:0;">

    <div id="step-1" class="col-xs-2 bs-wizard-step complete">
      <div class="text-center bs-wizard-stepnum">Step 1</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <a href="steps/1" class="bs-wizard-dot"></a>
    </div>

    <div id="step-2" class="col-xs-2 bs-wizard-step complete">
      <div class="text-center bs-wizard-stepnum">Step 2</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <a href="steps/2" class="bs-wizard-dot"></a>
    </div>

    <div id="step-3" class="col-xs-2 bs-wizard-step active">
      <div class="text-center bs-wizard-stepnum">Step 3</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <a href="#" class="bs-wizard-dot"></a>
    </div>

    <div id="step-4" class="col-xs-2 bs-wizard-step disabled">
      <div class="text-center bs-wizard-stepnum">Step 4</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <a href="#" class="bs-wizard-dot"></a>
    </div>

    <div id="step-5" class="col-xs-2 bs-wizard-step disabled">
      <div class="text-center bs-wizard-stepnum">Step 5</div>
      <div class="progress"><div class="progress-bar"></div></div>
      <a href="#" class="bs-wizard-dot"></a>
    </div>
</div>

  </div>
</template>
<script>
export default {
 data () {
   return {
    //  step:
   }
 },
 watch: {
    '$route' (to, from) {
      console.log(to.path);
      if (to.path.includes('1')) {
        // document.getElementById("step-1").classList.add('active');
        // document.getElementById("step-1").classList.remove('disabled');
        // document.getElementById("step-1").classList.remove('');
      } else if (to.path.includes('2')) {

      } else if (to.path.includes('3')) {

      } else if (to.path.includes('4')) {

      } else if (to.path.includes('5')) {


      }
    }
  }
}
</script>
<style>
.bs-wizard {margin-top: 30px;}

.bs-wizard {border-bottom: solid 1px #e0e0e0; padding: 0 0 10px 0;}
.bs-wizard > .bs-wizard-step {padding: 0; position: relative;}
.bs-wizard > .bs-wizard-step .bs-wizard-stepnum {color: #595959; font-size: 16px; margin-bottom: 5px;}
.bs-wizard > .bs-wizard-step > .bs-wizard-dot {position: absolute; width: 34px; height: 34px; display: block; background: #ffffff; top: 50px; left: 50%; margin-top: -18px; margin-left: -15px; border-radius: 50%;}
.bs-wizard > .bs-wizard-step > .bs-wizard-dot:after {content: ' '; width: 28px; height: 28px; background: #6C64AC; border-radius: 50px; position: absolute; top: 3px; left: 3px; }
.bs-wizard > .bs-wizard-step > .progress {position: relative; border-radius: 0px; height: 14px; box-shadow: none; margin: 20px 0;}
.bs-wizard > .bs-wizard-step > .progress > .progress-bar {width:0px; box-shadow: none; background: #6C64AC;}
.bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {width:100%;}
.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:0px; box-shadow: none; background: #6C64AC;}
.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:100%;}
.bs-wizard > .bs-wizard-step.active > .bs-wizard-dot {position: absolute; width: 34px; height: 34px; display: block; background: #6C64AC; top: 50px; left: 50%; margin-top: -18px; margin-left: -15px; border-radius: 50%;}
.bs-wizard > .bs-wizard-step.active > .bs-wizard-dot:after {content: ' '; width: 28px; height: 28px; background-image: linear-gradient(to right top, #ff4e50, #ff713e, #ff932b, #ffb41d, #f9d423); border-radius: 50px; position: absolute; top: 3px; left: 3px; }
.bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {width:0%;}
.bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {width: 100%;}
.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {position: absolute; width: 34px; height: 34px; display: block; background: #ffffff; top: 50px; left: 50%; margin-top: -18px; margin-left: -15px; border-radius: 50%;}
.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot:after {content: ' '; width: 28px; height: 28px; background: #E6E6F4; border-radius: 50px; position: absolute; top: 3px; left: 3px; }
.bs-wizard > .bs-wizard-step.disabled > .progress > .progress-bar {width:0px; box-shadow: none; background: #E6E6F4;}
.bs-wizard > .bs-wizard-step.disabled > .progress > .progress-bar {width: 1000px;}
.bs-wizard > .bs-wizard-step:first-child  > .progress {left: 50%; width: 50%;}
.bs-wizard > .bs-wizard-step:last-child  > .progress {width: 50%;}
.bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot{ pointer-events: none; }
</style>

