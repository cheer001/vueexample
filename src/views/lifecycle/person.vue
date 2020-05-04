<template>
  <div id="container">
    <child></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  data() {
    return {};
  },
  components: { child },
  beforeCreate() {
    console.log("--------person--beforeCreate------------");
  },
  created() {
    console.log("---------person--created------------");
  },
  beforeMount() {
    console.log("---------person--beforeMount------------");
  },
  mounted() {
    console.log("---------person--mounted------------");
  }
};
</script>

<style scoped lang="scss"></style>
