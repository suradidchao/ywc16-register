<template>
  <div>
    <h1>Talent</h1>
    <hr>
    <app-input-checkbox-group
    :question="'รู้จักค่ายทางไหน'"
    :checkboxData="dropdownData['channel']"
    :checkboxAnswers="formData.knowCamp"
    :errorMsg="'Please select channel'"
    :required="true"
    @value="channel"
    >
    </app-input-checkbox-group>

    <app-input-text-area
      :question = "'ความสามารถหรือกิจกรรมที่เคยทำ '"
      :errorMsg = "'ความสามารถหรือกิจกรรม'"
      :maxLength = "500"
      :textAreaRow = "10"
      :required="true"
      :data="formData.activities"
      @value="talent"
    >
    </app-input-text-area>
    <button type="submit" class="btn btn-lg btn-default" @click="previousStep">Back</button>
    <button type="submit" class="btn btn-lg btn-success" @click="nextSteps">Save&Next</button>
  </div>
</template>
<script>
import {HTTP} from '../core/http-common.js'
import {isEmpty} from '../utils/helper.js'
import dropdownData from './dropdown-data.json'
import appInputCheckboxGroup from '@/components/form/InputCheckboxGroup'
import appInputTextArea from '@/components/form/InputTextArea'
export default {
  data () {
    return {
      dropdownData,
      formData: this.$store.getters.talent
    }
  },
  components: {
    appInputCheckboxGroup,
    appInputTextArea
  },
  methods: {
    async nextSteps () {
      await this.$store.commit('setTalent', this.formData)
      await HTTP.put('/registration/insight', this.formData)
      this.$router.push('4')
    },
    previousStep () {
      this.$router.go(-1)
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
    if (tokenExists) {
      if (isEmpty(talent)) {
        console.log('Object is empty')
        this.$store.dispatch('completeTalent', false)
      } else {
        console.log('Object is NOT empty')
        this.$store.dispatch('completeTalent', true)
      }
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
