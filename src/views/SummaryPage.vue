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
        const majorUser = this.$store.getters.major
        const profileOne = this.$store.getters.profileOne
        const profileTwo = this.$store.getters.profileTwo
        const generalQuestions = this.$store.getters.generalQuestions
        let majorQuestions = null
        if (this.majorUser === 'design') {
          majorQuestions = this.$store.getters.designQuestions
        } else if (this.majorUser === 'marketing') {
          majorQuestions = this.$store.getters.marketingQuestions
        } else if (this.majorUser === 'content') {
          majorQuestions = this.$store.getters.contentQuestions
        } else if (this.majorUser === 'programming') {
          majorQuestions = this.$store.getters.programmingQuestions
        }

        if(profileOne.complete === true && profileTwo.complete === true && generalQuestions.complete === true && majorQuestions.complete === true) {

        } else {
          this.$router.push('/profile')
        }

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

