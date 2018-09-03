<template>
  <div>
    <h1>General Question</h1>
    <hr>
    <app-form-input-text-area
        :question="questionsData['generalQuestions'][0]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.generalQuestions[0].answer"
        @value="generalQuestion"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['generalQuestions'][1]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.generalQuestions[1].answer"
        @value="generalQuestionTwo"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['generalQuestions'][2]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.generalQuestions[2].answer"
        @value="generalQuestionThree"
      >
      </app-form-input-text-area>
      <button type="submit" class="btn btn-lg btn-default" @click="previousStep">Back</button>
      <button type="submit" class="btn btn-lg btn-success" @click="nextStep">Save&Next</button>
  </div>
</template>

<script>
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
      this.formData.generalQuestions[0].answer = value
    },
    generalQuestionTwo (value) {
      this.formData.generalQuestions[1].answer = value
    },
    generalQuestionThree (value) {
      this.formData.generalQuestions[2].answer = value
    },
    async nextStep () {
      await this.$store.dispatch('addGeneralQuestions', this.formData)
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
