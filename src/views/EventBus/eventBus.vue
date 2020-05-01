<template>
  <div id="container">
    <child></child>
  </div>
</template>

<script>
import Child from "./child";
export default {
  components: {
    Child
  },
  created() {
    // 变量保存
    this.EventBus.message = "hello";
    // 事件监听
    this.EventBus.$on("received", function(val) {
      console.log("received: " + val);
      // -> 'received: from child'
    });
  }
};
</script>
