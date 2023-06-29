<template>
  <div class="menulist">
    <div
      v-for="item in menuList"
      :key="item.id"
      :id="MenuKey == item.id ? 'after' : ''"
      class="li"
      @click="SelectMenu(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    MenuKey: {
      default: 0,
    },
  },
  data() {
    return {
      menuList: this.$menu,
    };
  },
  created() {},
  methods: {
    SelectMenu(item){
      if (item.id === this.MenuKey) {
        return
      }
      this.$router.push({ name: item.route, params: item });
    }
  },
};
</script>
<style scoped lang="scss">
.menulist {
  text-align: left;
  height: 80vh;
  overflow-y: scroll;
  .li {
    font-size: 14px;
    padding: 8px 15px;
  }
  .li:hover {
    background-color: #f5f7fa;
  }
  #after {
    background-color: #f5f7fa;
    font-weight: bold;
    color: #3f6cdc;
  }
}
</style>
