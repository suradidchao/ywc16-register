<template>
  <div>
    <!-- <modal v-model="alert" title="Login" :footer="false"> -->
      <center>
        <button style="display: none" type="button" id="fbClick" class="btn btn-default button-font" @click="fbLogin"><i class="fa fa-facebook-square" aria-hidden="true"></i> Login Facebook</button>
      </center>
    <!-- </modal> -->
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
import { getSubsetObject } from '../utils/helper'
import { HTTP } from '../core/http-common.js'
export default {
  data () {
    return {
      // alert: false,
      authorized_token: '',
      platform_mac: false,
      loginStatus: 'Not login'
    }
  },
  created () {
    if (navigator.platform === "MacIntel") {
        this.platform_mac = true
        // this.alert = true
        this.fbInit()
        document.getElementById('fbClick').onclick()
    } else {
      this.init()
    }
  },
  methods: {
    async fbInit () {
       await loadFbSdk()
        FB.getLoginStatus(response => {
          this.statusChangeCallback(response)
        })
    },
    fbLogin () {
      FB.login((response) => {
        this.statusChangeCallback(response)
      }, {
        scope: 'email',
        return_scopes: true
      })
    },
    statusChangeCallback (response) {
      if (response.status === 'connected') {
        this.loginStatus = response.status
        let userFbData = response.authResponse
        window.localStorage.setItem('ywc16_user_fb', JSON.stringify(userFbData))
        this.authorized_token = userFbData.accessToken
        this.init()
      }
    },
    async init () {
      try {
          let {token} = await this.getYWC16AccessToken()
          var userData = await this.initialiseUserData(token)
          if (!this.isUserCompleteRegistration(userData.data.payload.status)){
            this.$router.push('/steps/1')
          } else {
            this.$router.push('complete')
          }
      } catch (error) {
        alert(error.statusMessage)
      }
    },

    getYWC16AccessToken() {
      // get FB access token
      return new Promise(async (resolve, reject) => {
        try {
          let fbAccessToken = ''
          if (this.platform_mac) {
            fbAccessToken = this.authorized_token
          } else {
            fbAccessToken = await this.getFBAccessToken()
          }
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
          let userDataPayload = userData.data.payload
          const userMajor = userDataPayload.major
          const isNewUser = userMajor ? false : true;
          if (isNewUser) {
            this.$store.commit('setUser', userDataPayload)
            this.setUserMajor()
            this.$store.commit('setProfileOne', userDataPayload)
            this.$store.commit('setProfileTwo', userDataPayload)

          } else {
            this.mapPayloadToStore(userDataPayload)
          }
          return resolve(userData)
        } catch (error) {
          return reject({statusMessage: `${error} could not initialise user data`})
        }
      })
    },
    async mapPayloadToStore(payload) {
      const userSchema = this.$store.state.user.user.data
      const profileSchema = this.$store.state.profile.profileOne.data
      const contactInfoSchema = this.$store.state.profileTwo.profileTwo.data
      const talentSchema = this.$store.state.talent.talent.data
      const generalQuestionsSchema = this.$store.state.generalQuestions.generalQuestions.data
      const majorQuestionsSchema = this.$store.state.majorQuestions.majorQuestions.data

      const generalQuestionsPayload = {generalQuestions: payload.questions.generalQuestions.map(item => item.answer)}
      const majorQuestionsPayload = {majorQuestions: payload.questions.majorQuestions.map(item => item.answer)}
      const majorPayload = payload.major

      const userState = getSubsetObject(payload, userSchema)
      const profileState = getSubsetObject(payload, profileSchema)
      const contactInfoState = getSubsetObject(payload, contactInfoSchema)
      const talentState = getSubsetObject(payload, talentSchema)
      const generalQuestionsState = getSubsetObject(generalQuestionsPayload, generalQuestionsSchema)
      const majorQuestionsState = getSubsetObject(majorQuestionsPayload, majorQuestionsSchema)


      this.$store.commit('setUser', userState)
      this.$store.commit('setMajor', majorPayload)
      this.$store.commit('setProfileOne', profileState)
      this.$store.commit('setProfileTwo', contactInfoState)
      this.$store.commit('setTalent', talentState)
      this.$store.commit('setGeneralQuestions', generalQuestionsState)
      this.$store.commit('setMajorQuestions', majorQuestionsState)
    },
    async setUserMajor () {
      try {
        let majorState = window.localStorage.getItem('ywc16_user_major')

        await HTTP.put('/registration/major', { major: majorState })
        this.$store.commit('setMajor', majorState)

      } catch (error) {
        alert(error)
      }
    },
    isUserCompleteRegistration (registrationStatus) {
      return registrationStatus === 'completed' ? true : false
    }
  }
}
</script>

