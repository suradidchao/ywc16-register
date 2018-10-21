<template>
<div>
  <div class="checkboxes-container">
    <p class="text-field" style="font-size:22px">{{ question }} <span style="font-size:15px" :class="{ 'text-field-red': isError}"> <b>({{ errorMsg }})</b> </span> </p>
    <div class="checkbox" v-for="(questionCheckboxValue, index) in questionCheckboxList" :key="index">
      <div class="checkbox-container col-sm-6">
        <label>
        <input type="checkbox" class="form-radio" :checked="isChecked(questionCheckboxValue)" @click="checkOrUncheckCheckbox(questionCheckboxValue)"> <label class="checkbox-label">{{ questionCheckboxValue }}</label>
        <input type="text" class="checkbox-input" v-model="etcInputBox" v-if="questionCheckboxValue === 'อื่นๆ'">
      </label>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    question: String,
    questionCheckboxList: Array,
    userCheckboxList: Array,
    required: Boolean,
    errorMsg: String,
    errorInput: Boolean
  },
  data () {
    return {
      comQuestionCheckboxList: this.questionCheckboxList,
      comUserCheckboxList: this.userCheckboxList,
      etcInputBox: '',
      isError: false
    }
  },
  computed: {
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
    },
    validateInput () {
      if (this.required) {
        if (this.comUserCheckboxList.length === 0) {
          this.isError = true
        } else {
          this.isError = false
        }
      }
    }
  },
  watch: {
    comUserCheckboxList () {
      this.validateInput()
      this.$emit('value', this.comUserCheckboxList)
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
<style scoped>
.checkbox-label {
  padding-right: 10px;
  margin-top: 5px;
  margin-left: 6px;
}

.checkbox-input {
  height: 60px;
  background-color: #ffffff;
  border: 2px solid #E3E0F1;
  color: #716AB1;

}

.checkbox-input:focus{
  border-color: #716AB1;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(160, 160, 232, 1), 0 0 8px rgba(113, 106, 177, 1);
          box-shadow: inset 0 1px 1px rgba(160, 160, 232, 1), 0 0 8px rgba(113, 106, 177, 1);
}

.checkbox-container {
  margin-bottom: 4rem;

}

.checkboxes-container {
  height: auto;
  font-size: 20px;
  color: #716AB1;
}

.checkbox-input::-webkit-input-placeholder { color: #e3e0f1 }  /* WebKit, Blink, Edge */
.checkbox-input:-moz-placeholder { color: #e3e0f1; }  /* Mozilla Firefox 4 to 18 */
.checkbox-input::-moz-placeholder { color: #e3e0f1; }  /* Mozilla Firefox 19+ */
.checkbox-input:-ms-input-placeholder { color: #e3e0f1; }  /* Internet Explorer 10-11 */
.checkbox-input::-ms-input-placeholder { color: #e3e0f1; }  /* Microsoft Edge */

.form-radio
{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    position: relative;
    background-color: #ffffff;
    color: #716AB1;
    top: 18px;
    height: 35px;
    width: 35px;
    border: 2px solid #E3E0F1;
    border-radius: 50px;
    cursor: pointer;
    margin-right: 6px;
    outline: none;
}
.form-radio:checked::before
{
    position: absolute;
    font: 20px/1 'Open Sans', sans-serif;
    left: 6px;
    top: -2px;
    content: '\02143';
    transform: rotate(40deg);
}
.form-radio:hover
{
     background-color: #ffffff;
}
.form-radio:checked
{
     background-color: #ffffff;
}

@media only screen and (min-width: 300px) {
  .checkbox-container {
      margin-bottom: 2rem;
  }

  .checkboxes-container {
    height: auto;
    font-size: 16px;
  }

  .checkbox-label {
    padding-right: 8px;
    margin-top: 14px;
    margin-left: 0px;
  }

  .checkbox-label span {
    padding-bottom: 10px;
  }

  .checkbox-input {
    /* margin-top: 18px; */
    height: 35px;
    width: 140px;
  }
  .form-radio
  {
     top: 8px;
     height: 28px;
     width: 28px;
     border-radius: 50px;
     cursor: pointer;
     margin-right: 4px;
     outline: none;
  }
}
</style>
