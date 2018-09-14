<template>
  <div class="message-container">
    <div class='message'>
      <h1>ยินดีด้วย คุณ{{ this.$store.getters.user.firstName }} {{ this.$store.getters.user.lastName }} </h1>
      <h3>คุณได้ทำการลงทะเบียนเสร็จเรียบร้อยแล้ว <br> โปรดรอฟังประกาศผลในวันที่ 4 พฤศจิกายน 2561</h3>
    </div>

  </div>
</template>

<style scoped>
.message {
  text-align: center;
}

.message-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
}

</style>
