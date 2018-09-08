<template>
  <div>
      <datepicker v-model="birthdate"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  props: {
    question: String,
    errorMsg: String,
    data: Date
  },
  data () {
    return {
      hasError: false,
      birthdate: this.data
    }
  },
  mounted() {
    let element = document.querySelector("div.vdp-datepicker input")
    element.classList.add("form-control", "input-lg", "input-css")
  },
  components: {
    Datepicker
  },
  watch: {
    birthdate (value) {
      this.$emit('value', value)
    }
  }
}
</script>

<style>

</style>



