<template>
  <div class="form-group text-field-font"  style="margin-bottom:32px">
     <br>
    <p class="text-field" :class="{ 'text-danger text-field-red': isError }">{{ question }}</p>
    <div class="radio" v-for="radioValue in radioData" :key='radioValue'>
      <label style="color: #716AB1">
        <input type="radio" class="btn btn-default" v-model="radioGroup" @blur='validateInputAndSaveState()' v-bind:value="radioValue" :required="required">
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
  },
  methods: {
    validateInputAndSaveState () {
      this.validateInput()
    },
    validateInput () {
      if (this.required) {
        if (this.isEmptyString(this.radioGroup)) {
          this.isError = true
        } else {
          this.isError = false
        }
      }
    },
    isEmptyString (text) {
      if (text === '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
