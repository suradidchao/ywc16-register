<template>
  <div>
       <div class="container-fluid">
    <h1 class="text-Step">STEP 5</h1>
    <p class="text-head-page">คำถามสาขา</p>
        <div class="panel panel-default">
          <div class="panel-body space-body">
            <div class="row">
            <div v-if="majorUser === 'design'">
              <div class="col-md-12">
                <app-form-input-text-area
                    :question="questionsData['specialQuestions']['design'][0]"
                    :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                    :maxLength = "3000"
                    :placeholder="'กรุณาตอบคำถามข้อนี้'"
                    :textAreaRow = "10"
                    :required="true"
                    :data="formData.majorQuestions[0]"
                    :errorInput="formDataAlert.majorQuestions[0]"
                    @value="majorQuestion"
                    >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">
                <app-form-input-text-area
                  :question="questionsData['specialQuestions']['design'][1]"
                  :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                  :placeholder="'กรุณาตอบคำถามข้อนี้'"
                  :maxLength = "3000"
                  :textAreaRow = "10"
                  :required="true"
                  :data="formData.majorQuestions[1]"
                  :errorInput="formDataAlert.majorQuestions[1]"
                  @value="majorQuestionTwo"
                >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">

                  <app-form-input-text-area
                  :question="questionsData['specialQuestions']['design'][2]"
                  :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                  :placeholder="'กรุณาตอบคำถามข้อนี้'"
                  :maxLength = "3000"
                  :textAreaRow = "10"
                  :required="true"
                  :data="formData.majorQuestions[2]"
                  :errorInput="formDataAlert.majorQuestions[2]"
                  @value="majorQuestionThree"
                >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">
                  <app-form-input-upload-file
                      :question="questionsData['specialQuestions']['design'][3]"
                      :errorMsg = "'กรุณาใส่ไฟล์'"
                      :required="true"
                      :data="formData.majorQuestions[3]"
                      :errorInput="formDataAlert.majorQuestions[3]"
                      @value="majorQuestionFour"
                    >
                    </app-form-input-upload-file>
              </div>
            </div>

          <div v-if="majorUser === 'marketing'">
            <div class="col-md-12">
              <app-form-input-text-area
                          :question="questionsData['specialQuestions']['marketing'][0]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :placeholder="'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[0]"
                          :errorInput="formDataAlert.majorQuestions[0]"
                          @value="majorQuestion"
                        >
                        </app-form-input-text-area>
            </div>
            <div class="col-md-12">
                <app-form-input-text-area
                        :question="questionsData['specialQuestions']['marketing'][1]"
                        :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                        :placeholder="'กรุณาตอบคำถามข้อนี้'"
                        :maxLength = "3000"
                        :textAreaRow = "10"
                        :required="true"
                        :data="formData.majorQuestions[1]"
                        :errorInput="formDataAlert.majorQuestions[1]"
                        @value="majorQuestionTwo"
                      >
                      </app-form-input-text-area>
            </div>
            <div class="col-md-12">
                <app-form-input-text-area
                          :question="questionsData['specialQuestions']['marketing'][2]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :placeholder="'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[2]"
                          :errorInput="formDataAlert.majorQuestions[2]"
                          @value="majorQuestionThree"
                        >
                        </app-form-input-text-area>
            </div>
          </div>

          <div v-if="majorUser === 'content'">
                <div class="col-md-12">
                  <h3 class='content-intro'>ให้น้องตอบคำถามต่อไปนี้โดยกำหนดสถานการณ์ในฐานะ Content Creator มาให้ โดยอธิบายว่าจะทำคอนเทนต์รูปแบบไหน (ภาพ, บทความ, วิดีโอ หรืออื่น ๆ) เนื้อหาเป็นอย่างไร มีวิธีการสื่อสารแบบไหน เขียนตัวอย่างเนื้อหาที่จะใช้จริงมาพอเข้าใจ
