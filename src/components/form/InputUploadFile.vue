<template>
  <div>
      <img src="../../assets/no-pic.png" id="output" class="img-responsive img-rounded img-thumbnail">
      <label class="control-label" :class="errorMsgClass">{{ errorMsg }}</label>
       <div class='form-group' :class="formGroupClass">
          <br>
         <center>
          <label class="control-label btn btn-default btn-file">
            Upload Profile
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" style="display: none;"/>
          </label>
          </center>
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
       var output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
      this.file = this.$refs.file.files[0]
      this.$emit('value', this.file)
    }
  }
}
</script>


<style>
/* .btn-file {
    position: relative;
    overflow: hidden;
} */
/* .btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
} */
</style>

