<template>
  <div>
     <div class="container">
        <h1 class="text-Step">CONFIRM</h1>
        <p class="text-head-page">ตรวจสอบและยืนยัน</p>
        <div class="panel panel-default">
            <div class="panel-body">
              <div class="row">
                  <div class="col-sm-12">
                    <center>
                      <br>
                      <h2>{{ summary.profile.title }} {{ summary.profile.firstName }} {{ summary.profile.lastName }}</h2>
                      <h2>สาขา Web {{ major.charAt(0).toUpperCase() + major.slice(1) }}</h2>
                    <br>
                    </center>
                  </div>
                  <div class="col-sm-1"></div>
                  <div class="col-sm-10">
                      <div class="panel panel-default panel-border">
                          <div class="panel-heading text-size panel-heading-custom">ข้อมูลส่วนตัว </div>
                          <div class="panel-body text-size-ask">
                            <div class="row">
                              <div class="col-md-6">
                                  <p><b class="text-size-anwer">ชื่อ-นามสกุล: </b> {{ summary.profile.title }} {{ summary.profile.firstName }} {{ summary.profile.lastName }}</p>
                                  <p><b class="text-size-anwer">ชื่อ-นามสกุล(ภาษาอังกฤษ): </b> {{ summary.profile.firstNameEN }} {{ summary.profile.lastNameEN }}</p>
                                  <p><b class="text-size-anwer">ชื่อเล่น: </b> {{ summary.profile.nickname }}</p>
                                  <p><b class="text-size-anwer">เพศ: </b> {{ summary.profile.sex }}</p>
                                  <p><b class="text-size-anwer">วันเกิด: </b> {{ dateFormat }}</p>
                                  <p><b class="text-size-anwer">กรุ๊ปเลือด: </b> {{ summary.profile.blood }}</p>
                                  <p><b class="text-size-anwer">สถานศึกษา: </b> {{ summary.profile.university }}</p>
                                  <p><b class="text-size-anwer">คณะ: </b> {{ summary.profile.faculty }}</p>
                                  <p><b class="text-size-anwer">สาขา: </b> {{ summary.profile.department }}</p>
                                  <p><b class="text-size-anwer">ชั้นปี: </b> {{ summary.profile.department }}</p>
                              </div>
                              <div class="col-md-6">
                                    <p><b class="text-size-anwer">ที่อยู่: </b> {{ summary.profile.address }}</p>
                                    <p><b class="text-size-anwer">จังหวัด: </b> {{ summary.profile.province }}</p>
                                    <p><b class="text-size-anwer">รหัสไปรษณีย์: </b> {{ summary.profile.postalCode }}</p>
                                    <p><b class="text-size-anwer">อีเมล์: </b> {{ summary.profile.email }}</p>
                                    <p><b class="text-size-anwer">เบอร์ติดต่อ: </b> {{ summary.profile.phone }}</p>
                                    <p><b class="text-size-anwer">ชื่อผู้ปกครอง/ชื่อผู้ติดต่อฉุกเฉิน: </b> {{ summary.profile.emergencyName }}</p>
                                    <p><b class="text-size-anwer">เบอร์ติดต่อฉุกเฉิน: </b> {{ summary.profile.emergencyPhone }}</p>
                                    <p><b class="text-size-anwer">เกี่ยวข้องเป็น: </b> {{ summary.profile.emergencyPhoneRelated }}</p>
                                    <p><b class="text-size-anwer">ID Skype: </b> {{ summary.profile.skype }}</p>
                                    <!-- <p><b class="text-size-anwer">ขนาดเสื้อ: </b> {{ summary.profile.shirtSize }}</p> -->
                                    <p><b class="text-size-anwer">โรคประจำตัว: </b> {{ summary.profile.disease }}</p>
                                    <p><b class="text-size-anwer">อาหารที่รับประทาน: </b> {{ summary.profile.food }}</p>
                                    <p><b class="text-size-anwer">อาหารที่แพ้: </b> {{ summary.profile.foodAllergy }}</p>
                              </div>
                            </div>

                          </div>
                      </div>
                      <div class="panel panel-default panel-border">
                          <div class="panel-heading text-size panel-heading-custom">ความสามารถพิเศษ</div>
                          <div class="panel-body text-size-ask">
                              <p><b class="text-size-anwer">รู้จักค่ายทางไหน: </b><br> {{ summary.profile.knowCamp.join(", ") }}</p>
                              <p><b class="text-size-anwer">ความสามารถหรือกิจกรรมที่เคยทำ: </b><br> {{ summary.profile.activities }}</p>

                          </div>
                      </div>
                        <div class="panel panel-default panel-border">
                          <div class="panel-heading text-size panel-heading-custom">คำถามส่วนกลาง</div>
                          <div class="panel-body text-size-ask">
                              <div v-for="(item, index) in summary.generalQuestions.generalQuestions" :key="index">
                                <b class="text-size-anwer">{{ questionsData['generalQuestions'][index] }}</b>
                                <p>{{ item }}</p>
                              </div>
                          </div>
                        </div>

                      <div class="panel panel-default panel-border">
                          <div class="panel-heading text-size panel-heading-custom">คำถามสาขา</div>
                          <div class="panel-body text-size-ask">
                              <div v-for="(item, index) in summary.majorQuestions.majorQuestions" :key="index">
                                <b class="text-size-anwer">{{ questionsData['specialQuestions'][major][index] }}</b>
                                <div v-if="item.includes('firebasestorage')">
                                    <a :href="item" download>
                                      Download
                                    </a>
                                </div>
                                <div v-else>
                                    <p>{{ item }}</p>
                                </div>
                              </div>
                          </div>
                      </div>
                     <div class="col-sm-1"></div>
                      <div class="col-sm-12">
                        <center>
                          <br>
                            <button type="submit" class="btn btn-lg btn-default button-size" @click="edit">Edit</button>
                              &nbsp;
                            <button type="submit" class="btn btn-lg btn-default" @click="confirm">confirm</button>
                        </center>
                        <br><br>
                        </div>
                  </div>
              </div>
            </div>
        </div>
        <br>
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
    if (!tokenExists) {
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
.panel-default > .panel-heading-custom {
  background:#E3E0F1;
  color: #6d65ac;
}
.panel-border {
  border-color: #716AB1;
}

.text-size {
  color:rgba(108, 88, 179, 0.75);
  font-size: 20px
}

.text-size-ask {
  font-size: 18px;
  color: #000;
}

.text-size-anwer {
  color: #6d65ac
}

</style>
