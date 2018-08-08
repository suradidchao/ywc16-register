<template>
  <div>
    <h1>{{ loginStatus }}</h1>
  </div>

</template>

<script>
/* eslint-disable */
import {
  loadFbSdk,
  getFbLoginStatus,
  fbLogout,
  fbLogin
} from '../core/facebook.js'
export default {
  data () {
    return {
      loginStatus: 'Not logged in'
    }
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    if (!tokenExists){
      this.authen()
    } else {
      //ying endpoint backend to get jwt
      // save to vuex
      this.$router.push('/steps/selection')
    }


  },
  methods: {
    async authen() {
      let sdkStatus = await loadFbSdk()
      let fbResponse = await fbLogin()
      if (fbResponse.status !== 'connected'){
        alert('Login error')
      } else {
        this.loginStatus = fbResponse.status
        let userFbData = JSON.stringify(fbResponse.authResponse)
        window.localStorage.setItem('ywc16_user_fb', userFbData)
        alert('Save to local storage successful!!')
      }
    }
  }

}
</script>

