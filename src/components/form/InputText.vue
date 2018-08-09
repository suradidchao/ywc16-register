<template>
  <div>
    <div class='form-group' v-bind:class="{'has-error': hasError}">
      <label class="control-label" >{{ question }}</label>
      <!-- <p>{{ errorMsg }}</p> -->
      <input type="text" v-model="text" class="form-control" @change="onInput" placeholder="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    errorMsg: String
  },
  data () {
    return {
      hasError: false,
      text: ''
    }
  },
  methods:{
  	onInput() {
    	this.$emit('value', this.text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
