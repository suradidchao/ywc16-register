<template>
  <div>
    <div class='form-group' :class="formGroupClass">
      <label class="control-label" >{{ question }}</label>
      <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label>
      <!-- <p>{{ errorMsg }}</p> -->
      <input type="text"
      v-model="text"
      class="form-control"
      @change="onInput"
      placeholder=""
      @blur='validateInputAndSaveState()'
      :pattern="regularExpression"
      :required='required'
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    errorMsg: String,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
