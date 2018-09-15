<template>
  <div>
    <div class="form-group text-field-font" :class="formGroupClass">
      <label class="text-field" for="textArea" :class="{ 'text-danger text-field-red': isError }">{{ question }}</label>
      <textarea class="form-control input-lg input-css"
        :rows="textAreaRow"
        :pattern="regularExpression"
        :maxLength="maxLength"
        :required='required'
        :placeholder="placeholder || question"
        v-model='answer'
        @blur='validateInputAndSaveState()'
        @change="onInput"
        style="resize: none;"
      >
      </textarea>
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
    regularExpression: String,
    maxLength: Number,
    textAreaRow: Number,
    required: Boolean,
    errorInput: Boolean,
    data: String
  },
  data () {
    return {
      isError: false,
      answer: this.data
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
      this.$emit('value', this.answer)
    },
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
    isEmptyString (text) {
      if (!text) {
        return true
      } else {
        return false
      }
    }
  }

}
</script>
