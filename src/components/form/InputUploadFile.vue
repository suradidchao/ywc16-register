<template>
  <div>
      <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label>
       <div class='form-group' :class="formGroupClass">
          <label class="control-label">{{ question }}
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
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
      file: this.data,
      isError: false
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
      this.file = this.$refs.file.files[0]
      this.$emit('value', this.file)
    }
  }
}
</script>
