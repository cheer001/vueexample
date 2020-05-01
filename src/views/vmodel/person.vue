<template>
  <div id="container">
    <!-- 这是v-model的简写形式 -->
    <base-input v-model="input"></base-input>
    <!-- 全写形式 -->
    <!-- <base-input :value="input" @input="val=>{input=val}"></base-input> -->
  </div>
</template>

<script>
import baseInput from "./child";
export default {
  data() {
    return {
      input: ""
    };
  },
  components: {
    baseInput
  }
};
</script>

<style scoped lang="scss"></style>
