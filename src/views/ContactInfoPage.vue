<template>
  <div>
    <h1>Contact Information</h1>
    <hr>
    <app-form-input-text-area
      :question = "'ที่อยู่'"
      :errorMsg = "'กรุณาใส่ที่อยู่'"
      :maxLength = "150"
      :textAreaRow = "3"
      :required="true"
      @value="address"
      :data="formData.address"
    >
    </app-form-input-text-area>
    <app-form-input-dropdown
    :data="formData.province"
    :question="'จังหวัด'"
    @value="province"
    :errorMsg="'Invalid province!!'"
    :dropdownData="dropdownData['province']"
    >
    </app-form-input-dropdown>
    <app-form-input-text
    :data="formData.postalCode"
    :question="'รหัสไปรษณีย์'"
    @value="postalCode"
    :errorMsg="'Invalid post number'"
    :required="false"
    >
    </app-form-input-text>
    <app-form-input-text
    :data="formData.email"
    :question="'Email'"
    @value="email"
    :errorMsg="'Invalid email'"
    :required="false"
    >
    </app-form-input-text>
    <app-form-input-text
    :data="formData.phone"
    :question="'เบอร์ติดต่อฉุกเฉิน'"
    @value="phone"
    :errorMsg="'Invalid contact number'"
    :required="false"
    >
    </app-form-input-text>
    <app-form-input-text
    :data="formData.emergencyName"
    :question="'ชื่อผู้ปกครอง/ชื่อผู้ติดต่อฉุกเฉิน'"
    @value="emergencyName"
    :errorMsg="'Invalid parent name'"
    :required="false"
    >
    </app-form-input-text>
    <app-form-input-text
    :data="formData.emergencyPhone"
    :question="'เบอร์ติดต่อฉุกเฉิน'"
    @value="emergencyPhone"
    :errorMsg="'Invalid parent contact number'"
    :required="false"
    >
    </app-form-input-text>
    <app-form-input-text
    :data="formData.emergencyPhoneRelated"
    :question="'เกี่ยวข้องเป็น'"
    @value="emergencyPhoneRelated"
    :errorMsg="'Invalid parent contact number'"
    :required="false"
    >
    </app-form-input-text>
    <app-form-input-text
    :data="formData.skype"
    :question="'ID Skype'"
    @value="skype"
    :errorMsg="'Invalid skype id'"
    :required="false"
    >
    </app-form-input-text>
    <app-form-input-dropdown
    :data="formData.shirtSize"
    :question="'ขนาดเสื้อ (รอบอก, ความยาว)'"
    @value="shirtSize"
    :errorMsg="'shirt size missing!!'"
    :dropdownData="dropdownData['shirtSize'].map((item) => item.value )"
    >
    </app-form-input-dropdown>
    <app-form-input-radio-group
    :data="formData.disease"
    :question="'โรคประจำตัว'"
    @value="disease"
    :radioData="dropdownData['disease']"
    :required="false"
    >
    </app-form-input-radio-group>
    <app-form-input-dropdown
    :data="formData.food"
    :question="'อาหารที่รับประทาน'"
    @value="food"
    :errorMsg="'Invalid food!!'"
    :dropdownData="dropdownData['food']"
    >
    </app-form-input-dropdown>
    <app-form-input-text
    :data="formData.foodAllergy"
    :question="'อาหารที่แพ้'"
    @value="foodAllergy"
    :errorMsg="'Invalid allergic food'"
    :required="false"
    >
    </app-form-input-text>
    <button type="submit" class="btn btn-lg btn-default" @click="previousStep">Back</button>
    <button type="submit" class="btn btn-lg btn-success" @click="nextStep">Save&Next</button>
  </div>
</template>
<script>
import {HTTP} from '../core/http-common.js'
import {isEmpty} from '../utils/helper.js'
import dropdownData from './dropdown-data.json'
import appFormInputText from '@/components/form/InputText'
import appFormInputTextArea from '@/components/form/InputTextArea'
import appFormInputDropdown from '@/components/form/InputDropdown'
import appFormInputRadioGroup from '@/components/form/InputRadioGroup'
export default {
  data () {
    return {
      dropdownData: dropdownData,
      formData: {
        address: '',
        province: '',
        postalCode: '',
        email: '',
        phone: '',
        emergencyName: '',
        emergencyPhone: '',
        emergencyPhoneRelated: '',
        skype: '',
        shirtSize: '',
        disease: '',
        food: '',
        foodAllergy: ''
      }
    }
  },
  components: {
    appFormInputTextArea,
    appFormInputText,
    appFormInputDropdown,
    appFormInputRadioGroup
  },
  methods: {
    address (value) {
      this.formData.address = value
    },
    province (value) {
      this.formData.province = value
    },
    postalCode (value) {
      this.formData.postalCode = value
    },
    email (value) {
      this.formData.email = value
    },
    phone (value) {
      this.formData.phone = value
    },
    emergencyName (value) {
      this.formData.emergencyName = value
    },
    emergencyPhone (value) {
      this.formData.emergencyPhone = value
    },
    emergencyPhoneRelated (value) {
      this.formData.emergencyPhoneRelated = value
    },
    skype (value) {
      this.formData.skype = value
    },
    shirtSize (value) {
      this.formData.shirtSize = value
    },
    disease (value) {
      this.formData.disease = value
    },
    food (value) {
      this.formData.food = value
    },
    foodAllergy (value) {
      this.formData.foodAllergy = value
    },
    async nextStep () {
      await this.$store.commit('setProfileTwo', this.formData)
      const response = await HTTP.put('/registration/contact', this.formData)
      console.log(response)
      await this.$router.push('3')
    },
    previousStep () {
      this.$router.go(-1)
    }
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let profileTwo = this.$store.getters.profileTwo
    let profileTwoData = profileTwo.data
    if (tokenExists) {
      if (isEmpty(profileTwoData)) {
        console.log('Object is empty')
        this.$store.dispatch('completeProfileTwo', false)
      } else {
        console.log('Object is NOT empty')
        this.$store.dispatch('completeProfileTwo', true)
      }
      this.formData = profileTwoData
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
