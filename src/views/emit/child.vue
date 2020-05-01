<template>
  <div id="container">
    <button @click="triggerClick">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "vue.js!"
    };
  },
  methods: {
    triggerClick() {
      this.$emit("greet", this.greeting);
    }
  }
};
</script>

<style scoped lang="scss"></style>
