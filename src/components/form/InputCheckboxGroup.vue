<template>
  <div>
    <p> {{ question }} </p>
    <div class="checkbox" v-for="checkbox in checkboxData" :key="checkbox">
      <label v-if="checkbox === 'อื่นๆ'">
        <input type="checkbox" :value="checkbox" @click="addRemoveCheckboxValue">
        {{ checkbox }}
        <input type="text" @blur="editCheckboxOther" v-model="checkboxOther">
      </label>
      <label v-else>
        <input type="checkbox" :value="checkbox" @input="selectCheckbox(checkbox)">
        {{ checkbox }}
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    question: String,
    checkboxData: Array,
    required: Boolean
  },
  data () {
    return {
      checkboxValues: [],
      checkboxOther: '',
      checkboxOtherPrevious: '',
      isOtherCheckboxSelected: false
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
    }
  },
  watch: {
    checkboxValues () {
      this.$emit('value', this.checkboxValues)
    }
  }
}
</script>