จินตนาการว่าน้องเป็นหัวหน้าพรรคการเมืองหน้าใหม่ และต้องการทำ Online Content</h3>
                </div>
                <div class="col-md-12">

                    <app-form-input-text-area
                      :question="questionsData['specialQuestions']['content'][0]"
                      :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                      :placeholder="'กรุณาตอบคำถามข้อนี้'"
                      :maxLength = "3000"
                      :textAreaRow = "10"
                      :required="true"
                      :data="formData.majorQuestions[0]"
                      :errorInput="formDataAlert.majorQuestions[0]"
                      @value="majorQuestion"
                    >
                </app-form-input-text-area>
                </div>
                <div class="col-md-12">
                  <app-form-input-text-area
                        :question="questionsData['specialQuestions']['content'][1]"
                        :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                        :placeholder="'กรุณาตอบคำถามข้อนี้'"
                        :maxLength = "3000"
                        :textAreaRow = "10"
                        :required="true"
                        :data="formData.majorQuestions[1]"
                        :errorInput="formDataAlert.majorQuestions[1]"
                        @value="majorQuestionTwo"
                      >
                    </app-form-input-text-area>
                </div>
                <div class="col-md-12">
                  <app-form-input-text-area
                      :question="questionsData['specialQuestions']['content'][2]"
                      :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                      :placeholder="'กรุณาตอบคำถามข้อนี้'"
                      :maxLength = "3000"
                      :textAreaRow = "10"
                      :required="true"
                      :data="formData.majorQuestions[2]"
                      :errorInput="formDataAlert.majorQuestions[2]"
                      @value="majorQuestionThree"
                    >
                      </app-form-input-text-area>
                </div>
          </div>

           <div v-if="majorUser === 'programming'">
              <div class="col-md-12">
                <app-form-input-text-area
                    :question="questionsData['specialQuestions']['programming'][0]"
                    :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                    :placeholder="'กรุณาตอบคำถามข้อนี้'"
                    :maxLength = "3000"
                    :textAreaRow = "10"
                    :required="true"
                    :data="formData.majorQuestions[0]"
                    :errorInput="formDataAlert.majorQuestions[0]"
                    @value="majorQuestion"
                  >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">

              <app-form-input-text-area
                  :question="questionsData['specialQuestions']['programming'][1]"
                  :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                  :placeholder="'กรุณาตอบคำถามข้อนี้'"
                  :maxLength = "3000"
                  :textAreaRow = "10"
                  :required="true"
                  :data="formData.majorQuestions[1]"
                  :errorInput="formDataAlert.majorQuestions[1]"
                  @value="majorQuestionTwo"
                >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">
                <app-form-input-text-area
                    :question="questionsData['specialQuestions']['programming'][2]"
                    :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                    :placeholder="'กรุณาตอบคำถามข้อนี้'"
                    :maxLength = "3000"
                    :textAreaRow = "10"
                    :required="true"
                    :data="formData.majorQuestions[2]"
                    :errorInput="formDataAlert.majorQuestions[2]"
                    @value="majorQuestionThree"
                  >
                  </app-form-input-text-area>
              </div>
              <div class="col-md-12">
                <app-form-input-text-area
                      :question="questionsData['specialQuestions']['programming'][3]"
                      :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                      :placeholder="'กรุณาตอบคำถามข้อนี้'"
                      :maxLength = "3000"
                      :textAreaRow = "10"
                      :required="true"
                      :data="formData.majorQuestions[3]"
                      :errorInput="formDataAlert.majorQuestions[3]"
                      @value="majorQuestionFour"
                    >
                  </app-form-input-text-area>
              </div>
          </div>
              <div class="col-md-12">
                  <center>
                    <br>
                    <button type="button" class="btn btn-lg btn-default button-size" @click="previousStep" :disabled=isDisabled><i style=" font-size: 1.5em;" class="fa fa-lg fa-angle-left"  aria-hidden="true"></i> Back</button>
                        &nbsp;
                    <button type="submit" class="btn btn-lg btn-default button-font"  @click.stop.prevent="nextStep" :disabled=isDisabled>Save & Next &nbsp;<i style=" font-size: 1.5em;" class="fa fa-lg fa-angle-right"  aria-hidden="true"></i></button>
                  </center>
                  <br>
              </div>
            </div>
          <modal v-model="alert" title="STEP 5" :footer="false">
            <p>กรุณากรอกข้อมูลให้ครบถ้วน</p>
          </modal>
          </div>
        </div>
       </div>

  </div>
