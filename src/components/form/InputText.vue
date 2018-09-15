<template>
  <div>
    <div class='form-group text-field-font' :class="formGroupClass">
      <p class="text-field" :class="{ 'text-danger text-field-red': isError }">{{ question }}</p>
      <input :type="type"
      v-model="text"
      class="form-control input-lg input-css"
      @change="onInput"
      :placeholder="placeholder || question"
      @blur='validateInputAndSaveState()'
      :pattern="regularExpression"
      :required='required'
      >
      <!-- <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label> -->
      <br>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    placeholder: String,
    errorMsg: String,
    type: {
      default: 'text',
      type: String
    },
    regularExpression: String,
    required: Boolean,
    errorInput: Boolean,
    data: String
  },
  data () {
    return {
      isError: false,
      text: this.data
    }
  },
  watch: {
    errorInput (value) {
      if (value) {
        this.isError = true
      } else {
        this.isError = false
      }
    }
  },
  computed: {
    formGroupClass () {
      return {
        'has-error': this.isError
      }
    },
    errorMsgClass () {
      return {
        'hidden': this.showErrorMsg
      }
    },
    showErrorMsg () {
      return !this.isError
    }
  },
  methods: {
    onInput () {
      this.$emit('value', this.text)
    },
    validateInputAndSaveState () {
      this.validateInput()
    },
    validateInput () {
      if (this.required) {
        if (this.isEmptyString(this.text)) {
          this.isError = true
        } else {
          this.isError = false
        }
      }
      // validate if not pass also set isError to true
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
