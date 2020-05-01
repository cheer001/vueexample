<template>
  <div id="container">
    <input type="text" :value="currentValue" @input="handleInput" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: this.value === undefined || this.value === null ? "" : 0
    };
  },
  model: {
    prop: "value", //这个字段，是指父组件设置 v-model 时，将变量值传给子组件的 value
    event: "parent-event" //这个字段，是指父组件监听 parent-event 事件
  },
  props: {
    value: [String, Number] //此处必须定义和model的prop相同的props，因为v-model会传值给子组件
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      console.log("value:" + value);
      this.$emit("input", value); //将这个值通过 emit 触发parent-event，将value传递给父组件的v-model绑定的变量
    }
  }
};
</script>

<style scoped lang="scss"></style>
