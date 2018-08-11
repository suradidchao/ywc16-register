<template>
  <div class="container">
    <h1>This is profile page!!!</h1>
    <h2>{{ major }}</h2>
      <form>
      <app-input-text
        :question="'ชื่อ'"
        :data="formData.firstName"
        @value="firstName"
        :errorMsg="'There is error'"
        :required="true">
      </app-input-text>
      <app-input-text
        :question="'นามสกุล'"
        :data="formData.lastName"
        @value="lastName"
        :errorMsg="'There is test'"
        :required="true">
      </app-input-text>
      <app-input-text
        :question="'ชื่อ (ภาษาอังกฤษ)'"
        :data="formData.firstNameEN"
        @value="firstNameEN"
        :errorMsg="'There is error'"
        :required="true">
      </app-input-text>
      <app-input-text
        :question="'นามสกุล (ภาษาอังกฤษ)'"
        :data="formData.lastNameEN"
        @value="lastNameEN"
        :errorMsg="'There is test'"
        :required="true">
      </app-input-text>
      <app-input-text
        :question="'ชื่อเล่น'"
        :data="formData.nickName"
        @value="nickName"
        :errorMsg="'There is test'"
        :required="true">
      </app-input-text>
      <app-input-datepicker
        :question="'วันเกิด'"
        :data="formData.birthdate"
        @value="birthdate"
        :errorMsg="'There is test'"
        :required="true" >
      </app-input-datepicker>
      <app-input-dropdown
        :question="'เพศ'"
        :data="formData.sex"
        @value="sex"
        :errorMsg="'There is test'"
        :dropdownData="dropdownData['sex']"
      ></app-input-dropdown>
      <app-input-dropdown
        :question="'กรุ๊ปเลือด'"
        :data="formData.blood"
        @value="blood"
        :errorMsg="'There is test'"
        :dropdownData="dropdownData['blood']">
      </app-input-dropdown>
      <app-input-dropdown
        :question="'ศาสนา'"
        :data="formData.religion"
        @value="religion"
        :errorMsg="'There is test'"
        :dropdownData="dropdownData['religion']">
      </app-input-dropdown>
      <app-input-text
        :question="'สถานศึกษา'"
        :data="formData.university"
        @value="university"
        :errorMsg="'There is test'">
      </app-input-text>
      <app-input-text
        :question="'คณะ'"
        :data="formData.faculty"
        @value="faculty"
        :errorMsg="'There is test'">
      </app-input-text>
      <app-input-text
        :question="'สาขา'"
        :data="formData.department"
        @value="department"
        :errorMsg="'There is test'">
      </app-input-text>
      <app-input-dropdown
        :question="'ชั้นปี'"
        :data="formData.academicYear"
        @value="academicYear"
        :errorMsg="'There is test'"
        :dropdownData="dropdownData['academicYear']">
      </app-input-dropdown>

    <button type="submit" class="btn btn-lg btn-primary" @click="nextSteps">Next</button>
  </form>
  </div>
</template>

<script>
import {isEmpty} from '../utils/helper.js'
import dropdownData from './dropdown-data.json';
import InputText from '@/components/form/InputText'
import InputDropdown from '@/components/form/InputDropdown'
import InputDatepicker from '@/components/form/InputDatepicker'
export default {
  data () {
    return {
      dropdownData,
      formData: {
        firstName: '',
        lastName: '',
        firstNameEN: '',
        lastNameEN: '',
        nickName: '',
        birthdate: '',
        sex: '',
        blood: '',
        religion: '',
        academicYear: '',
        university: '',
        faculty: '',
        department: ''
      }
    }
  },
  computed: {
    major () {
      return this.$store.getters.major
    }
  },
  methods:{
    firstName(value) {
      this.formData.firstName = value
    },
    lastName(value) {
      this.formData.lastName = value
    },
    firstNameEN(value) {
      const regex = /^[a-zA-Z]*$/;
      if (regex.exec(value) !== null) {
      this.formData.firstNameEN = value
        // console.log(value)
      } else {
          // not en
      }
    },
    lastNameEN(value) {
      const regex = /^[a-zA-Z]*$/;
      if (regex.exec(value) !== null) {
        this.formData.lastNameEN = value
        // console.log(value)
      } else {
          // not en
      }
    },
    nickName(value) {
      this.formData.nickName = value
    },
    birthdate(value) {
      this.formData.birthdate = value
    },
    sex(value){
      this.formData.sex = value
    },
    blood(value) {
      this.formData.blood = value
    },
    religion(value) {
      this.formData.religion = value
    },
    academicYear(value) {
      this.formData.academicYear = value
    },
    university(value){
      this.formData.university = value
    },
    faculty(value) {
      this.formData.faculty = value
    },
    department(value) {
      this.formData.department = value
    },
    async nextSteps () {
      await this.$store.commit('setProfileOne', this.formData)
      await this.$router.push('/steps/profile2')
    }
  },
  components: {
    appInputText: InputText,
    appInputDropdown: InputDropdown,
    appInputDatepicker: InputDatepicker
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let profileOne = this.$store.getters.profileOne
    let profileOneData = profileOne.data
    if (tokenExists) {
      if(isEmpty(profileOneData)) {
        console.log('Object is empty');
        this.$store.dispatch('completeProfileOne', false)
      } else {
        console.log('Object is NOT empty');
        this.$store.dispatch('completeProfileOne', true)
      }
      this.formData = profileOneData
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
