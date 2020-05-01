<template>
  <div class="container">
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: () => {
        return "from child";
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
