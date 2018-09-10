<template>
  <div class='checkboxes-container'>
    <label> {{ question }} </label> <label style="color:#a94442" :class="errorMsgClass"> {{ errorMsg }} </label>
    <div class="checkbox" v-for="(checkbox, index) in checkboxData" :key="checkbox">
      <div class="col-md-6" v-if="index < 3">
        <div class="checkbox-container">
          <label class="label-container" v-if="checkbox === 'อื่นๆ'">
            <input type="checkbox" class="form-radio" :value="checkbox" @click="addRemoveCheckboxValue">
            <label class="checkbox-label">{{ checkbox }}</label>
            <input type="text" class="checkbox-input" @blur="editCheckboxOther" v-model="checkboxOther">
          </label>
          <label class="label-container" v-else>
            <input type="checkbox" class="form-radio" :value="checkbox" @input="selectCheckbox(checkbox)" :checked="isChecked(checkbox)">
            <label class="checkbox-label">{{ checkbox }}</label>
          </label>
        </div>
      </div>
      <div class="col-md-6" v-else>
        <div class="checkbox-container">
          <label class="label-container"  v-if="checkbox === 'อื่นๆ'">
            <input type="checkbox" class="form-radio" :value="checkbox" @click="addRemoveCheckboxValue">
            <label class="checkbox-label">{{ checkbox }}</label>
              <input type="text" class="checkbox-input" @blur="editCheckboxOther" v-model="checkboxOther">
            </label>
            <label class="label-container"  v-else>
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
      // console.log(this.checkboxAnswers)
      console.log(checkboxValue)
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
<style scoped>

.checkbox-label {
  margin-top: 25px;
  margin-left: 10px;
}

.checkbox-input {
  height: 40px;
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
  height: 300px;
}

.form-radio
{
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
     display: inline-block;
     position: relative;
     background-color: #ffffff;
     color: #716AB1;
     top: 10px;
     height: 40px;
     width: 40px;
     border: 2px solid #E3E0F1;
     border-radius: 50px;
     cursor: pointer;
     margin-right: 7px;
     outline: none;
}
.form-radio:checked::before
{
     position: absolute;
     font: 20px/1 'Open Sans', sans-serif;
     left: 11px;
     top: 7px;
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
</style>
