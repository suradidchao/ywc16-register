<template>
  <div>
    <div class="container-fluid">
    <h1>Contact Information</h1>
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
                    :dropdownData="dropdownData['province']"
                    >
                  </app-form-input-dropdown>
                </div>
                <div class="col-md-6">
                  <div :class="{'form-group': true, 'has-error': errors.has('postalCode') }">
                    <input v-validate="'required|numeric'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('postalCode') }" minlength="5" maxlength="5" name="postalCode" v-model="formData.postalCode"  type="text" placeholder="รหัสไปรษณีย์">
                    <label class="text-danger" v-show="errors.has('postalCode')">กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง</label>
                    <br>
                </div>
                  <!-- <app-form-input-text
                    :data="formData.postalCode"
                    :question="'รหัสไปรษณีย์'"
                    @value="postalCode"
                    :errorMsg="'Invalid post number'"
                    :required="true"
                    >
                  </app-form-input-text> -->
                </div>
              </div>

               <div class="row">
                <div class="col-md-12">
                <div :class="{'form-group': true, 'has-error': errors.has('email') }">
                  <input v-validate="'required|email'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('email') }" name="email" v-model="formData.email"  type="text" placeholder="Email">
                  <label class="text-danger" v-show="errors.has('email')">กรุณากรอกอีเมล์ให้ถูกต้อง</label>
                  <br>
                </div>
                  <!-- <app-form-input-text
                      :data="formData.email"
                      :question="'Email'"
                      @value="email"
                      :errorMsg="'Invalid email'"
                      :required="true"
                      :typeIuput="'email'"
                      >
                  </app-form-input-text> -->
                </div>
              </div>

               <div class="row">
                <div class="col-md-12">
                <div :class="{'form-group': true, 'has-error': errors.has('phone') }">
                    <input v-validate="'required|numeric'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('phone') }" minlength="10" maxlength="10" name="phone" v-model="formData.phone"  type="text" placeholder="เบอร์ติดต่อ">
                    <label class="text-danger" v-show="errors.has('phone')">กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง</label>
                    <br>
                </div>
                    <!-- <app-form-input-text
                        :data="formData.phone"
                        :question="'เบอร์ติดต่อ'"
                        @value="phone"
                        :errorMsg="'Invalid contact number'"
                        :typeIuput="'tel'"
                        :required="true"
                        >
                    </app-form-input-text> -->
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
                        >
                    </app-form-input-text>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div :class="{'form-group': true, 'has-error': errors.has('emergencyPhone') }">
                    <input v-validate="'required|numeric'" :class="{'form-control input-lg input-css': true, 'is-danger': errors.has('emergencyPhone') }" minlength="10" maxlength="10" name="emergencyPhone" v-model="formData.emergencyPhone"  type="text" placeholder="เบอร์ติดต่อฉุกเฉิน">
                    <label class="text-danger" v-show="errors.has('emergencyPhone')">กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง</label>
                    <br>
                </div>
                    <!-- <app-form-input-text
                        :data="formData.emergencyPhone"
                        :question="'เบอร์ติดต่อฉุกเฉิน'"
                        @value="emergencyPhone"
                        :errorMsg="'Invalid parent contact number'"
                        :required="true"
                        >
                        </app-form-input-text> -->
                </div>
                <div class="col-md-6">
                    <app-form-input-text
                        :data="formData.emergencyPhoneRelated"
                        :question="'เกี่ยวข้องเป็น'"
                        @value="emergencyPhoneRelated"
                        :errorMsg="'กรุณากรอกความเกี่ยวข้อง'"
                        :required="true"
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
                        :required="false"
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
                      :errorMsg="'Invalid food!!'"
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
                          :errorMsg="'Invalid allergic food'"
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
                    <button type="submit" class="btn btn-lg btn-default" @click="nextStep">Save & Next</button>
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
    // postalCode (value) {
    //   this.formData.postalCode = value
    // },
    // email (value) {
    //   this.formData.email = value
    // },
    // phone (value) {
    //   this.formData.phone = value
    // },
    emergencyName (value) {
      this.formData.emergencyName = value
    },
    // emergencyPhone (value) {
    //   this.formData.emergencyPhone = value
    // },
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
      try {
        this.$store.commit('setProfileTwo', this.formData)
        await HTTP.put('/registration/contact', this.formData)
        this.$router.push('3')
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
      if (isEmpty(profileTwoData)) {
        this.$store.dispatch('completeProfileTwo', false)
      } else {
        this.$store.dispatch('completeProfileTwo', true)
      }
      this.formData = profileTwoData
    } else {
      this.$router.push('/authen')
    }
  }
}
</script>
