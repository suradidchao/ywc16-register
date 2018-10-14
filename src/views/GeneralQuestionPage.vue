<template>
  <div>
    <div class="container-fluid">
    <h1 class="text-Step">STEP 4</h1>
    <p class="text-head-page">คำถามส่วนกลาง</p>
      <div class="panel panel-default">
        <div class="panel-body space-body">
          <div class="row">
            <div class="col-md-12">
              <app-form-input-text-area
                    :question="questionsData['generalQuestions'][0]"
                    :placeholder = "'กรุณาตอบคำถาม'"
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
                  :placeholder = "'กรุณาตอบคำถาม'"
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
                    ::placeholder = "'กรุณาตอบคำถาม'"
                    :maxLength = "3000"
                    :textAreaRow = "10"
                    :required="true"
                    :data="formData.generalQuestions[2]"
                    :errorInput="formDataAlert.generalQuestions[2]"
                    @value="generalQuestionThree"
                  >
                  </app-form-input-text-area>
            </div>

            <div class="col-md-12">
               <center>
                  <button type="button" class="btn btn-lg btn-default button-size" @click="previousStep"><i style=" font-size: 1.5em;" class="fa fa-lg fa-angle-left"  aria-hidden="true"></i> Back</button>
                      &nbsp;
                 <button type="submit" class="btn btn-lg btn-default button-font"  @click.stop.prevent="nextSteps" :disabled=isDisabled>Save & Next &nbsp;<i style=" font-size: 1.5em;" class="fa fa-lg fa-angle-right"  aria-hidden="true"></i></button>
              </center>
            </div>
          </div>
          <modal v-model="alert" title="STEP 4" :footer="false">
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
import appFormInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      questionsData,
      alert: false,
      formDataAlert: {
        generalQuestions: []
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
        this.alert = false
        this.checkPageCompleteAndDispatch()
        this.$store.dispatch('addGeneralQuestions', this.formData)
        if (this.$store.getters.generalQuestions.complete) {
          await HTTP.put('/registration/general', {answers: this.formData.generalQuestions})
          this.$router.push('5')
        } else {
          for (let key in this.formData.generalQuestions) {
            if (this.formData.generalQuestions[key] === '' || this.formData.generalQuestions[key] === undefined) {
              this.formDataAlert.generalQuestions[key] = true
            }
            if (Array.isArray(this.formData.generalQuestions[key])) {
              if (this.formData.generalQuestions[key].length === 0) {
                this.formDataAlert.generalQuestions[key] = true
              }
            }
          }
          this.alert = true
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
