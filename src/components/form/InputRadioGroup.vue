<template>
  <div>
    <label :class="{ 'text-danger': isError }">{{ question }}</label>
    <div class="radio" v-for="radioValue in radioData" :key='radioValue' :required="required">
      <label>
        <input type="radio" class="btn btn-default" v-model="radioGroup" v-bind:value="radioValue">
        <label>{{ radioValue }}</label>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    question: String,
    radioData: Array,
    required: Boolean,
    errorInput: Boolean,
    data: String
  },
  data () {
    return {
      isError: false,
      radioGroup: this.data
    }
  },
  watch: {
    radioGroup (value) {
      this.$emit('value', this.radioGroup)
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
