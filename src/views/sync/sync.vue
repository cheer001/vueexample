<template>
  <div id="container"><login :name.sync="userName"></login> {{ userName }}</div>
</template>

<script>
import Login from "./login";
export default {
  data() {
    return {
      userName: ""
    };
  },
  components: {
    Login
  }
};
</script>

<style scoped lang="scss"></style>
