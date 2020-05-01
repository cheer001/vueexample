<template>
  <div id="container">
    <h2>{{ foo }}</h2>
  </div>
</template>

<script>
export default {
  props: ["foo"],
  created() {
    console.log(this.$attrs, this.$listeners);
    // -> {bar: "parent bar"}
    // -> {two: fn}

    // 这里我们访问父组件中的 `triggerTwo` 方法
    // this.$listeners.one();
    this.$listeners.two();
    // -> 'two'
  }
};
</script>

<style scoped lang="scss"></style>
