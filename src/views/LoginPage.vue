<template>
<div>
  <div class="facebook-login">
    <button @click="buttonClicked">
       <i class="spinner" v-if="isWorking"></i>
      {{getButtonText}}
    </button>
  </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'facebook-login',
  props: {
    logoutLabel: {
      type: String,
      default: 'Log out from Facebook'
    },
    loginLabel: {
      type: String,
      default: 'Log in to Facebook'
    }
  },
  data() {
    return {
      isWorking: false,
      isConnected: false,
    }
  },
 created(){
    let tokenExists = window.localStorage.getItem('ywc16_access_token')
    if (tokenExists) {
      console.log('token exists')
          // request jwt backend get data
          // redirect route
    } else {
      console.log('token not exists')
      // this.login()
    }

  },
  mounted() {
    this.isWorking = true
    this.$store.dispatch('loadFb')
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    auth () {
      return this.$store.getters.isAuth
    },
    getButtonText() {
      switch (this.isConnected) {
        case true:
          return this.logoutLabel
        case false:
          return this.loginLabel
        default:
          return 'this is default'
      }
    }
  },
  watch: {
      auth (value) {
        if (value !== null && value !== undefined) {
          this.isConnected = value
          this.$store.dispatch('autoSignIn', value)
          // this.$router.push('/select_major')
        }
      },
      user (value) {
        if (value !== null && value !== undefined) {
          console.log(value);
        }
      }
  },
  methods: {
    buttonClicked() {
      if (this.isConnected) {
        this.logout()
      } else {
        this.login()
      }
    },
    login() {
      console.log('login')
      this.isWorking = true
      this.$store.dispatch('signUserIn')
    },
    logout() {
      this.isWorking = true
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
.facebook-login {
  box-sizing: border-box;
}
.facebook-login * {
  box-sizing: inherit;
}
.facebook-login button {
  border: none;
  color: #fff;
  position: relative;
  line-height: 34px;
  min-width: 225px;
  padding: 0 15px 0px 46px;
  background-image: linear-gradient(#4c69ba, #3b55a0);
}
.facebook-login .spinner {
  left: 5px;
  width: 30px;
  height: 90%;
  display: block;
  border-radius: 50%;
  position: absolute;
  border: 5px solid #f3f3f3;
  border-top-color: #3498db;
  animation: facebook-login-spin 2s linear infinite;
}
.facebook-login img {
  position: absolute;
  top: 3px;
  left: 10px;
  width: 30px;
}
@keyframes facebook-login-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
