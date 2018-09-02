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
      loginStatus: 'Not login'
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      try {
        let {token} = await this.getYWC16AccessToken()
        this.initialiseUserData(token)

        this.$router.push('/steps/1')
      } catch (error) {
        alert(error.statusMessage)
      }
    },

    getYWC16AccessToken() {
      // get FB access token
      return new Promise(async (resolve, reject) => {
        try {
          let fbAccessToken = await this.getFBAccessToken()
          try {
            let ywc16AccessToken = await this.fetchYWC16AccessToken(fbAccessToken)
            return resolve({token: ywc16AccessToken, status: "success", statusMessage: 'Successfully retrieved ywc16 access token'})
          } catch (error) {
            return reject({token:'', status: "fail", statusMessage: `${error.message}: Cannot get YWC16 access token`})
          }
        } catch (error) {
          return reject({token:'', status: "fail", statusMessage: error})
        }
      })
    },
    getFBAccessToken() {
      return new Promise(async (resolve, reject) => {
        let sdkStatus = await loadFbSdk()
        let fbResponse = await fbLogin()
        if (fbResponse.status !== 'connected'){
          reject('Cannot get FB Access token')
        } else {
          this.loginStatus = fbResponse.status
          let userFbData = fbResponse.authResponse
          window.localStorage.setItem('ywc16_user_fb', JSON.stringify(userFbData))
          resolve(userFbData.accessToken)
        }
      })
    },
    fetchYWC16AccessToken(fbAccessToken) {
      return new Promise(async (resolve, reject) => {
        try {
          let result = await HTTP.post('/auth/login', { accessToken: fbAccessToken })
          HTTP.defaults.headers.common['x-access-token'] = result.data.payload.token
          return resolve(result.data.payload.token)
        } catch (error) {
          return reject(error)
        }
      })

    },
    initialiseUserData(ywc16AccessToken) {
      return new Promise( async (resolve, reject) => {
        try {
          HTTP.defaults.headers.common['x-access-token'] = ywc16AccessToken
          let userData = await HTTP.get('/users/me')
          console.log(userData)

          this.$store.commit('setProfileOne', userData.data.payload)
          this.$store.commit('setProfileTwo', userData.data.payload)
          this.$store.commit('setTalent', userData.data.payload)
          this.$store.commit('setGeneralQuestions', userData.data.payload)
          this.$store.dispatch('addMajorQuestions', userData.data.payload)
          return resolve(userData)
        } catch (error) {
          return reject({statusMessage: `${error} could not initialise user data`})
        }
      })
    },
    getInitialState(schema, data) {
      return (({...schema}) => ({...schema}))(data)
    }

  }
}
</script>

