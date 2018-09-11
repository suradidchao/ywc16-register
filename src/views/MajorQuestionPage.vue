<template>
  <div>
       <div class="container-fluid">
             <h1>Major Questions</h1>
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
                      :maxLength = "3000"
                      :textAreaRow = "10"
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
import {HTTP} from '../core/http-common.js'
import {isEmpty} from '../utils/helper.js'
import questionsData from './questions.json'
import appFormInputUploadFile from '@/components/form/InputUploadFile'
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
      await this.$store.commit('setMajorQuestions', this.formData)
      try {
        await HTTP.put('/registration/special', {answers: this.formData.majorQuestions})
      } catch (error) {
        alert(error)
      }
      await this.$router.push('/steps/6')
    },
    previousStep () {
       this.$router.push('4')
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
      if (isEmpty(majorQuestionsData)) {
        console.log('Object is empty')
        this.$store.dispatch('completeMajorQuestions', false )
      } else {
        console.log('Object is NOT empty')
        this.$store.dispatch('completeMajorQuestions', true )
      }
      this.formData = majorQuestionsData
    } else {
      console.log('token not exists')
      this.$router.push('/authen')
    }
  }
}
</script>
