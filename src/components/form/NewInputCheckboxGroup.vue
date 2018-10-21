<template>
<div>
  <div class="checkbox-container">
    <p class="text-field" style="font-size:22px" :class="{ 'text-danger': isError }">{{ question }}</p>
    <div class="checkbox" v-for="(questionCheckboxValue, index) in questionCheckboxList" :key="index">
      <label>
        <input type="checkbox" :checked="isChecked(questionCheckboxValue)" @click="checkOrUncheckCheckbox(questionCheckboxValue)"> {{ questionCheckboxValue }}
        <input type="text" v-model="etcInputBox" v-if="questionCheckboxValue === 'อื่นๆ'">
      </label>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    question: String,
    questionCheckboxList: Array,
    userCheckboxList: Array
  },
  data () {
    return {
      comQuestionCheckboxList: this.questionCheckboxList,
      comUserCheckboxList: this.userCheckboxList,
      etcInputBox: ''
    }
  },
  methods: {
    isChecked (questionCheckboxValue) {
      let isChecked = false
      if (questionCheckboxValue !== 'อื่นๆ') {
        isChecked = this.comUserCheckboxList.indexOf(questionCheckboxValue) === -1 ? false : true
      } else {
        isChecked = (function () {
          for (let i = 0; i < this.comUserCheckboxList.length; i++) {
            if (this.comQuestionCheckboxList.indexOf(this.comUserCheckboxList[i]) === -1) {
              this.etcInputBox = this.comUserCheckboxList[i]
              return true
            }
          }
          return false
        }).bind(this)()
      }
      return isChecked
    },
    checkOrUncheckCheckbox (questionCheckboxValue) {
      if (this.isChecked(questionCheckboxValue)) {
        if (questionCheckboxValue !== 'อื่นๆ') {
          let removingIndex = this.comUserCheckboxList.indexOf(questionCheckboxValue)
          if (removingIndex !== -1) {
            this.comUserCheckboxList.splice(removingIndex, 1)
          }
        } else {
          let removingIndex = this.comUserCheckboxList.findIndex((element) => {
            return this.comQuestionCheckboxList.indexOf(element) === -1
          })
          if (removingIndex !== -1) {
            this.comUserCheckboxList.splice(removingIndex, 1)
            this.etcInputBox = ''
          }
        }
      } else {
        if (questionCheckboxValue !== 'อื่นๆ') {
          this.comUserCheckboxList.push(questionCheckboxValue)
        } else {
          if (this.etcInputBox.length === 0) {
            this.etcInputBox = '-'
          }
          this.comUserCheckboxList.push(this.etcInputBox)
        }
      }
    }
  },
  watch: {
    comUserCheckboxList () {
      console.log(this.comUserCheckboxList)
    },
    etcInputBox () {
      let etcInputIndex = this.comUserCheckboxList.findIndex((element) => {
        return this.comQuestionCheckboxList.indexOf(element) === -1
      })
      if (etcInputIndex !== -1) {
        if (this.etcInputBox.length === 0) {
          this.comUserCheckboxList.splice(etcInputIndex, 1, '-')
        } else {
          this.comUserCheckboxList.splice(etcInputIndex, 1, this.etcInputBox)
        }
      }
    }
  }
}
</script>
