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
    data: String
  },
  data () {
    return {
      hasError: false,
      birthdate: this.data
    }
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


