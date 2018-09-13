<template>
  <div>
     <div class="container">
        <h2>Summary</h2>
        <hr>
        <div class="panel panel-default">
            <div class="panel-body">
              <div class="row">
                  <div class="col-sm-12">
                    <center>
                      <h2>{{ summary.profile.title }} {{ summary.profile.firstName }} {{ summary.profile.lastName }}</h2>
                      <h2> {{ major }}</h2>
                    <br>
                    </center>
                  </div>
                  <div class="col-sm-1"></div>
                  <div class="col-sm-10">
                      <div class="panel panel-default">
                          <div class="panel-heading text-size">ข้อมูลส่วนตัว </div>
                          <div class="panel-body">
                            <div class="row">
                              <div class="col-md-6">
                                  <p><b>ชื่อ-นามสกุล: </b> {{ summary.profile.title }} {{ summary.profile.firstName }} {{ summary.profile.lastName }}</p>
                                  <p><b>ชื่อ-นามสกุล(ภาษาอังกฤษ): </b> {{ summary.profile.firstNameEN }} {{ summary.profile.lastNameEN }}</p>
                                  <p><b>ชื่อเล่น: </b> {{ summary.profile.nickname }}</p>
                                  <p><b>เพศ: </b> {{ summary.profile.sex }}</p>
                                  <p><b>วันเกิด: </b> {{ dateFormat }}</p>
                                  <p><b>กรุ๊ปเลือด: </b> {{ summary.profile.blood }}</p>
                                  <p><b>สถานศึกษา: </b> {{ summary.profile.university }}</p>
                                  <p><b>คณะ: </b> {{ summary.profile.faculty }}</p>
                                  <p><b>สาขา: </b> {{ summary.profile.department }}</p>
                                  <p><b>ชั้นปี: </b> {{ summary.profile.department }}</p>
                              </div>
                              <div class="col-md-6">
                                    <p><b>ที่อยู่: </b> {{ summary.profile.address }}</p>
                                    <p><b>จังหวัด: </b> {{ summary.profile.province }}</p>
                                    <p><b>รหัสไปรษณีย์: </b> {{ summary.profile.postalCode }}</p>
                                    <p><b>อีเมล์: </b> {{ summary.profile.email }}</p>
                                    <p><b>เบอร์ติดต่อ: </b> {{ summary.profile.phone }}</p>
                                    <p><b>ชื่อผู้ปกครอง/ชื่อผู้ติดต่อฉุกเฉิน: </b> {{ summary.profile.emergencyName }}</p>
                                    <p><b>เบอร์ติดต่อฉุกเฉิน: </b> {{ summary.profile.emergencyPhone }}</p>
                                    <p><b>เกี่ยวข้องเป็น: </b> {{ summary.profile.emergencyPhoneRelated }}</p>
                                    <p><b>ID Skype: </b> {{ summary.profile.skype }}</p>
                                    <p><b>ขนาดเสื้อ: </b> {{ summary.profile.shirtSize }}</p>
                                    <p><b>โรคประจำตัว: </b> {{ summary.profile.disease }}</p>
                                    <p><b>อาหารที่รับประทาน: </b> {{ summary.profile.food }}</p>
                                    <p><b>อาหารที่แพ้: </b> {{ summary.profile.foodAllergy }}</p>
                              </div>
                            </div>

                          </div>
                      </div>
                      <div class="panel panel-default">
                          <div class="panel-heading text-size">ความสามารถพิเศษ</div>
                          <div class="panel-body">
                              <p><b>รู้จักค่ายทางไหน: </b><br> {{ summary.profile.knowCamp.join(", ") }}</p>
                              <p><b>ความสามารถหรือกิจกรรมที่เคยทำ: </b><br> {{ summary.profile.activities }}</p>

                          </div>
                      </div>
                        <div class="panel panel-default">
                          <div class="panel-heading text-size">คำถามส่วนกลาง</div>
                          <div class="panel-body">
                              <div v-for="(item, index) in summary.generalQuestions.generalQuestions" :key="index">
                                <b>{{ questionsData['generalQuestions'][index] }}</b>
                                <p>{{ item }}</p>
                              </div>
                          </div>
                        </div>

                      <div class="panel panel-default">
                          <div class="panel-heading text-size">คำถามสาขา</div>
                          <div class="panel-body">
                              <div v-for="(item, index) in summary.majorQuestions.majorQuestions" :key="index">
                                <b>{{ questionsData['specialQuestions'][major][index] }}</b>
                                <p>{{ item }}</p>
                              </div>
                          </div>
                      </div>
                     <div class="col-sm-1"></div>
                        <center>
                            <button type="submit" class="btn btn-lg btn-default" @click="edit">Edit</button>
                            <button type="submit" class="btn btn-lg btn-default" @click="confirm">confirm</button>
                        </center>
                  </div>
              </div>
            </div>
        </div>
     </div>

  </div>
</template>
<script>
import { HTTP } from '../core/http-common.js'
import questionsData from './questions.json'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      questionsData,
      summary: {}
    }
  },
  created () {
    const tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let summary = this.$store.getters.summary
    this.summary = summary
    console.log(summary)
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
      'generalQuestions',
      'talent'
    ]),
    dateFormat () {
      let date = new Date(this.summary.profile.birthdate)
      return date.toLocaleDateString()
    },
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
    async confirm () {
      try {
        await HTTP.post('/registration/confirm')
        this.$router.push('/complete')
      } catch (error) {
        alert(error)
      }
    },
    edit () {
      this.$router.push('/steps/1')
    }
  }
}
</script>
<style>
p {
   font-size: 16px
}
.text-size {
  font-size: 22px
}
</style>
