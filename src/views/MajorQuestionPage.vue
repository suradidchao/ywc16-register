<template>
  <div>
       <div class="container-fluid">
    <h1 class="text-Step">Step 5</h1>
    <b class="text-head-page">คำถามสาขา</b>
    <hr>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
            <div v-if="majorUser == 'design'">
              <div class="col-md-12">
                <app-form-input-text-area
                    :question="questionsData['specialQuestions']['design'][0]"
                    :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                    :maxLength = "3000"
                    :textAreaRow = "10"
                    :required="true"
                    :data="formData.majorQuestions[0]"
                    @value="majorQuestion"
                    >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">
                <app-form-input-text-area
                  :question="questionsData['specialQuestions']['design'][1]"
                  :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                  :maxLength = "3000"
                  :textAreaRow = "10"
                  :required="true"
                  :data="formData.majorQuestions[1]"
                  @value="majorQuestionTwo"
                >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">

                  <app-form-input-text-area
                  :question="questionsData['specialQuestions']['design'][2]"
                  :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                  :maxLength = "3000"
                  :textAreaRow = "10"
                  :required="true"
                  :data="formData.majorQuestions[2]"
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
                      @value="majorQuestionFour"
                    >
                    </app-form-input-upload-file>
              </div>
            </div>

          <div v-if="majorUser == 'marketing'">
            <div class="col-md-12">
              <app-form-input-text-area
                          :question="questionsData['specialQuestions']['marketing'][0]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[0]"
                          @value="majorQuestion"
                        >
                        </app-form-input-text-area>
            </div>
            <div class="col-md-12">
                <app-form-input-text-area
                        :question="questionsData['specialQuestions']['marketing'][1]"
                        :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                        :maxLength = "3000"
                        :textAreaRow = "10"
                        :required="true"
                        :data="formData.majorQuestions[1]"
                        @value="majorQuestionTwo"
                      >
                      </app-form-input-text-area>
            </div>
            <div class="col-md-12">
                <app-form-input-text-area
                          :question="questionsData['specialQuestions']['marketing'][2]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[2]"
                          @value="majorQuestionThree"
                        >
                        </app-form-input-text-area>
            </div>
          </div>

          <div v-if="majorUser == 'content'">
                <div class="col-md-12">

                    <app-form-input-text-area
                      :question="questionsData['specialQuestions']['content'][0]"
                      :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                      :maxLength = "3000"
                      :textAreaRow = "10"
                      :required="true"
                      :data="formData.majorQuestions[0]"
                      @value="majorQuestion"
                    >
                    </app-form-input-text-area>
                </div>
                <div class="col-md-12">
                  <app-form-input-text-area
                          :question="questionsData['specialQuestions']['content'][1]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[1]"
                          @value="majorQuestionTwo"
                        >
                        </app-form-input-text-area>
                </div>
                <div class="col-md-12">
                  <app-form-input-text-area
                        :question="questionsData['specialQuestions']['content'][2]"
                        :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                        :maxLength = "3000"
                        :textAreaRow = "10"
                        :required="true"
                        :data="formData.majorQuestions[2]"
                        @value="majorQuestionThree"
                      >
                      </app-form-input-text-area>
                </div>
          </div>

           <div v-if="majorUser == 'programming'">
              <div class="col-md-12">
                <app-form-input-text-area
                          :question="questionsData['specialQuestions']['programming'][0]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[0]"
                          @value="majorQuestion"
                        >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">

              <app-form-input-text-area
                          :question="questionsData['specialQuestions']['programming'][1]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[1]"
                          @value="majorQuestionTwo"
                        >
                </app-form-input-text-area>
              </div>
              <div class="col-md-12">
                <app-form-input-text-area
                          :question="questionsData['specialQuestions']['programming'][2]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[2]"
                          @value="majorQuestionThree"
                        >
                        </app-form-input-text-area>
              </div>
              <div class="col-md-12">
                <app-form-input-text-area
                          :question="questionsData['specialQuestions']['programming'][3]"
                          :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                          :maxLength = "3000"
                          :textAreaRow = "10"
                          :required="true"
                          :data="formData.majorQuestions[3]"
                          @value="majorQuestionFour"
                        >
                        </app-form-input-text-area>
              </div>
          </div>

              <div class="col-md-4"></div>
              <div class="col-md-4">
                  <center>
                    <br>
                    <button type="submit" class="btn btn-lg btn-default" @click="previousStep">Back</button>
                    <button type="submit" class="btn btn-lg btn-default" @click.stop.prevent="nextStep">Save & Next</button>
                  </center>
                  <br>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
        </div>
       </div>

  </div>
</template>

<script>
import { HTTP } from '../core/http-common.js'
import questionsData from './questions.json'
import appFormInputUploadFile from '@/components/form/InputFile'
import appFormInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      majorUser: this.$store.getters.major,
      questionsData,
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
        this.checkPageCompleteAndDispatch()
        this.$store.commit('setMajorQuestions', this.formData)
        if (this.$store.getters.majorQuestions.complete) {
          if (this.formData.picture !== null && typeof this.formData.picture === 'object') {
            this.isDisabled = true
            await this.uploadFile()
          }
          await HTTP.put('/registration/special', {answers: this.formData.majorQuestions})
          this.$router.push('/steps/6')
        } else {
          alert('กรุณากรอกข้อมูลให้ครบถ้วน')
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
          this.formData.picture = urlFile
        } else {
          console.log('get url error')
        }
      } else {
        console.log('upload file error')
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
