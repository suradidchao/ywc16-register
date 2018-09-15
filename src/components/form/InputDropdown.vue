<template>
  <div>
    <div class="form-group text-field-font" :class="formGroupClass">
    <p class="text-field" :class="{ 'text-danger text-field-red': isError }">{{ question }}</p>
    <select v-model="selectItem" class="form-control input-lg input-css" @change="onSelect"  :required='required'   @blur='validateInputAndSaveState()'>
      <option value="" selected disabled>{{ question }}</option>
      <option v-for="option in dropdownData" v-bind:value="option" v-bind:key="option">
          {{ option }}
      </option>
    </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    errorMsg: String,
    dropdownData: Array,
    required: Boolean,
    errorInput: Boolean,
    data: String
  },
  data () {
    return {
      isError: false,
      selectItem: this.data
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
    onSelect () {
      this.$emit('value', this.selectItem)
    },
    validateInputAndSaveState () {
      this.validateInput()
    },
    validateInput () {
      if (this.required) {
        if (this.isEmptyString(this.selectItem)) {
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
