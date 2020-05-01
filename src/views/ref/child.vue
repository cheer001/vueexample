<template>
  <div id="container">
    <!-- 在普通的 DOM 元素上使用，引用指向的就是 DOM 元素 -->
    <input ref="input" />
  </div>
</template>

<script>
export default {
  methods: {
    focus: function() {
      this.$refs.input.focus();
    }
  },
  mounted() {
    this.focus();
  }
};
</script>

<style scoped lang="scss"></style>
