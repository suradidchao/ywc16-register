<template>
  <div>
     <label>{{ question }}</label>
      <datepicker v-model="birthdate"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  props: {
    question: String,
    errorMsg: String,
    data: String
  },
  data() {
    return {
      hasError: false,
      birthdate: this.data
    };
  },
  components: {
    Datepicker
  },
  watch: {
    birthdate(value) {
      this.$emit("value", value);
    }
  }
};
</script>


<style>
input,
select {
  padding: 0.75em 0.5em;
  font-size: 100%;
  border: 1px solid #ccc;
  width: 100%;
}
</style>
