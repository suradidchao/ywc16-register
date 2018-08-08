<template>
  <div>
    <h1>This is major selection page!!!</h1>
    <div class="container">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="major">
          <option>Marketing</option>
          <option>Design</option>
          <option>Content</option>
          <option>Programming</option>
        </select>
      </div>
      {{ major}}
      <router-link to="profile">Next</router-link>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      'major': ''
    }
  },
  watch: {
    major(value) {
      if (value !== ''){
        this.$store.dispatch('saveMajor', value)
      }
    }
  }
}
</script>
