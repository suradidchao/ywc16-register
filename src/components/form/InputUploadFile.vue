<template>
  <div>
      <center>
      <img :src="file" id="output" class="img-responsive img-rounded img-thumbnail" style="border:2px solid #E3E0F1;">
      <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label>
       <div class='form-group' :class="formGroupClass">
          <br>
          <label class="control-label btn btn-default btn-file">
            Upload Profile
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" style="display: none;"/>
          </label>
       </div>
      </center>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    errorMsg: String,
    data: Object
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
  methods: {
    handleFileUpload () {
      this.file = URL.createObjectURL(event.target.files[0])
      this.$emit('value', this.$refs.file.files[0])
    }
  }
}
</script>
