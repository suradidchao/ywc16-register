<template>
  <div>
    <h1>General Question</h1>
    <hr>
    <div class="container-fluid">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">

            <div class="col-md-12">
              <app-form-input-text-area
                      :question="questionsData['generalQuestions'][0]"
                      :errorMsg = "'กรุณาใส่'"
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
                  :errorMsg = "'กรุณาใส่'"
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
                    :errorMsg = "'กรุณาใส่'"
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
                <button type="submit" class="btn btn-lg btn-success" @click="nextSteps">Save&Next</button>
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
import {isEmpty} from '../utils/helper.js'
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
      await this.$store.dispatch('addGeneralQuestions', this.formData)
      try {
        await HTTP.put('/registration/general', {answers: this.formData.generalQuestions})
      } catch (error) {
        alert(error)
      }
      await this.$router.push('5')
    },
    previousStep () {
      this.$router.go(-1)
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
      if (isEmpty(generalQuestionsData)) {
        console.log('Object is empty')
        this.$store.dispatch('completeGeneralQuestions', false)
      } else {
        console.log('Object is NOT empty')
        this.$store.dispatch('completeGeneralQuestions', true)
      }
      this.formData = generalQuestionsData
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
