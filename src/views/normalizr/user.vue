<template>
  <div id="container">
    {{ entities }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      entities: state => state.entities
    })
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  mounted() {
    // console.log(this.$store);
    this.fetchData();
    console.log(this.entities);
  }
};
</script>

<style scoped lang="scss"></style>
