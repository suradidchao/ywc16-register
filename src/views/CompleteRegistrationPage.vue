<template>
  <div class="message-container">
    <div class='message'>
      <h1>ยินดีด้วย คุณ {{ this.$store.state.user.user.data.firstName }} {{ this.$store.state.user.user.data.lastName }} </h1>
      <h3>คุณได้ทำการลงทะเบียนเสร็จเรียบร้อยแล้ว <br> โปรดรอฟังประกาศผลในวันที่ 4 พฤศจิกายน 2561 </h3>
      <h4>กลับไปที่ <a href="https://ywc.in.th">ywc.in.th</a> </h4>
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
