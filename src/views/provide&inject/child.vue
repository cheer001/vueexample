<template>
  <div id="container">
    <h2>son</h2>
  </div>
</template>

<script>
export default {
  inject: {
    house: {
      default: "没房"
    },
    car: {
      default: "没车"
    },
    money: {
      // 长大工作了虽然有点钱
      // 仅供生活费，需要向父母要
      default: "￥4500"
    }
  },
  created() {
    console.log(this.house, this.car, this.money);
    // -> '房子', '车子', '￥10000'
  }
};
</script>

<style scoped lang="scss"></style>
