<template>
  <div>
<div class="container-fluid">
  <h1>Profile</h1>
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
                :errorMsg="'There is test'"
                :dropdownData="dropdownData['title']"
              ></app-input-dropdown>
            </div>
            <div class="col-md-4">
              <app-input-text
                :question="'ชื่อ'"
                :data="formData.firstName"
                @value="firstName"
                :errorMsg="'There is error'"
                :required="true">
              </app-input-text>
            </div>
            <div class="col-md-4">
                <app-input-text
                  :question="'นามสกุล'"
                  :data="formData.lastName"
                  @value="lastName"
                  :errorMsg="'There is test'"
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
                      :errorMsg="'There is error'"
                      :required="true">
                    </app-input-text>
                </div>
                <div class="col-md-4">
                      <app-input-text
                        :question="'นามสกุล (ภาษาอังกฤษ)'"
                        :data="formData.lastNameEN"
                        @value="lastNameEN"
                        :errorMsg="'There is test'"
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
                  :errorMsg="'There is test'"
                  :required="true">
                </app-input-text>
            </div>
            <div class="col-md-4">
              <app-input-datepicker
                :question="'วันเกิด'"
                :data="formData.birthdate"
                @value="birthdate"
                :errorMsg="'There is test'"
                :required="true" >
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
                :errorMsg="'There is test'"
                :dropdownData="dropdownData['sex']"
              ></app-input-dropdown>
            </div>
            <div class="col-md-4">
              <app-input-dropdown
              :question="'กรุ๊ปเลือด'"
              :data="formData.blood"
              @value="blood"
              :required="true"
              :errorMsg="'There is test'"
              :dropdownData="dropdownData['blood']">
            </app-input-dropdown>
            </div>
            <div class="col-md-4">
              <app-input-dropdown
                    :question="'ศาสนา'"
                    :data="formData.religion"
                    @value="religion"
                    :required="true"
                    :errorMsg="'There is test'"
                    :dropdownData="dropdownData['religion']">
              </app-input-dropdown>

            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
                <app-input-text
                  :question="'สถานศึกษา'"
                  :data="formData.university"
                  @value="university"
                  :errorMsg="'There is test'">
                </app-input-text>
            </div>
            <div class="col-md-6">
              <app-input-text
                :question="'คณะ'"
                :data="formData.faculty"
                @value="faculty"
                :errorMsg="'There is test'">
              </app-input-text>
            </div>
          </div>

           <div class="row">
            <div class="col-md-6">
              <app-input-text
                :question="'สาขา'"
                :data="formData.department"
                @value="department"
                :errorMsg="'There is test'">
              </app-input-text>
            </div>
            <div class="col-md-6">
              <app-input-dropdown
                :question="'ชั้นปี'"
                :data="formData.academicYear"
                @value="academicYear"
                :errorMsg="'There is test'"
                :required="true"
                :dropdownData="dropdownData['academicYear']">
              </app-input-dropdown>
            </div>
          </div>



        </div>
        <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4" style="margin-top:50px; margin-bottom:50px;">
                <center>
                    <button type="submit" class="btn btn-lg btn-default"  @click.stop.prevent="nextSteps">Save & Next  ></button>
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
import { HTTP } from "../core/http-common.js";
import { isEmpty } from "../utils/helper.js";
import dropdownData from "./dropdown-data.json";
import InputText from "@/components/form/InputText";
import InputDropdown from "@/components/form/InputDropdown";
import InputDatepicker from "@/components/form/InputDatepicker";
import appFormInputUploadFile from "@/components/form/InputUploadFile";

export default {
  data() {
    return {
      dropdownData,
      formData: {
        picture: {},
        title: "",
        firstName: "",
        lastName: "",
        firstNameEN: "",
        lastNameEN: "",
        nickname: "",
        birthdate: "",
        sex: "",
        blood: "",
        religion: "",
        academicYear: "",
        university: "",
        faculty: "",
        department: ""
      }
    };
  },
  computed: {
    major() {
      return this.$store.getters.major;
    }
  },
  methods: {
    firstName(value) {
      this.formData.firstName = value;
    },
    lastName(value) {
      this.formData.lastName = value;
    },
    firstNameEN(value) {
      const regex = /^[a-zA-Z]*$/;
      if (regex.exec(value) !== null) {
        this.formData.firstNameEN = value;
        // console.log(value)
      } else {
        // not en
      }
    },
    lastNameEN(value) {
      const regex = /^[a-zA-Z]*$/;
      if (regex.exec(value) !== null) {
        this.formData.lastNameEN = value;
        // console.log(value)
      } else {
        // not en
      }
    },
    nickname(value) {
      this.formData.nickname = value;
    },
    birthdate(value) {
      this.formData.birthdate = value;
    },
    sex(value) {
      this.formData.sex = value;
    },
    blood(value) {
      this.formData.blood = value;
    },
    religion(value) {
      this.formData.religion = value;
    },
    academicYear(value) {
      this.formData.academicYear = value;
    },
    university(value) {
      this.formData.university = value;
    },
    faculty(value) {
      this.formData.faculty = value;
    },
    department(value) {
      this.formData.department = value;
    },
    picture(value) {
      this.formData.picture = value;
    },
    title(value) {
      this.formData.title = value;
    },
    async nextSteps () {
      await this.$store.commit('setProfileOne', this.formData)
      try {
        await HTTP.put('/registration/info', this.formData)
      } catch (error) {
        alert(error)
      }

      this.$router.push('2')
    }
  },
  components: {
    appInputText: InputText,
    appInputDropdown: InputDropdown,
    appInputDatepicker: InputDatepicker,
    appFormInputUploadFile
  },
  created() {
    let tokenExists = window.localStorage.getItem("ywc16_user_fb");
    let profileOne = this.$store.getters.profileOne;
    let profileOneData = profileOne.data;
    if (tokenExists) {
      if (isEmpty(profileOneData)) {
        console.log("Object is empty");
        this.$store.dispatch("completeProfileOne", false);
      } else {
        console.log("Object is NOT empty");
        this.$store.dispatch("completeProfileOne", true);
      }
      this.formData = profileOneData;
      console.log("token exists");
      // request jwt backend get data
      // redirect route
    } else {
      console.log("token not exists");
      this.$router.push("/authen");
    }
  }
};
</script>
<style scoped>
.row {
  margin-top: 20px
}

</style>

