<template>
  <div class='checkboxes-container'>
    <p class="text-field" style="font-size:22px" :class="{ 'text-danger': isError }">{{ question }}</p>
    <div class="checkbox" v-for="(checkbox, index) in checkboxData" :key="index">
      <div class="col-sm-6">
        <div class="checkbox-container">
          <label class="label-container" v-if="checkbox === 'อื่นๆ'">
            <input type="checkbox" class="form-radio" :value="checkbox" @click="addRemoveCheckboxValue" :checked='isOtherCheckboxSelected'>
            <label class="checkbox-label">{{ checkbox }}</label>
            <input type="text" class="checkbox-input" @blur="editCheckboxOther" :value="etcCheckboxInput" @input="editEtcTextInput">
          </label>
          <label class="label-container" v-else>
            <input type="checkbox" class="form-radio" :value="checkbox" @input="selectCheckbox(checkbox)" :checked="isChecked(checkbox)">
            <label class="checkbox-label">{{ checkbox }}</label>
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
    checkboxData: Array,
    checkboxAnswers: Array,
    errorMsg: String,
    errorInput: Boolean,
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
    },
    etcCheckboxInput () {
      let etcCheckboxInputValue = this.checkboxAnswers.find((element) => this.checkboxData.indexOf(element) === -1 ? true : false)
      return etcCheckboxInputValue
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
      if (this.isOtherCheckboxSelected) {
        let checkboxOtherIndex = this.checkboxValues.indexOf(this.checkboxOtherPrevious)
        this.checkboxValues.splice(checkboxOtherIndex, 1, this.checkboxOther)
        this.checkboxOtherPrevious = this.checkboxOther
      }
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
      if (checkboxValue !== 'อื่นๆ') {
        return this.checkboxAnswers.indexOf(checkboxValue) !== -1 ? true : false
      }
    },
    editEtcTextInput (value) {
      if (value.data && value.inputType === 'insertText') {
        this.checkboxOther += value.data
      } else if (value.inputType === 'deleteContentBackward') {
        this.checkboxOther = this.checkboxOther.slice(0, -1)
      }
    }
  },
  watch: {
    checkboxValues () {
      this.validateInput()
      this.$emit('value', this.checkboxValues)
    },
    errorInput (value) {
      if (value) {
        this.isError = true
      } else {
        this.isError = false
      }
    }
  },
  created () {
    let etcCheckboxInputValue = this.checkboxAnswers.find((element) => this.checkboxData.indexOf(element) === -1 ? true : false)
    if (etcCheckboxInputValue !== '' && etcCheckboxInputValue !== undefined) {
      console.log(etcCheckboxInputValue)
      this.checkboxOther = etcCheckboxInputValue
      this.isOtherCheckboxSelected = true
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
