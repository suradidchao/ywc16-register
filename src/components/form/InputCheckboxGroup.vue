<template>
  <div>
    <label> {{ question }} </label> <label style="color:#a94442" :class="errorMsgClass"> {{ errorMsg }} </label>
    <div class="checkbox" v-for="checkbox in checkboxData" :key="checkbox">
      <label v-if="checkbox === 'อื่นๆ'">
        <input type="checkbox" :value="checkbox" @click="addRemoveCheckboxValue">
        <label>{{ checkbox }}</label>
        <input type="text" @blur="editCheckboxOther" v-model="checkboxOther">
      </label>
      <label v-else>
        <input type="checkbox" :value="checkbox" @input="selectCheckbox(checkbox)" :checked="isChecked(checkbox)">
        <label>{{ checkbox }}</label>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    question: String,
    checkboxData: Array,
    checkboxAnswers: Array,
    errorMsg: String,
    required: Boolean
  },
  data () {
    return {
      checkboxValues: [],
      checkboxOther: '',
      checkboxOtherPrevious: '',
      isOtherCheckboxSelected: false,
      isError: false
    }
  },
  computed: {
    errorMsgClass () {
      return {
        'has-error': true,
        'hidden': this.showErrorMsg
      }
    },
    showErrorMsg () {
      return !this.isError
    }
  },
  methods: {
    selectCheckbox (value) {
      let modifyingIndex = this.checkboxValues.indexOf(value)
      if (modifyingIndex === -1) {
        this.checkboxValues.push(value)
      } else {
        this.checkboxValues.splice(modifyingIndex, 1)
      }
    },
    addRemoveCheckboxValue () {
      if (this.isOtherCheckboxSelected) {
        let otherCheckboxValueIndex = this.checkboxValues.indexOf(this.checkboxOther)
        this.checkboxValues.splice(otherCheckboxValueIndex, 1)
        this.checkboxOther = ''
        this.isOtherCheckboxSelected = false
      } else {
        this.checkboxValues.push(this.checkboxOther)
        this.isOtherCheckboxSelected = true
      }
    },
    editCheckboxOther () {
      let checkboxOtherIndex = this.checkboxValues.indexOf(this.checkboxOtherPrevious)
      this.checkboxValues.splice(checkboxOtherIndex, 1, this.checkboxOther)
      this.checkboxOtherPrevious = this.checkboxOther
    },
    validateInput () {
      if (this.required) {
        if (this.checkboxValues.length === 0) {
          this.isError = true
        } else {
          this.isError = false
        }
      }
      // validate if not pass also set isError to true
    },
    isChecked (checkboxValue) {
      let checked = this.checkboxAnswers.indexOf(checkboxValue) !== -1 ? true : false
      console.log('checked: ' + checked)
      return this.checkboxAnswers.indexOf(checkboxValue) !== -1 ? true : false
    }
  },
  watch: {
    checkboxValues () {
      this.validateInput()
      this.$emit('value', this.checkboxValues)
    }
  }
}
</script>
