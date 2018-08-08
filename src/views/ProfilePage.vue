<template>
  <div>
    <h1>This is profile page!!!</h1>
    <h2>{{ major }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      major () {
        return this.$store.getters.major
      },
    }
  }
</script>
