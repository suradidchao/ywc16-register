<template>
  <div>
    <div class='form-group' v-bind:class="{'has-error': hasError}">
      <label class="control-label" for="answer">{{ question }}</label>
      <p>{{ errorMsg }}</p>
      <input type="text" v-model="text" class="form-control" id="answer" placeholder="">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      hasError: true,
      text: ''
    }
  },
  props: {
    question: String,
    errorMsg: String
  },
  watch: {

  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
