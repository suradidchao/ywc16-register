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
        this.$store.commit('setMajor', this.major)
        this.$router.push('/steps/1')
    } else {
      console.log('not major')
    }
  }
}

</script>
