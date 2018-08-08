<template>
  <div>
    <h1>This is major question page!!!</h1>

  </div>
</template>

<script>
  export default {
    name: 'major',
    created(){
    let tokenExists = window.localStorage.getItem('ywc16_access_token')
    if (tokenExists) {
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
