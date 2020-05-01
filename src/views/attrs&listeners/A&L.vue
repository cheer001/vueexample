<template>
  <div id="container">
    <child :foo="foo" :bar="bar" @one.native="triggerOne" @two="triggerTwo">
    </child>
  </div>
</template>

<script>
import Child from "./child";
export default {
  data() {
    return {
      foo: "parent foo",
      bar: "parent bar"
    };
  },
  components: {
    Child
  },
  methods: {
    triggerOne() {
      alert("one");
    },
    triggerTwo() {
      alert("two");
    }
  }
};
</script>

<style scoped lang="scss"></style>
