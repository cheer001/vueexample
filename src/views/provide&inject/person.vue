<template>
  <div id="container">
    <son></son>
  </div>
</template>

<script>
import Son from "./child";
export default {
  provide: {
    house: "房子",
    car: "车子",
    money: "￥10000"
  },
  components: {
    Son
  }
};
</script>

<style scoped lang="scss"></style>
