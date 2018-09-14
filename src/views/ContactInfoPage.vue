<template>
  <div>
    <div class="container-fluid">
    <h1 class="text-Step">Step 2</h1>
    <b class="text-head-page">ข้อมูลการติดต่อ</b>
    <hr>
      <div class="panel panel-default">
        <div class="panel-body">
          <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12">
                    <app-form-input-text-area
                    :question = "'ที่อยู่'"
                    :errorMsg = "'กรุณาใส่ที่อยู่'"
                    :maxLength = "150"
                    :textAreaRow = "3"
                    :required="true"
                    @value="address"
                    :data="formData.address"
                    :errorInput="formDataAlert.address"
                  >
                  </app-form-input-text-area>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <app-form-input-dropdown
                    :data="formData.province"
                    :question="'จังหวัด'"
                    @value="province"
                    :required="true"
                    :errorMsg="'Invalid province!!'"
                    :errorInput="formDataAlert.province"
                    :dropdownData="dropdownData['province']"
                    >
                  </app-form-input-dropdown>
                </div>
                <div class="col-md-6">
                  <div :class="{'form-group': true, 'has-error': errors.has('postalCode') }">
                    <label :class="{ 'text-danger': formDataAlert.postalCode }">รหัสไปรษณีย์</label>
                    <input v-validate="'required|numeric'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('postalCode') }" minlength="5" maxlength="5" name="postalCode" v-model="formData.postalCode" type="text" placeholder="รหัสไปรษณีย์">
                    <label class="text-danger" v-show="errors.has('postalCode')">กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง</label>
                    <br>
                </div>
                </div>
              </div>

               <div class="row">
                <div class="col-md-12">
                <div :class="{'form-group': true, 'has-error': errors.has('email') }">
                  <label :class="{ 'text-danger': formDataAlert.email }">อีเมล์</label>
                  <input v-validate="'required|email'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('email') }" name="email" v-model="formData.email" type="text" placeholder="อีเมล์">
                  <label class="text-danger" v-show="errors.has('email')">กรุณากรอกอีเมล์ให้ถูกต้อง</label>
                  <br>
                </div>
                </div>
              </div>

               <div class="row">
                <div class="col-md-12">
                <div :class="{'form-group': true, 'has-error': errors.has('phone') }">
                    <label :class="{ 'text-danger': formDataAlert.phone }">เบอร์ติดต่อ</label>
                    <input v-validate="'required|numeric'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('phone') }" minlength="10" maxlength="10" name="phone" v-model="formData.phone"  type="text" placeholder="เบอร์ติดต่อ">
                    <label class="text-danger" v-show="errors.has('phone')">กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง</label>
                    <br>
                </div>
                </div>
              </div>

               <div class="row">
                <div class="col-md-12">
                    <app-form-input-text
                        :data="formData.emergencyName"
                        :question="'ชื่อผู้ปกครอง/ชื่อผู้ติดต่อฉุกเฉิน'"
                        @value="emergencyName"
                        :errorMsg="'กรุณากรอกชื่อผู้ปกครอง/ชื่อผู้ติดต่อฉุกเฉิน'"
                        :required="true"
                        :errorInput="formDataAlert.emergencyName"
                        >
                    </app-form-input-text>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div :class="{'form-group': true, 'has-error': errors.has('emergencyPhone') }">
                    <label :class="{ 'text-danger': formDataAlert.emergencyPhone }">เบอร์ติดต่อฉุกเฉิน</label>
                    <input v-validate="'required|numeric'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('emergencyPhone') }" minlength="10" maxlength="10" name="emergencyPhone" v-model="formData.emergencyPhone"  type="text" placeholder="เบอร์ติดต่อฉุกเฉิน">
                    <label class="text-danger" v-show="errors.has('emergencyPhone')">กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง</label>
                    <br>
                </div>
                </div>
                <div class="col-md-6">
                    <app-form-input-text
                        :data="formData.emergencyPhoneRelated"
                        :question="'เกี่ยวข้องเป็น'"
                        @value="emergencyPhoneRelated"
                        :errorMsg="'กรุณากรอกความเกี่ยวข้อง'"
                        :required="true"
                        :errorInput="formDataAlert.emergencyPhoneRelated"
                        >
                        </app-form-input-text>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                    <app-form-input-text
                      :data="formData.skype"
                      :question="'ID Skype'"
                      @value="skype"
                      :errorMsg="'กรุณากรอก Skype ID'"
                      :required="true"
                      :errorInput="formDataAlert.skype"
                      >
                    </app-form-input-text>
                </div>
              </div>

            </div>
            <div class="col-md-6">

              <div class="row">
                <br>
                <div class="col-md-12">
                  <app-form-input-dropdown
                      :data="formData.shirtSize"
                      :question="'ขนาดเสื้อ (รอบอก, ความยาว)'"
                      @value="shirtSize"
                      :required="true"
                      :errorMsg="'shirt size missing!!'"
                      :errorInput="formDataAlert.shirtSize"
                      :dropdownData="dropdownData['shirtSize'].map((item) => item.value )"
                      >
                      </app-form-input-dropdown>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                    <app-form-input-radio-group
                        :data="formData.disease"
                        :question="'โรคประจำตัว'"
                        @value="disease"
                        :radioData="dropdownData['disease']"
                        :errorInput="formDataAlert.disease"
                        :required="true"
                        >
                        </app-form-input-radio-group>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                    <app-form-input-dropdown
                      :data="formData.food"
                      :question="'อาหารที่รับประทาน'"
                      @value="food"
                      :errorMsg="'กรุณาใส่อาหารที่รับประทาน'"
                      :errorInput="formDataAlert.food"
                      :dropdownData="dropdownData['food']"
                      :required="true"
                      >
                      </app-form-input-dropdown>
                </div>

                 <div class="col-md-6">
                      <app-form-input-text
                          :data="formData.foodAllergy"
                          :question="'อาหารที่แพ้'"
                          @value="foodAllergy"
                          :errorInput="formDataAlert.foodAllergy"
                          :errorMsg="'กรุณาใส่อาหารที่แพ้'"
                          :required="false"
                          >
                      </app-form-input-text>
                </div>

              </div>

            </div>

          </div>
          <div class="row">
            <br>
                <div class="col-md-12">
                  <center>
                    <button type="button" class="btn btn-lg btn-default" @click="previousStep">Back</button>
                    <button type="submit" class="btn btn-lg btn-default" @click.stop.prevent="nextStep">Save & Next</button>
                  </center>
                </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from '../core/http-common.js'
