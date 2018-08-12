<template>
  <div>
    <label>{{ question }}</label>
    <div class="radio" v-for="radioValue in radioData" :key='radioValue' :required="required">
      <label>
        <input type="radio" v-model="radioGroup" v-bind:value="radioValue">
        <label>{{ radioValue }}</label>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    question: String,
    radioData: Array,
    required: Boolean,
    data: String
  },
  data () {
    return {
      radioGroup: this.data
    }
  },
  watch: {
    radioGroup (value) {
      this.$emit('value', this.radioGroup)
    }
  }
}
</script>
