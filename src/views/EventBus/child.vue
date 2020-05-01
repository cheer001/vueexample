<template>
  <div id="container">
    <h2>child</h2>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.EventBus.message);
    // -> 'hello'
    this.EventBus.$emit("received", "from child");
  }
};
</script>

<style scoped lang="scss"></style>
