<template>
  <div>
    <div class="container">
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
      <button type="submit" class="btn btn-lg btn-success" @click="nextStep">Save&Next</button>
    </div>
  </div>
</template>
<script>
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
    async nextStep () {
      await this.$store.commit('setProfileTwo', this.formData)
      await this.$router.push('/steps/talent')
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
  }
}
</script>
