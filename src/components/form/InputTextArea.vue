<template>
  <div>
    <div class="form-group" :class="formGroupClass">
      <label for="textArea">{{ question }}</label>
      <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label>
      <textarea class="form-control"
        :rows="textAreaRow"
        :pattern="regularExpression"
        :maxLength="maxLength"
        :required='required'
        v-model='answer'
        @blur='validateInputAndSaveState()'
      >
      </textarea>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    question: String,
    errorMsg: String,
    regularExpression: String,
    maxLength: Number,
    textAreaRow: Number,
    required: Boolean
  },
  data () {
    return {
      isError: false,
      answer: ''
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
    validateInputAndSaveState () {
      this.validateInput()
    },
    validateInput () {
      if (this.required) {
        if (this.isEmptyString(this.answer)) {
          this.isError = true
        } else {
          this.isError = false
        }
      }
      // validate if not pass also set isError to true
    },
    saveState () {

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
