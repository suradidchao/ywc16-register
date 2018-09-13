<template>
  <div>
      <p>{{ file }}</p>
      <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label>
       <div class='form-group' :class="formGroupClass">
          <br>
          <label class="control-label btn btn-default btn-file">
            Upload file
            <input type="file" id="file" ref="file" accept="application/pdf" v-on:change="handleFileUpload()" style="display: none;"/>
          </label>
       </div>
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
      file: '',
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
      this.file = event.target.files[0].name
      this.$emit('value', this.$refs.file.files[0])
    }
  }
}
</script>
