<template>
  <div class="container">
    <h1>This is profile page!!!</h1>
    <h2>{{ major }}</h2>
      <form>
           <label for="blood">กรุ๊ปเลือด</label>
           <select v-model="blood" id="blood" class="form-control col-sm-9">
            <option v-for="option in dropdownData['blood']" v-bind:value="option" v-bind:key="option">
                {{ option }}
            </option>
          </select>

              <label for="blood">ศาสนา</label>
           <select v-model="religion" id="religion" class="form-control col-sm-9">
            <option v-for="option in dropdownData['religion']" v-bind:value="option" v-bind:key="option">
                {{ option }}
            </option>
          </select>
      <!-- <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="academicYear">
          <option>ปี 1</option>
          <option>ปี 2</option>
          <option>ปี 3</option>
          <option>ปี 4</option>
        </select> -->

        <!-- {{  blood  }} -->

    <button type="submit">Next</button>
  </form>
  </div>
</template>

<script>
import dropdownData from './dropdown-data.json';
export default {
  data () {
    return {
      blood:'',
      religion:'',
      dropdownData
    }
  },
  computed: {
    major () {
      return this.$store.getters.major
    }
  },
  created () {
    let tokenExists = window.localStorage.getItem('ywc16_user_fb')
    let majorUser = this.$store.getters.major
    if (tokenExists) {
      if (this.$store.getters.major) {
        this.$store.commit('setMajor', majorUser)
      }
      console.log('token exists')
      // request jwt backend get data
      // redirect route
    } else {
      console.log('token not exists')
      this.$router.push('/authen')
    }
  }
}
</script>
