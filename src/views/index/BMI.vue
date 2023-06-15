<template>
  <div class="details">
    <div class="result">BMI指标计算</div>
    <div class="form"></div>
    <div class="range"></div>
    <div class="formula"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$api.BMIFormula(1));
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.details {
  .result {
    color: #fff;
  }
}
</style>