import { hasEmptyField } from '../utils/helper.js'
import dropdownData from './dropdown-data.json'
import appFormInputText from '@/components/form/InputText'
import appFormInputTextArea from '@/components/form/InputTextArea'
import appFormInputDropdown from '@/components/form/InputDropdown'
import appFormInputRadioGroup from '@/components/form/InputRadioGroup'
export default {
  data () {
    return {
      dropdownData: dropdownData,
      formDataAlert: {
        address: false,
        province: false,
        postalCode: false,
        email: false,
        phone: false,
        emergencyName: false,
        emergencyPhone: false,
        emergencyPhoneRelated: false,
        skype: false,
        shirtSize: false,
        disease: false,
        food: false,
        foodAllergy: false
      },
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
  watch: {
    'formData.postalCode' (value) {
      if (value === '') {
        this.formDataAlert.postalCode = true
      } else {
        this.formDataAlert.postalCode = false
      }
    },
    'formData.email' (value) {
      if (value === '') {
        this.formDataAlert.email = true
      } else {
        this.formDataAlert.email = false
      }
    },
    'formData.phone' (value) {
      if (value === '') {
        this.formDataAlert.phone = true
      } else {
        this.formDataAlert.phone = false
      }
    },
    'formData.emergencyPhone' (value) {
      if (value === '') {
        this.formDataAlert.emergencyPhone = true
      } else {
        this.formDataAlert.emergencyPhone = false
      }
    }
  },
  methods: {
    address (value) {
      this.formData.address = value
    },
    province (value) {
      this.formData.province = value
    },
    emergencyName (value) {
      this.formData.emergencyName = value
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
    checkPageCompleteAndDispatch () {
      if (hasEmptyField(this.formData)) {
        this.$store.dispatch('completeProfileTwo', false)
      } else {
        this.$store.dispatch('completeProfileTwo', true)
      }
    },
    async nextStep () {
      try {
        this.checkPageCompleteAndDispatch()
        this.$store.commit('setProfileTwo', this.formData)
        if (this.$store.getters.profileTwo.complete) {
          await HTTP.put('/registration/contact', this.formData)
          this.$router.push('3')
        } else {
          for (let key in this.formData) {
            if (this.formData[key] === '' || this.formData[key] === undefined) { this.formDataAlert[key] = true }
            if (Array.isArray(this.formData[key])) {
              if (this.formData[key].length === 0) { this.formDataAlert[key] = true }
            }
          }
          alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        }
      } catch (error) {
        alert(error)
      }
    },
    previousStep () {
      this.$router.push('1')
    }
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let profileTwo = this.$store.getters.profileTwo
    let profileTwoData = profileTwo.data
    if (tokenExists) {
      this.formData = profileTwoData
    } else {
      this.$router.push('/authen')
    }
  }
}
</script>
