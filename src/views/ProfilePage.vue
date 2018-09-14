<template>
  <div>
<div class="container-fluid">
  <h1 class="text-Step">Step 1</h1>
  <b class="text-head-page">ข้อมูลส่วนตัว</b>
  <hr>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">
        <div class="col-md-3">
          <app-form-input-upload-file
          :question="'อัพโหลดรูป'"
          :errorMsg = "'กรุณาใส่ไฟล์'"
          :maxLength = "150"
          :textAreaRow = "3"
          :required="true"
          :data="formData.picture"
          @value="picture"
          :errorInput="formDataAlert.picture"
          >
          </app-form-input-upload-file>
        </div>
        <div class="col-md-9">
            <div class="row">
            <div class="col-md-4">
              <app-input-dropdown
                :question="'คำนำหน้าชื่อ'"
                :data="formData.title"
                @value="title"
                :required="true"
                :errorMsg="'กรุณากรอกคำนำหน้าชื่อ'"
                :dropdownData="dropdownData['title']"
                :errorInput="formDataAlert.title"
              ></app-input-dropdown>
            </div>
            <div class="col-md-4">
              <app-input-text
                :question="'ชื่อ'"
                :data="formData.firstName"
                @value="firstName"
                :errorMsg="'กรุณากรอกชื่อ'"
                :errorInput="formDataAlert.firstName"
                :required="true">
              </app-input-text>
            </div>
            <div class="col-md-4">
                <app-input-text
                  :question="'นามสกุล'"
                  :data="formData.lastName"
                  @value="lastName"
                  :errorMsg="'กรุณากรอกนามสกุล'"
                  :errorInput="formDataAlert.lastName"
                  :required="true">
                </app-input-text>
            </div>
            </div>

            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                    <app-input-text
                      :question="'ชื่อ (ภาษาอังกฤษ)'"
                      :data="formData.firstNameEN"
                      @value="firstNameEN"
                      :errorMsg="'กรุณากรอกชื่อ(ภาษาอังกฤษ)'"
                      :errorInput="formDataAlert.firstNameEN"
                      :required="true">
                    </app-input-text>
                </div>
                <div class="col-md-4">
                      <app-input-text
                        :question="'นามสกุล (ภาษาอังกฤษ)'"
                        :data="formData.lastNameEN"
                        @value="lastNameEN"
                        :errorMsg="'กรุณากรอกนามสกุล(ภาษาอังกฤษ)'"
                        :errorInput="formDataAlert.lastNameEN"
                        :required="true">
                      </app-input-text>
                </div>
            </div>

          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">

                <app-input-text
                  :question="'ชื่อเล่น'"
                  :data="formData.nickname"
                  @value="nickname"
                  :errorMsg="'กรุณากรอกชื่อเล่น'"
                  :errorInput="formDataAlert.nickname"
                  :required="true">
                </app-input-text>
            </div>
            <div class="col-md-4">
              <app-input-datepicker
                :question="'วันเกิด'"
                :date="formData.birthdate"
                @value="birthdate"
                :errorInput="formDataAlert.birthdate"
                :errorMsg="'กรุณาใส่วันเกิด'">
              </app-input-datepicker>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <app-input-dropdown
                :question="'เพศ'"
                :data="formData.sex"
                @value="sex"
                :required="true"
                :errorMsg="'กรุณาใส่เพศ'"
                :errorInput="formDataAlert.sex"
                :dropdownData="dropdownData['sex']"
              ></app-input-dropdown>
            </div>
            <div class="col-md-4">
              <app-input-dropdown
              :question="'กรุ๊ปเลือด'"
              :data="formData.blood"
              @value="blood"
              :required="true"
              :errorMsg="'กรุณาใส่กรุ๊ปเลือด'"
              :errorInput="formDataAlert.blood"
              :dropdownData="dropdownData['blood']">
            </app-input-dropdown>
            </div>
            <div class="col-md-4">
              <app-input-dropdown
                    :question="'ศาสนา'"
                    :data="formData.religion"
                    @value="religion"
                    :required="true"
                    :errorMsg="'กรุณาใส่ศาสนา'"
                    :errorInput="formDataAlert.religion"
                    :dropdownData="dropdownData['religion']">
              </app-input-dropdown>

            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <app-input-dropdown
                  :question="'ระดับการศึกษา'"
                  :data="formData.educationStatus"
                  @value="educationStatus"
                  :required="true"
                  :errorMsg="'กรุณาใส่ระดับการศึกษา'"
                  :errorInput="formDataAlert.educationStatus"
                  :dropdownData="dropdownData['educationStatus']">
              </app-input-dropdown>
            </div>
          </div>
          <div class="education-group" v-if="formData.educationStatus === 'อยู่ระหว่างการศึกษา'">
            <div class="row">
              <div class="col-md-6">
                  <app-input-text
                    :question="'สถานศึกษา'"
                    :data="formData.university"
                    @value="university"
                    :required="true"
                    :errorInput="formDataAlert.university"
                    :errorMsg="'กรุณาใส่สถานศึกษา'">
                  </app-input-text>
              </div>
              <div class="col-md-6">
                <app-input-text
                  :question="'คณะ'"
                  :data="formData.faculty"
                  @value="faculty"
                  :required="true"
                  :errorInput="formDataAlert.faculty"
                  :errorMsg="'กรุณาใส่คณะ'">
                </app-input-text>
              </div>
          </div>

           <div class="row">
            <div class="col-md-6">
              <app-input-text
                :question="'สาขา'"
                :data="formData.department"
                @value="department"
                :required="true"
                :errorInput="formDataAlert.department"
                :errorMsg="'กรุณาใส่สาขา'">
              </app-input-text>
            </div>
            <div class="col-md-6">
              <app-input-dropdown
                :question="'ชั้นปี'"
                :data="formData.academicYear"
                @value="academicYear"
                :errorMsg="'กรุณาใส่ชั้นปี'"
                :required="true"
                :errorInput="formDataAlert.academicYear"
                :dropdownData="dropdownData['academicYear']">
              </app-input-dropdown>
            </div>
          </div>
        </div>

        <div class="education-group" v-else>
          <div class="row">
            <div class="col-md-6">
                <app-input-text
                  :question="'วุฒิการศึกษาล่าสุด (ระบุชื่อสถานศึกษา)'"
                  :data="formData.equivalentEducationDegree"
                  @value="equivalentEducationDegree"
                  :required="true"
                  :errorInput="formDataAlert.equivalentEducationDegree"
                  :errorMsg="'กรุณาใส่วุฒิการศึกษาล่าสุด (ระบุชื่อสถานศึกษา)'">
                </app-input-text>
            </div>
            <div class="col-md-6">
              <app-input-dropdown
                :question="'สถานะปัจจุบัน'"
                :data="formData.currentWorkingStatus"
                @value="currentWorkingStatus"
                :errorMsg="'กรุณาใส่สถานะปัจจุบัน'"
                :required="true"
                :errorInput="formDataAlert.currentWorkingStatus"
                :dropdownData="dropdownData['currentWorkingStatus']">
              </app-input-dropdown>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">

            </div>
            <div class="col-md-6" v-if="formData.currentWorkingStatus === 'ทำงานแล้ว' || formData.currentWorkingStatus === 'อื่นๆ'">
              <app-input-text
                :question="workingStatusDescriptionQuestion"
                :data="formData.workingStatusDescription"
                @value="workingStatusDescription"
                :required="true"
                :errorInput="formDataAlert.department"
                :errorMsg="'กรุณาใส่สาขา'">
              </app-input-text>
            </div>
          </div>

        </div>
        </div>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4" style="margin-top:50px; margin-bottom:50px;">
            <center>
                <button type="submit" class="btn btn-lg btn-default"  @click.stop.prevent="nextSteps" :disabled=isDisabled>Save & Next  ></button>
            </center>
          </div>
          <div class="col-md-4"></div>
        </div>
    </div>
  </div>

