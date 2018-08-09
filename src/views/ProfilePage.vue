<template>
  <div>
    <h1>This is profile page!!!</h1>
    <h2>{{ major }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      major () {
        return this.$store.getters.major
      },
    },
    created(){
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let majorUser = window.localStorage.getItem('ywc16_major')
    if (tokenExists) {
      if (majorUser) {
         this.$store.commit('setMajor', majorUser)
      }
      console.log('token exists')
          // request jwt backend get data
          // redirect route
    } else {
      console.log('token not exists')
      this.$router.push('/authen')
    }
  },
  }
</script>
