<template>
  <div id="container">
    <!-- 在子组件上，引用就指向组件实例 -->
    <base-input ref="baseInput"></base-input>
  </div>
</template>

<script>
import baseInput from "./child";
export default {
  methods: {
    focusInput: function() {
      this.$refs.baseInput.focus();
    }
  },
  components: {
    baseInput
  }
};
</script>

<style scoped lang="scss"></style>
