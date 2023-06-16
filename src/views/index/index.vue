<template>
  <div class="index">
    <div class="back">
      <i class="el-icon-arrow-left"  @click="goback()"></i>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    goback() {
      this.$router.push({name:'home'});
    },
  },
};
</script>
<style scoped lang="scss">
.index {
  background: url("@/assets/home-header.png") no-repeat;
  background-size: 100%, 100%;
  .content {
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    z-index: 999;
  }
  .back {
    padding: 10px 15px;
    text-align: left;
    i {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
