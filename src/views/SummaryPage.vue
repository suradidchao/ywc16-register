<template>
  <div>
    <div class="container">
      <h2>This is summary page!!!</h2>
      <div class="panel panel-default">
    <div class="panel-body">A Basic Panel</div>
  </div>
</div>
  </div>
</template>
<script>
export default {
    created () {
    const tokenExists = window.localStorage.getItem('ywc16_user_fb')

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

