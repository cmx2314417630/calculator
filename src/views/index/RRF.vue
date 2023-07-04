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
          label-width="200px"
          :show-message="false"
          label-position="left"
        >
          <el-form-item label="透析间期尿量（IDUV）：" prop="IDUV">
            <el-input v-model.trim="form.IDUV" type="number" placeholder="请输入">
              <p slot="suffix">ml</p>
            </el-input>
          </el-form-item>
          <el-form-item label="尿液尿素浓度（UUC）：" prop="UUC">
            <el-input
              v-model.trim="form.UUC"
              type="number"
              placeholder="请输入"
            >
              <p slot="suffix">mg/dl</p>
            </el-input>
          </el-form-item>
          <el-form-item label="透析间期（ID Period）：" prop="Period">
            <el-input
              v-model.trim="form.Period"
              type="number"
              placeholder="请输入"
            >
              <p slot="suffix">min</p>
            </el-input>
          </el-form-item>
          <el-form-item label="平均尿素氮含量：" prop="pjnsdhl">
            <el-input
              v-model.trim="form.pjnsdhl"
              type="number"
              placeholder="请输入"
            >
              <p slot="suffix">mg/dl</p>
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
        pjnsdhl: "",
        IDUV: "",
        UUC: "",
        Period: "",
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
