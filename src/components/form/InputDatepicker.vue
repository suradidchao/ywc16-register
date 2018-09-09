<template>
  <div>
      <datepicker v-model="birthdate" :placeholder="question"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  props: {
    question: String,
    errorMsg: String,
    data: Number
  },
  data () {
    return {
      hasError: false,
      birthdate: this.data
    }
  },
  mounted () {
    let element = document.querySelector('div.vdp-datepicker input')
    element.classList.add('form-control', 'input-lg', 'input-css')
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
