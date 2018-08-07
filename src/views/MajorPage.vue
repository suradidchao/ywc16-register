<template>
<div>
  <h2>page major</h2>
  <pre>
    {{ user }}
  </pre>
  </div>
</template>


<script>
  export default {
    name: 'major',
    created() {
      console.log(this.$store.getters.isAuth)
    //   if(this.$store.getters.isAuth == false) {
    //     this.$router.push('/')
    //   } else {
    //     console.log('log in ok');
    //   }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      auth () {
        return this.$store.getters.isAuth
      }
    },
  }
</script>
