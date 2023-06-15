<template>
  <div class="index">
    <div class="header"></div>
    <div class="back" @click="goback()">
      <i class="el-icon-arrow-left"></i>
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
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
.index {
  background: #fff;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 240px;
    background: url("@/assets/home-header.png") no-repeat;
    background-size: 100% 100%;
    z-index: 0;
  }
  .content {
    position: absolute;
    padding: 15px;
    left: 0;
    top: 38px;
    box-sizing: border-box;
    width: 100%;
    z-index: 999;
  }
  .back {
    padding: 10px 15px;
    position: absolute;
    left: 0;
    top: 0;
    i {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