</div>
</div>

  </div>
</template>

<script>
import { HTTP } from '../core/http-common.js'
import { firebaseStorage } from '../core/firebaseHelper.js'
import { hasEmptyField } from '../utils/helper.js'
import dropdownData from './dropdown-data.json'
import InputText from '@/components/form/InputText'
import InputDropdown from '@/components/form/InputDropdown'
import InputDatepicker from '@/components/form/InputDatepicker'
import appFormInputUploadFile from '@/components/form/InputUploadFile'

export default {
  data () {
    return {
      dropdownData,
      isDisabled: false,
      formDataAlert: {
        picture: false,
        title: false,
        firstName: false,
        lastName: false,
        firstNameEN: false,
        lastNameEN: false,
        nickname: false,
        birthdate: false,
        sex: false,
        blood: false,
        religion: false,
        academicYear: false,
        university: false,
        faculty: false,
        department: false,
        educationStatus: false,
        equivalentEducationDegree: false,
        currentWorkingStatus: false,
        workingStatusDescription: false
      },
      formData: {
        picture: {},
        title: '',
        firstName: '',
        lastName: '',
        firstNameEN: '',
        lastNameEN: '',
        nickname: '',
        birthdate: '',
        sex: '',
        blood: '',
        religion: '',
        academicYear: '',
        university: '',
        faculty: '',
        department: '',
        educationStatus: 'อยู่ระหว่างการศึกษา',
        equivalentEducationDegree: '-',
        currentWorkingStatus: '-',
        workingStatusDescription: '-'
      }
    }
  },
  computed: {
    major () {
      return this.$store.getters.major
    },
    workingStatusDescriptionQuestion () {
      return this.formData.currentWorkingStatus === 'ทำงานแล้ว' ? 'ระบุชื่อที่ทำงาน' : 'ระบุ'
    }
  },
  methods: {
    firstName (value) {
      this.formData.firstName = value
    },
    lastName (value) {
      this.formData.lastName = value
    },
    firstNameEN (value) {
      const regex = /^[a-zA-Z]*$/
      if (regex.exec(value) !== null) {
        this.formData.firstNameEN = value
      } else {
        this.formDataAlert.firstNameEN = true
      }
    },
    lastNameEN (value) {
      const regex = /^[a-zA-Z]*$/
      if (regex.exec(value) !== null) {
        this.formData.lastNameEN = value
      } else {
        this.formDataAlert.lastNameEN = true
      }
    },
    nickname (value) {
      this.formData.nickname = value
    },
    birthdate (value) {
      this.formData.birthdate = value
    },
    sex (value) {
      this.formData.sex = value
    },
    blood (value) {
      this.formData.blood = value
    },
    religion (value) {
      this.formData.religion = value
    },
    educationStatus (value) {

      this.formData.educationStatus = value
      if (value === 'อยู่ระหว่างการศึกษา') {
        this.formData.academicYear = ''
        this.formData.university = ''
        this.formData.faculty = ''
        this.formData.department = ''

        this.formData.equivalentEducationDegree = '-'
        this.formData.currentWorkingStatus = '-'
        this.formData.workingStatusDescription = '-'
      } else {
        this.formData.equivalentEducationDegree = ''
        this.formData.currentWorkingStatus = ''
        this.formData.workingStatusDescription = ''

        this.formData.academicYear = '-'
        this.formData.university = '-'
        this.formData.faculty = '-'
        this.formData.department = '-'
      }
    },
    equivalentEducationDegree (value) {
      this.formData.equivalentEducationDegree = value
    },
    currentWorkingStatus (value) {
      if (value === 'ว่างงาน') {
        this.formData.workingStatusDescription = '-'
      }
      this.formData.currentWorkingStatus = value
    },
    workingStatusDescription (value) {
      this.formData.workingStatusDescription = value
    },
    academicYear (value) {
      this.formData.academicYear = value
    },
    university (value) {
      this.formData.university = value
    },
    faculty (value) {
      this.formData.faculty = value
    },
    department (value) {
      this.formData.department = value
    },
    picture (value) {
      this.formData.picture = value
    },
    title (value) {
      this.formData.title = value
    },
    checkPageCompleteAndDispatch () {
      if (hasEmptyField(this.formData)) {
        this.$store.dispatch('completeProfileOne', false)
      } else {
        this.$store.dispatch('completeProfileOne', true)
      }
    },
    async nextSteps () {
      try {
        this.checkPageCompleteAndDispatch()
        this.$store.commit('setProfileOne', this.formData)
        if (this.$store.getters.profileOne.complete) {
          if (this.formData.picture !== null && typeof this.formData.picture === 'object') {
            this.isDisabled = true
            await this.uploadFile()
            await HTTP.put('/registration/info', this.formData)
          } else {
            await HTTP.put('/registration/info', this.formData)
          }
          this.$router.push('2')
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
    async uploadFile () {
      let tokenUser = JSON.parse(window.localStorage.getItem('ywc16_user_fb'))
      let getFile = this.formData.picture
      let storageRef = firebaseStorage.ref('accounts/' + tokenUser.userID + '.jpg')
      const responseFile = await storageRef.put(getFile)
      if (responseFile) {
        const urlImg = await storageRef.getDownloadURL()
        if (urlImg) {
          this.formData.picture = urlImg
          this.$store.commit('setProfileOne', this.formData)
        } else {
          console.log('get url error')
        }
      } else {
        console.log('upload picture error')
      }
    }
  },
  components: {
    appInputText: InputText,
    appInputDropdown: InputDropdown,
    appInputDatepicker: InputDatepicker,
    appFormInputUploadFile
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let profileOne = this.$store.getters.profileOne
    let profileOneData = profileOne.data
    if (tokenExists) {
      this.formData = profileOneData
    } else {
      this.$router.push('/authen')
    }
  }
}
</script>
<style scoped>
.row {
  margin-top: 20px
}

</style>
