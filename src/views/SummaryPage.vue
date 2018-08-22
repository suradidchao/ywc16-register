<template>
  <div>
    <h2>Summary</h2>
    <hr>
    <div class="panel panel-default">
      <div class="panel-heading">ข้อมูลส่วนตัว</div>
      <div class="panel-body">

      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">คำถามส่วนกลาง</div>
      <div class="panel-body">

      </div>
    </div>

      <div class="panel panel-default">
      <div class="panel-heading">คำถามสาขา</div>
      <div class="panel-body">

      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters([
      'major',
      'profileOne',
      'profileTwo',
      'generalQuestions',
      'talent'
    ]),
    majorQuestions () {
      let majorQuestions = null
      if (this.major === 'design') {
        majorQuestions = this.$store.getters.designQuestions
      } else if (this.major === 'marketing') {
        majorQuestions = this.$store.getters.marketingQuestions
      } else if (this.major === 'content') {
        majorQuestions = this.$store.getters.contentQuestions
      } else if (this.major === 'programming') {
        majorQuestions = this.$store.getters.programmingQuestions
      }
      return majorQuestions
    }
  }
}
</script>
