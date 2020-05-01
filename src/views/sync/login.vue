<template>
  <div class="input-group">
    <label>姓名:</label>
    <input v-model="text" />
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      text: ""
    };
  },
  watch: {
    text(newVal) {
      this.$emit("update:name", newVal);
    }
  }
};
</script>

<style scoped lang="scss"></style>
