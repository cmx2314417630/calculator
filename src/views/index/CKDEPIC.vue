<template>
  <div class="details">
    <div class="result">
      <h2>{{ total }}</h2>
      <p>计算结果</p>
    </div>
    <div class="form">
      <div class="title">
        <span @click="changelist()">
          {{ menuObj.name }}
          <i class="el-icon-caret-right"></i>
        </span>
      </div>
      <div class="formbox">
        <div class="icon">
          <i class="el-icon-caret-top"></i>
        </div>
        <el-form
          ref="form"
          :model="form"
          :hide-required-asterisk="true"
          :rules="rules"
          label-width="180px"
          :show-message="false"
          label-position="left"
        >
          <el-form-item label="年龄：" prop="age">
            <el-input v-model.trim="form.age" type="number" placeholder="请输入">
              <p slot="suffix">mmol/L</p>
            </el-input>
          </el-form-item>
          <el-form-item label="血清肌酐胱抑素C：" prop="xqjgc">
            <el-input
              v-model.trim="form.xqjgc"
              type="number"
              placeholder="请输入"
            >
              <p slot="suffix">μmol/L</p>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="btns">
          <el-button class="resetbtn" @click="resetForm('form')"
            >重置</el-button
          >
          <el-button class="countbtn" @click="onSubmit('form')">计算</el-button>
        </div>
      </div>
    </div>
    <div class="range" v-if="menuObj.range">
      <h2>正常范围</h2>
      <div class="rangebox" v-html="menuObj.range"></div>
    </div>
    <div class="range" v-if="menuObj.explain">
      <h2>计算公式</h2>
      <div class="rangebox" v-html="menuObj.explain"></div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      :show-close="false"
      top="5vh"
    >
      <DialogMod :MenuKey="menuObj.id"></DialogMod>
    </el-dialog>
  </div>
</template>
<script>
import DialogMod from "@/components/DialogMod.vue";
import "@/assets/details.scss";
export default {
  data() {
    return {
      total: 0, //计算结果
      menuObj: {}, //菜单对象
      dialogVisible: false,
      form: {
        age: "",
        xqjgc: "",
      },
      rules: {},
    };
  },
  components: {
    DialogMod,
  },
  created() {
    for (const key in this.form) {
      this.rules[key] = [
        { required: true, message: "请输入", trigger: "change" },
      ];
    }
    if (this.$route.params.id && this.$route.params.name) {
      this.menuObj = this.$route.params;
    } else {
      this.$router.go(-1);
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.total = this.$api.RFIFormula(this.form);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.total = 0;
    },
    changelist() {
      if (this.menuObj.id) {
        this.dialogVisible = true;
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
