<template>
  <div>
    <div class="container-fluid">
    <h1>Step 4</h1>
    <b>คำถามส่วนกลาง</b>
    <hr>
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <app-form-input-text-area
                      :question="questionsData['generalQuestions'][0]"
                      :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                      :maxLength = "3000"
                      :textAreaRow = "10"
                      :required="true"
                      :data="formData.generalQuestions[0]"
                      :errorInput="formDataAlert.generalQuestions[0]"
                      @value="generalQuestion"
                    >
                    </app-form-input-text-area>
            </div>
            <div class="col-md-12">
                <app-form-input-text-area
                  :question="questionsData['generalQuestions'][1]"
                  :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                  :maxLength = "3000"
                  :textAreaRow = "10"
                  :required="true"
                  :data="formData.generalQuestions[1]"
                  :errorInput="formDataAlert.generalQuestions[1]"
                  @value="generalQuestionTwo"
                >
                </app-form-input-text-area>
            </div>
            <div class="col-md-12">
                <app-form-input-text-area
                    :question="questionsData['generalQuestions'][2]"
                    :errorMsg = "'กรุณาตอบคำถามข้อนี้'"
                    :maxLength = "3000"
                    :textAreaRow = "10"
                    :required="true"
                    :data="formData.generalQuestions[2]"
                    :errorInput="formDataAlert.generalQuestions[2]"
                    @value="generalQuestionThree"
                  >
                  </app-form-input-text-area>
            </div>

            <div class="col-md-4"></div>
            <div class="col-md-4">
               <center>
                <button type="submit" class="btn btn-lg btn-default" @click="previousStep">Back</button>
                <button type="submit" class="btn btn-lg btn-default" @click="nextSteps">Save & Next</button>
              </center>
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
import questionsData from './questions.json'
import appFormInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      questionsData,
      formDataAlert: {
        generalQuestions: [
          false,
          false,
          false
        ]
      },
      formData: {
        generalQuestions: []
      }
    }
  },
  methods: {
    generalQuestion (value) {
      this.formData.generalQuestions[0] = value
    },
    generalQuestionTwo (value) {
      this.formData.generalQuestions[1] = value
    },
    generalQuestionThree (value) {
      this.formData.generalQuestions[2] = value
    },
    async nextSteps () {
      try {
        this.checkPageCompleteAndDispatch()
        this.$store.dispatch('addGeneralQuestions', this.formData)
        if (this.$store.getters.generalQuestions.complete) {
          await HTTP.put('/registration/general', {answers: this.formData.generalQuestions})
          this.$router.push('5')
        } else {
          let isAlert = this.formDataAlert
           for (let key in this.formData) {
              if (this.formData[key] === "" || this.formData[key] === undefined)
                 this.formDataAlert[key] = true
              if (Array.isArray(this.formData[key])) {
                if (this.formData[key].length === 0)
                 this.formDataAlert[key] = true
              }
          }
          alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        }
      } catch (error) {
        alert(error)
      }
    },
    previousStep () {
      this.$router.push('3')
    },
    checkPageCompleteAndDispatch () {
      if (this.formData.generalQuestions.length !== questionsData.generalQuestions.length) {
        this.$store.dispatch('completeGeneralQuestions', false)
      } else {
        if (this.isAllAnswersFilled()) {
          this.$store.dispatch('completeGeneralQuestions', true)
        } else {
          this.$store.dispatch('completeGeneralQuestions', false)
        }
      }
    },
    isAllAnswersFilled () {
      for (let i in this.formData.generalQuestions) {
        if (this.formData.generalQuestions[i] === '') {
          return false
        }
      }
      return true
    }
  },
  components: {
    appFormInputTextArea
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let generalQuestions = this.$store.getters.generalQuestions
    let generalQuestionsData = generalQuestions.data
    if (tokenExists) {
      this.formData = generalQuestionsData
    } else {
      this.$router.push('/authen')
    }
  }
}
</script>
