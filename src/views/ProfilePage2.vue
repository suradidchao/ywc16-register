<template>
  <div>
    <h1>This is ProfilePage 2</h1>
    <form action="">
      <app-form-input-text-area
        :question = "'ที่อยู่'"
        :errorMsg = "'กรุณาใส่ที่อยู่'"
        :maxLength = "150"
        :textAreaRow = "3"
        :required="true"
      >
      </app-form-input-text-area>
    </form>
  </div>
</template>
<script>
import appFormInputTextArea from '@/components/form/FormInputTextArea'
export default {
  data () {
    return {
    }
  },
  components: {
    appFormInputTextArea
  }
}
</script>
