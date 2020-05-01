<template>
  <div id="container">
    <my-button @greet="sayHi"></my-button>
  </div>
</template>

<script>
import MyButton from "./child";
export default {
  components: {
    MyButton
  },
  methods: {
    sayHi(val) {
      alert("Hi, " + val); // 'Hi, vue.js!'
    }
  }
};
</script>

<style scoped lang="scss"></style>
