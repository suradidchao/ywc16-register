<template>
  <div>
    <div class="form-group">
    <label>{{ question }}</label>
    <select v-model="selectItem" class="form-control" @change="onSelect">
      <option v-for="option in dropdownData" v-bind:value="option" v-bind:key="option">
          {{ option }}
      </option>
    </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    errorMsg: String,
    dropdownData: Array
  },
  data() {
    return {
      hasError: false,
      selectItem: ""
    };
  },
  methods: {
    onSelect() {
      this.$emit("value", this.selectItem);
    }
  }
};
</script>

