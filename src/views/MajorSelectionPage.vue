<template>
  <div>
    <h1>This is major selection page!!!</h1>
    <div class="container">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="major">
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
          <option value="content">Content</option>
          <option value="programming">Programming</option>
        </select>
      </div>
      <router-link to="profile">Next</router-link>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      major: this.$store.getters.major
    }
  },
  watch: {
    major (value) {
      this.$store.commit('setMajor', value)
    }
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let majorUser = this.$store.getters.major
    if (tokenExists) {
      if (this.$store.getters.major) {
        this.$store.commit('setMajor', majorUser)
        // this.$store.commit('clearProfile')
        // this.$router.push('/steps/profile')
      }
      console.log('token exists')
      // request jwt backend get data
      // redirect route
    } else {
      console.log('token not exists')
      this.$router.push('/authen')
    }
  }
}

</script>
