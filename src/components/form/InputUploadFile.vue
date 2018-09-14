<template>
  <div>
      <center>
      <img :src="file" id="output" class="img-responsive img-rounded img-thumbnail" style="border:2px solid #E3E0F1;">
       <div class='form-group'>
          <br>
          <label class="control-label btn btn-default btn-file">
            Upload Profile
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" style="display: none;"/>
          </label>
          <br>
          <p :class="{ 'text-danger': isError }" style="margin-top: 10px;font-size: 18px;color:#8E8E8E">หน้าตรงแต่งกายตามสบาย</p>
          <p :class="{ 'text-danger': isError }" style="margin-top: -8px; color:#8E8E8E">(ขนาดไฟล์ไม่เกิน 2 MB)</p>
          <label v-if="isError" class="text-danger">กรุณาใส่รูปส่วนตัว</label>
       </div>
      </center>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    errorMsg: String,
    errorInput: Boolean,
    data: File
  },
  data () {
    return {
      file: 'https://firebasestorage.googleapis.com/v0/b/ywc16-register.appspot.com/o/no-pic.png?alt=media&token=1ad54c49-6326-48c3-865c-a0dbd5ac551a',
      isError: false
    }
  },
  created () {
    if (this.data) {
      this.file = this.data
    }
  },
  computed: {
    formGroupClass () {
      return {
        'has-error': this.isError
      }
    },
    errorMsgClass () {
      return {
        'hidden': this.showErrorMsg
      }
    },
    showErrorMsg () {
      return !this.isError
    }
  },
  watch: {
    errorInput (value) {
      if (value) {
        this.isError = true
      } else {
        this.isError = false
      }
    }
  },
  methods: {
    handleFileUpload () {
      this.file = URL.createObjectURL(event.target.files[0])
      this.$emit('value', this.$refs.file.files[0])
    }
  }
}
</script>
