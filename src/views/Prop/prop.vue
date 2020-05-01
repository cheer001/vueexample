<template>
  <div id="container">
    <child :content="message"></child>
  </div>
</template>

<script>
import Child from "./child";
export default {
  el: "#container",
  data() {
    return {
      message: "from parent"
    };
  },
  components: {
    Child
  }
};
</script>

<style scoped lang="scss"></style>
