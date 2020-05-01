<template>
  <div id="container">
    <grandchild v-bind="$attrs" v-on="$listeners"></grandchild>
  </div>
</template>

<script>
import grandchild from "./child2";
export default {
  data() {
    return {};
  },
  components: { grandchild },
  props: {
    name
  }
};
</script>

<style scoped lang="scss"></style>
