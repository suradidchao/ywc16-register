<template>
  <div>
     <div class="container-fluid">
    <h1>Step 3</h1>
    <hr>
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <app-input-checkbox-group
                  :question="'รู้จักค่ายทางไหน'"
                  :checkboxData="dropdownData['channel']"
                  :checkboxAnswers="formData.knowCamp"
                  :errorMsg="'โปรดเลือกช่องทางที่รู้จักค่าย'"
                  :required="true"
                  @value="channel"
                  >
                  </app-input-checkbox-group>
            </div>
            <div class="col-md-12">
              <app-input-text-area
                    :question = "'ความสามารถหรือกิจกรรมที่เคยทำ '"
                    :errorMsg = "'ความสามารถหรือกิจกรรม'"
                    :maxLength = "3000"
                    :textAreaRow = "15"
                    :required="true"
                    :data="formData.activities"
                    @value="talent"
                  >
                  </app-input-text-area>
            </div>

            <div class="col-md-4"></div>
            <div class="col-md-4">
              <center>
                <br>
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
import dropdownData from './dropdown-data.json'
import appInputCheckboxGroup from '@/components/form/InputCheckboxGroup'
import appInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      dropdownData,
      formData: {
        knowCamp: [],
        activities: ''
      }
    }
  },
  components: {
    appInputCheckboxGroup,
    appInputTextArea
  },
  methods: {
    checkPageCompleteAndDispatch () {
      if (hasEmptyField(this.formData)) {
        this.$store.dispatch('completeTalent', false)
      } else {
        this.$store.dispatch('completeTalent', true)
      }
    },
    async nextSteps () {
      try {
        this.checkPageCompleteAndDispatch()
        this.$store.commit('setTalent', this.formData)
        if (this.$store.getters.talent.completed) {
          await HTTP.put('/registration/insight', this.formData)
          this.$router.push('4')
        } else {
          alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        }
      } catch (error) {
        alert(error)
      }
    },
    previousStep () {
      this.$router.push('2')
    },
    channel (value) {
      this.$store.commit('setKnowCamp', value)
    },
    talent (value) {
      this.$store.commit('setActivities', value)
    }
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let talent = this.$store.getters.talent
    let talentData = talent.data
    if (tokenExists) {
      console.log('token exists')
      this.formData = talentData
      // request jwt backend get data
      // redirect route
    } else {
      console.log('token not exists')
      this.$router.push('/authen')
    }
  }
}
</script>
