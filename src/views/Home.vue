<template>
  <div class="home">
    <div class="content">
      <div class="search">
        <el-input
          class="myinput"
          prefix-icon="el-icon-search"
          placeholder="输入关键字搜索"
          v-model.trim="input"
          clearable
          @change="serachHandle"
        >
        </el-input>
        <el-button class="mybtn" @click="serachHandle()" type="text"
          >搜索</el-button
        >
      </div>
      <div class="card">
        <div
          class="item"
          v-for="item in menu"
          :key="item.id"
          @click="godetails(item)"
        >
          <div class="name">{{ item.name }}</div>
          <div class="icon"><i class="el-icon-arrow-right"></i></div>
        </div>
        <div v-if="menu.length === 0">未搜索到关键字</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      input: "",
      menu: this.$menu,
    };
  },
  created() {},
  methods: {
    godetails(item) {
      this.$router.push({ name: item.route, params: item });
    },
    // 搜索
    serachHandle() {
      if (this.input == "") {
        return (this.menu = this.$menu);
      }
      let patt = new RegExp(this.input, "i");
      this.menu = this.menu.filter((item) => {
        if (patt.test(item.name)) {
          return item;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  background: url("@/assets/home-header.png") no-repeat;
  background-size: 100%, 100%;
  .content {
    box-sizing: border-box;
    width: 100vw;
    z-index: 999;
    padding: 15px;
    padding-bottom: 50px;
    .search {
      padding: 15px 0;
      color: #fff;
      display: flex;
      .myinput {
        height: 40px;
        line-height: 40px;
        flex: 1;
        ::v-deep .el-input__inner {
          border-radius: 20px !important;
        }
      }
      .mybtn {
        color: #f2f2f2;
        margin-left: 15px;
        z-index: 99;
      }
    }
    .card {
      background: #fff;
      z-index: 99;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0px 3px 18px 1px rgba(0, 0, 0, 0.08);
      .item {
        padding: 15px 0;
        border-bottom: 1px solid #d5d5d5;
        display: flex;
        color: #333333;
        justify-content: space-between;
      }
      .item:last-child {
        border: none;
      }
    }
  }
}
</style>
