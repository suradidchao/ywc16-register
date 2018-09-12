<template>
  <div>
    <div class="container-fluid">
    <h1>General Question</h1>
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
import {hasEmptyField} from '../utils/helper.js'
import questionsData from './questions.json'
import appFormInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      questionsData,
      formData: {
        generalQuestions: []
      }
    }
  },
  computed: {

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
        // await HTTP.put('/registration/general', {answers: this.formData.generalQuestions})
        this.$router.push('5')
      } catch (error) {
        alert(error)
      }
    },
    previousStep () {
      this.$router.push('3')
    },
    checkPageCompleteAndDispatch () {
      if (this.formData.generalQuestions.length !== questionsData.generalQuestions.length) {
        console.log('Object is empty')
        this.$store.dispatch('completeGeneralQuestions', false)
      } else {
        if (this.isAllAnswersFilled()) {
          console.log('Object is NOT empty')
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
      console.log('token exists')
    } else {
      console.log('token not exists')
      this.$router.push('/authen')
    }
  }
}
</script>
