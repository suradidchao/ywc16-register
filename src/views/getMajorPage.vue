<template>
  <div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      major: this.$route.params.major
    }
  },
  created () {
    const filterMajor = ['design', 'marketing', 'content', 'programming']
    if (filterMajor.find(major => major.includes(this.major))) {
        window.localStorage.setItem('ywc16_user_major', this.major)
        this.$router.push('authen')
    } else {
      console.log('not major')
    }
  }
}

</script>
