<template>
  <div id="container">
    <child :name="name" :message="message" @sayHello="sayHello"></child>
  </div>
</template>

<script>
import Child from "./child1";
export default {
  inheritAttrs: false, //是否继承属性
  components: {
    Child
  },
  data() {
    return {
      name: "通信",
      message: "Hi"
    };
  },
  methods: {
    sayHello(mes) {
      console.log("mes", mes); // => "hello"
    }
  }
};
</script>

<style scoped lang="scss"></style>
