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

import { HTTP } from '../core/http-common.js'
export default {
  data () {
    return {
      loginStatus: 'Not logged in',
      isUserLogin: true
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      let tokenExists = window.localStorage.getItem('ywc16_user_fb')
      if (!tokenExists){
        let authenStatus = await this.authen()
        this.isUserLogin = authenStatus
      }
      if (this.isUserLogin){
        let initialiseUserStatus = await this.initialiseUserData()
        if (initialiseUserStatus){
          this.$router.push('/steps/1')
        } else {
          alert('fail to initialise user data!!!')
        }
      }
    },
    authen() {
      return new Promise(async (resolve, reject) => {
        let sdkStatus = await loadFbSdk()
        let fbResponse = await fbLogin()
        if (fbResponse.status !== 'connected'){
          reject(false)
        } else {
          this.loginStatus = fbResponse.status
          let userFbData = JSON.stringify(fbResponse.authResponse)
          window.localStorage.setItem('ywc16_user_fb', userFbData)
          resolve(true)
        }
      })

    },
    initialiseUserData() {
      return new Promise( async (resolve, reject) => {
        let result = await HTTP.post('http://localhost:3000/user_info', { facebook: '1726752237356897'})
        if (result.status === 'no user data'){
          reject(false)
        } else {
          let userInfo = result.data
          resolve(true)
        }
      })
    }
  }

}
</script>

