<template>
  <div class="container">
    <h1>This is profile page!!!</h1>
    <h2>{{ major }}</h2>
      <form>
      <app-input-text :question="'ชื่อ'" @value="firstName"  :errorMsg="'There is error'"  :required="true"></app-input-text>
      <app-input-text :question="'นามสกุล'" @value="lastName" :errorMsg="'There is test'"  :required="true"></app-input-text>
      <app-input-text :regularExpression="'[a-zA-Z0-9 ]+'" :question="'ชื่อ (ภาษาอังกฤษ)'" @value="firstNameEN"  :errorMsg="'There is error'"  :required="true"></app-input-text>
      <app-input-text :question="'นามสกุล (ภาษาอังกฤษ)'" @value="lastNameEN" :errorMsg="'There is test'"  :required="true"></app-input-text>
      <app-input-text :question="'ชื่อเล่น'" @value="lastNameEN" :errorMsg="'There is test'"  :required="true"></app-input-text>
      <app-input-datepicker :question="'วันเกิด'" @value="birthdate" :errorMsg="'There is test'" :required="true" ></app-input-datepicker>
      <app-input-dropdown :question="'เพศ'" @value="sex" :errorMsg="'There is test'" :dropdownData="dropdownData['sex']"></app-input-dropdown>
      <app-input-dropdown :question="'กรุ๊ปเลือด'" @value="blood" :errorMsg="'There is test'" :dropdownData="dropdownData['blood']"></app-input-dropdown>
      <app-input-dropdown :question="'ศาสนา'" @value="religion" :errorMsg="'There is test'" :dropdownData="dropdownData['religion']"></app-input-dropdown>
      <app-input-text :question="'สถานศึกษา'" @value="university" :errorMsg="'There is test'"></app-input-text>
      <app-input-text :question="'คณะ'" @value="faculty" :errorMsg="'There is test'"></app-input-text>
      <app-input-text :question="'สาขา'" @value="department" :errorMsg="'There is test'"></app-input-text>
      <app-input-dropdown :question="'ชั้นปี'" @value="academicYear" :errorMsg="'There is test'" :dropdownData="dropdownData['academicYear']"></app-input-dropdown>

    <!-- <button type="submit">Next</button> -->
  </form>
  </div>
</template>

<script>
import dropdownData from './dropdown-data.json';
import InputText from '@/components/form/InputText'
import InputDropdown from '@/components/form/InputDropdown'
import InputDatepicker from '@/components/form/InputDatepicker'
export default {
  data () {
    return {
      dropdownData
    }
  },
  computed: {
    major () {
      return this.$store.getters.major
    }
  },
  methods:{
   firstName(value) {
      console.log(value)
    },
   lastName(value) {
      console.log(value)
    },
   firstNameEN(value) {
    //  const regex = /^[a-zA-Z]*$/;
    //   if (regex.exec(value) !== null) {
    //     console.log(value)
    //   } else {
    //       // not en
    //   }
   },
   lastNameEN(value) {
      const regex = /^[a-zA-Z]*$/;
      if (regex.exec(value) !== null) {
        console.log(value)
      } else {
          // not en
      }
   },
   birthdate(value) {
       console.log(value)
   },
    sex(value){
      console.log(value)
    },
    blood(value) {
     console.log(value)
    },
    religion(value) {
     console.log(value)
    },
    academicYear(value) {
      console.log(value)
    },
    university(value){
      console.log(value)
    },
    faculty(value) {
      console.log(value)
    },
    department(value) {
      console.log(value)
    }
  },
  components: {
    appInputText: InputText,
    appInputDropdown: InputDropdown,
    appInputDatepicker: InputDatepicker
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let majorUser = this.$store.getters.major
    if (tokenExists) {
      if (this.$store.getters.major) {
        this.$store.commit('setMajor', majorUser)
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
