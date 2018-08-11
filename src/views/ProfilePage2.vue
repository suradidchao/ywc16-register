<template>
  <div>
    <div class="container">
      <h1>This is ProfilePage 2</h1>
      <app-form-input-text-area
        :question = "'ที่อยู่'"
        :errorMsg = "'กรุณาใส่ที่อยู่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
        @value="address"
      >
      </app-form-input-text-area>

      <app-form-input-dropdown :question="'จังหวัด'" @value="province" :errorMsg="'Invalid province!!'" :dropdownData="dropdownData['province']"></app-form-input-dropdown>
      <app-form-input-text :question="'รหัสไปรษณีย์'" @value="postNumber"  :errorMsg="'Invalid post number'" :required="false"></app-form-input-text>
      <app-form-input-text :question="'Email'" @value="email"  :errorMsg="'Invalid email'" :required="false"></app-form-input-text>
      <app-form-input-text :question="'เบอร์ติดต่อฉุกเฉิน'" @value="contactNumber"  :errorMsg="'Invalid contact number'" :required="false"></app-form-input-text>
      <app-form-input-text :question="'ชื่อผู้ปกครอง/ชื่อผู้ติดต่อฉุกเฉิน'" @value="parentName"  :errorMsg="'Invalid parent name'" :required="false"></app-form-input-text>
      <app-form-input-text :question="'เบอร์ติดต่อฉุกเฉิน'" @value="parentContactNumber"  :errorMsg="'Invalid parent contact number'" :required="false"></app-form-input-text>
      <app-form-input-text :question="'เกี่ยวข้องเป็น'" @value="parentRelationship"  :errorMsg="'Invalid parent contact number'" :required="false"></app-form-input-text>
      <app-form-input-text :question="'ID Skype'" @value="skypeId"  :errorMsg="'Invalid skype id'" :required="false"></app-form-input-text>
      <app-form-input-dropdown :question="'ขนาดเสื้อ (รอบอก, ความยาว)'" @value="shirtSize" :errorMsg="'shirt size missing!!'" :dropdownData="dropdownData['shirtSize']"></app-form-input-dropdown>
      <app-form-input-radio-group :question="'โรคประจำตัว'" :radioData="dropdownData['disease']" :required="false"></app-form-input-radio-group>
      <app-form-input-dropdown :question="'อาหารที่รับประทาน'" @value="food" :errorMsg="'Invalid food!!'" :dropdownData="dropdownData['food']"></app-form-input-dropdown>
      <app-form-input-text :question="'อาหารที่แพ้'" @value="allergicFood"  :errorMsg="'Invalid allergic food'" :required="false"></app-form-input-text>
      <router-link to="profile1" class='btn btn-default'>Back</router-link>
      <router-link to="general" class='btn btn-success'>Save&Next</router-link>
    </div>
  </div>
</template>
<script>
import dropdownData from './dropdown-data.json'
import appFormInputText from '@/components/form/InputText'
import appFormInputTextArea from '@/components/form/InputTextArea'
import appFormInputDropdown from '@/components/form/InputDropdown'
import appFormInputRadioGroup from '@/components/form/InputRadioGroup'
export default {
  data () {
    return {
      dropdownData: dropdownData
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
      console.log('address: ' + value)
    },
    province (value) {
      console.log('province: ' + value)
    },
    postNumber (value) {
      console.log('post number: ' + value)
    },
    email (value) {
      console.log('email: ' + value)
    },
    contactNumber (value) {
      console.log('contact number: ' + value)
    },
    parentName (value) {
      console.log('parent name: ' + value)
    },
    parentContactNumber (value) {
      console.log('parent contact number: ' + value)
    },
    parentRelationship (value) {
      console.log('parent relationship: ' + value)
    },
    skypeId (value) {
      console.log('skype id: ' + value)
    },
    shirtSize (value) {
      console.log('shirt size: ' + value)
    },
    food (value) {
      console.log('food: ' + value)
    },
    allergicFood (value) {
      console.log('allergic food: ' + value)
    }
  }
}
</script>
