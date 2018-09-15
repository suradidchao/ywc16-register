<template>
  <div class="message-container">
    <div class='message'>
      <h1>คุณ{{ this.$store.getters.user.firstName }} {{ this.$store.getters.user.lastName }} </h1>
      <h3>ยังไม่ได้ทำการเลือกสาขาโปรดกลับไปเลือกสาขาที่ <a href='https://ywc.in.th'>ywc.in.th</a> </h3>
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
