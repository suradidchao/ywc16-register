<template>
  <div class="container">
    <h1>This is Major Question Page!!!</h1>
    {{ majorUser }}
<div v-if="majorUser == 'design'">
  <app-form-input-text-area
        :question="questionsData['specialQuestions']['design'][0]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestions"
        @value="majorQuestion"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['design'][1]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsTwo"
        @value="majorQuestionTwo"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['design'][2]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsThree"
        @value="majorQuestionThree"
      >
      </app-form-input-text-area>
       <div class="form-control">
         {{ questionsData['specialQuestions']['design'][3] }}
         อัพโหลดไฟล์
       </div>
</div>

<div v-if="majorUser == 'marketing'">
  <app-form-input-text-area
        :question="questionsData['specialQuestions']['marketing'][0]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestions"
        @value="majorQuestion"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['marketing'][1]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsTwo"
        @value="majorQuestionTwo"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['marketing'][2]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsThree"
        @value="majorQuestionThree"
      >
      </app-form-input-text-area>
</div>

<div v-if="majorUser == 'content'">
  <app-form-input-text-area
        :question="questionsData['specialQuestions']['content'][0]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestions"
        @value="majorQuestion"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['content'][1]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsTwo"
        @value="majorQuestionTwo"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['content'][2]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsThree"
        @value="majorQuestionThree"
      >
      </app-form-input-text-area>
</div>


<div v-if="majorUser == 'programming'">
  <app-form-input-text-area
        :question="questionsData['specialQuestions']['programming'][0]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestions"
        @value="majorQuestion"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['programming'][1]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsTwo"
        @value="majorQuestionTwo"
      >
      </app-form-input-text-area>
        <app-form-input-text-area
        :question="questionsData['specialQuestions']['programming'][2]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsThree"
        @value="majorQuestionThree"
      >
      </app-form-input-text-area>
      <app-form-input-text-area
        :question="questionsData['specialQuestions']['programming'][3]"
        :errorMsg = "'กรุณาใส่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        :data="formData.majorQuestionsFour"
        @value="majorQuestionFour"
      >
      </app-form-input-text-area>
</div>
    <button type="submit" class="btn btn-lg btn-primary" @click="nextSteps">Next</button>
  </div>
</template>

<script>
import {isEmpty} from '../utils/helper.js'
import questionsData from './questions.json';
import appFormInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      majorUser: this.$store.getters.major,
      questionsData,
      formData: {
        majorQuestions: '',
        majorQuestionsTwo: '',
        majorQuestionsThree: '',
        majorQuestionsFour: ''
      }
    }
  },
  computed: {

  },
  methods:{
    majorQuestion(value) {
      this.formData.majorQuestions = value
    },
    majorQuestionTwo(value) {
      this.formData.majorQuestionsTwo = value
    },
    majorQuestionThree(value){
      this.formData.majorQuestionsThree = value
    },
    majorQuestionFour(value){
      this.formData.majorQuestionsFour = value
    },
    async nextSteps () {
      await this.$store.dispatch('addMajorQuestions', { major: this.majorUser ,formData: this.formData})
      await this.$router.push('/steps/summary')
    }
  },
  components: {
    appFormInputTextArea
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
   let majorQuestions = null
    if (this.majorUser === 'design') {
        majorQuestions = this.$store.getters.designQuestions
      } else if (this.majorUser === 'marketing') {
        majorQuestions = this.$store.getters.marketingQuestions
      } else if (this.majorUser === 'content') {
        majorQuestions = this.$store.getters.contentQuestions
      } else if (this.majorUser === 'programming') {
        majorQuestions = this.$store.getters.programmingQuestions
      }
    let majorQuestionsData = majorQuestions.data
    if (tokenExists) {
      if(isEmpty(majorQuestionsData)) {
        console.log('Object is empty');
        this.$store.dispatch('completeMajorQuestions', {  major: this.majorUser, complete: false })
      } else {
        console.log('Object is NOT empty');
        this.$store.dispatch('completeMajorQuestions', {major: this.majorUser, complete: true })
      }
      this.formData = majorQuestionsData
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
