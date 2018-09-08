<template>
  <div>
     <div class="container-fluid">
        <h2>Summary</h2>
        <hr>
        <div class="panel panel-default">
            <div class="panel-body">
              <div class="row">
                  <div class="col-md-12">
                    <center>
                      <h2>{{ summary.profile.title }} {{ summary.profile.firstName }} {{ summary.profile.lastName }}</h2>
                      <h2> {{ major }}</h2>
                    </center>
                  </div>
                  <br>
                  <br>
                  <br>
                  <div class="container">
                      <div class="panel panel-default">
                          <div class="panel-heading">ข้อมูลส่วนตัว</div>
                          <div class="panel-body">

                          </div>
                        </div>
                        <div class="panel panel-default">
                          <div class="panel-heading">คำถามส่วนกลาง</div>
                          <div class="panel-body">
                              <ul v-for="(item, index) in summary.generalQuestions.generalQuestions" :key="index">
                                <li>{{ item }}</li>
                              </ul>
                          </div>
                        </div>

                          <div class="panel panel-default">
                          <div class="panel-heading">คำถามสาขา</div>
                          <div class="panel-body">
                              <ul v-for="(item, index) in summary.majorQuestions.majorQuestions" :key="index">
                                <li>{{ item }}</li>
                              </ul>
                          </div>
                        </div>
                        <center>
                            <button type="submit" class="btn btn-lg btn-default" @click="confirm">confirm</button>
                            <button type="submit" class="btn btn-lg btn-default" @click="save">Edit</button>
                        </center>
                  </div>
              </div>
            </div>
        </div>
     </div>


  </div>
</template>
<script>
import {HTTP} from '../core/http-common.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      summary: {}
    }
  },
  created () {
    const tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let summary = this.$store.getters.summary
    this.summary = summary
    console.log(summary);
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
  },
  methods: {
    async save () {
      try {
        let res = await HTTP.post('/registration/confirm')
        if (res.data.status === 'success') {
          alert('You have completed your registration!!!(มันเปลี่ยน in progress เป็น completed ต้องไปแก้ใน db field status ให้เป็น in progress เหมือนเดิม)')
        }
        this.$router.push('/complete')
      } catch (error) {
        alert(error)
      }
    },
    cancel () {
      this.$router.push('/steps/1')
    }
  }
}
</script>


