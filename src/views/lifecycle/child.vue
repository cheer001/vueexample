<template>
  <div id="container"></div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("---------child--beforeCreate------------");
  },
  created() {
    console.log("---------child--created------------");
  },
  beforeMount() {
    console.log("---------child--beforeMount------------");
  },
  mounted() {
    console.log("---------child--mounted------------");
  }
};
</script>

<style scoped lang="scss"></style>
