<template>
  <div>
    <div class="container">
      <app-input-checkbox-group
      :question="'รู้จักค่ายทางไหน'"
      :checkboxData="dropdownData['channel']"
      >
      </app-input-checkbox-group>
      <button type="submit" class="btn btn-lg btn-default" @click="previousStep">Back</button>
      <button type="submit" class="btn btn-lg btn-success" @click="nextStep">Save&Next</button>
    </div>
  </div>
</template>
<script>
import dropdownData from './dropdown-data.json'
import appInputCheckboxGroup from '@/components/form/InputCheckboxGroup'
export default {
  data () {
    return {
      dropdownData
    }
  },
  components: {
    appInputCheckboxGroup
  },
  methods: {
    async nextStep () {
      await this.$store.commit('setProfileTwo', this.formData)
      await this.$router.push('/steps/talent')
    },
    previousStep () {
      this.$router.go(-1)
    }
  }
}
</script>
