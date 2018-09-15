<template>
  <div :class="{'form-group text-field-font': true, 'has-error': isError }">
      <p for="selectInput" class="text-field" :class="{ 'text-danger text-field-red': isError }">{{ question }}</p>
      <datepicker v-model="birthdate" :disabledDates="disabledDates" :placeholder="question"></datepicker>
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
      isError: false,
      birthdate: this.date,
      disabledDates: {
        to: new Date(1994, 0, 1),
        from: new Date(2000, 11, 32)
      }
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