</template>

<script>
import { HTTP } from '../core/http-common.js'
import questionsData from './questions.json'
import { firebaseStorage } from '../core/firebaseHelper.js'
import appFormInputUploadFile from '@/components/form/InputFile'
import appFormInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      majorUser: this.$store.getters.user.major,
      alert: false,
      isDisabled: false,
      questionsData,
      formDataAlert: {
        majorQuestions: [
          false,
          false,
          false,
          false
        ]
      },
      formData: {
        majorQuestions: []
      }
    }
  },
  computed: {

  },
  methods: {
    majorQuestion (value) {
      this.formData.majorQuestions[0] = value
    },
    majorQuestionTwo (value) {
      this.formData.majorQuestions[1] = value
    },
    majorQuestionThree (value) {
      this.formData.majorQuestions[2] = value
    },
    majorQuestionFour (value) {
      this.formData.majorQuestions[3] = value
    },
    async nextStep () {
      try {
        this.alert = false
        this.checkPageCompleteAndDispatch()
        this.$store.commit('setMajorQuestions', this.formData)
        if (this.$store.getters.majorQuestions.complete) {
          if (this.majorUser === 'design') {
            if (this.formData.majorQuestions[3] !== null && typeof this.formData.majorQuestions[3] === 'object') {
              this.isDisabled = true
              await this.uploadFile()
              await HTTP.put('/registration/special', {answers: this.formData.majorQuestions})
            }
          }
          await HTTP.put('/registration/special', {answers: this.formData.majorQuestions})
          this.$router.push('/steps/6')
        } else {
          this.alert = true
        }
      } catch (error) {
        alert(error)
      }
    },
    async uploadFile () {
      let tokenUser = JSON.parse(window.localStorage.getItem('ywc16_user_fb'))
      let getFile = this.formData.majorQuestions[3]
      let storageRef = firebaseStorage.ref('design/' + tokenUser.userID + '.pdf')
      const responseFile = await storageRef.put(getFile)
      if (responseFile) {
        const urlFile = await storageRef.getDownloadURL()
        if (urlFile) {
          this.formData.majorQuestions[3] = urlFile
          this.$store.commit('setMajorQuestions', this.formData)
        } else {
          // console.log('get url error')
        }
      } else {
        // console.log('upload file error')
      }
    },
    previousStep () {
      this.$router.push('4')
    },
    checkPageCompleteAndDispatch () {
      if (this.formData.majorQuestions.length !== questionsData.specialQuestions[this.majorUser].length) {
        this.$store.dispatch('completeMajorQuestions', false)
      } else {
        if (this.isAllAnswersFilled()) {
          this.$store.dispatch('completeMajorQuestions', true)
        } else {
          this.$store.dispatch('completeMajorQuestions', false)
        }
      }
    },
    isAllAnswersFilled () {
      for (let i in this.formData.majorQuestions) {
        if (this.formData.majorQuestions[i] === '') {
          return false
        }
      }
      return true
    }
  },
  components: {
    appFormInputTextArea,
    appFormInputUploadFile
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let majorQuestions = this.$store.getters.majorQuestions
    let majorQuestionsData = majorQuestions.data
    if (tokenExists) {
      this.formData = majorQuestionsData
    } else {
      this.$router.push('/authen')
    }
  }
}
</script>
<style scoped>
.content-intro {
  margin-bottom: 3 rem;
  color: #9b8db9;
}
</style>
