<template>
  <div>
    <div class='form-group' :class="formGroupClass">
      <input :type="type"
      v-model="text"
      class="form-control input-lg input-css"
      @change="onInput"
      :placeholder="question"
      @blur='validateInputAndSaveState()'
      :pattern="regularExpression"
      :required='required'
      >
      <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    errorMsg: String,
    type: {
      default: 'text',
      type: String
    },
    regularExpression: String,
    required: Boolean,
    data: String
  },
  data () {
    return {
      isError: false,
      text: this.data
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
