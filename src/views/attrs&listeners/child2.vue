<template>
  <div id="container"></div>
</template>

<script>
export default {
  created() {
    this.$emit("sayHello", "hello"); //把sayHello从孙子组件传递到父组件
  },
  mounted() {
    alert(this.$attrs.message);
  }
};
</script>

<style scoped lang="scss"></style>
