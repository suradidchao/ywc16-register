<template>
  <div>
      <label for="selectInput" :class="{ 'text-danger': isError }">{{ question }}</label>
      <datepicker v-model="birthdate" :placeholder="question"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  props: {
    hasError: Boolean,
    question: String,
    errorMsg: String,
    errorInput: Boolean,
    date: String
  },
  data () {
    return {
      isError: this.hasError,
      birthdate: this.date
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
    },
    errorInput (value) {
      if (value) {
        this.isError = true
      } else {
        this.isError = false
      }
    }
  }
}
</script>
