<template>
  <div class="details">
    <div class="result">
      <h2>{{ total }}</h2>
      <p>计算结果</p>
    </div>
    <div class="form">
      <div class="title">
        <span @click="changelist()">
          {{ MenuName }}
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
          label-width="60px"
          :show-message="false"
          label-position="left"
        >
          <el-form-item label="性别：" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="身高：" prop="height">
            <el-input v-model.trim="form.height" placeholder="请输入">
              <p slot="suffix">CM</p>
            </el-input>
          </el-form-item>
          <el-form-item label="体重：" prop="weight">
            <el-input v-model.trim="form.weight" placeholder="请输入">
              <p slot="suffix">KG</p>
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
    <div class="range">
      <h2>正常范围</h2>
      <div class="rangebox">18kg/m2-23kg/m2</div>
    </div>
    <div class="range">
      <h2>计算公式</h2>
      <div class="rangebox">
        体重指数（BMI kg/m2）=体重（kg）÷身高的平方（m2）
        <div class="line"></div>
        BMI =体重（kg）/ 身高（m）的平方<br />
        其中，体重以千克为单位，身高以米为单位。例<br />如，一个人的体重为70公斤，身高为1.75米，<br />则他的BMI为：<br />
        BMI =70 / (1.75 x1.75) =22.86<br />
        根据世界卫生组织（WHO）的标准，BMI在18.5以下为偏瘦，18.5-24.9为正常，25-29.9为超重，30及以上为肥胖。但是需要注意的是，BMI只是一个粗略的指标，不能完全反映一个人的健康状况，因为它无法区分体重是由肌肉还是脂肪组成的。<br />
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      :show-close="false"
      top="5vh"
    >
      <DialogMod :MenuKey="MenuKey"></DialogMod>
    </el-dialog>
  </div>
</template>
<script>
import DialogMod from "@/components/DialogMod.vue";
export default {
  data() {
    return {
      total: 0,
      MenuKey: 0,
      MenuName: "",
      dialogVisible: false,
      options: [
        { value: 1, label: "男" },
        { value: 2, label: "女" },
      ],
      form: {
        sex: "",
        height: "",
        weight: "",
      },
      rules: {
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        height: [{ required: true, message: "请输入", trigger: "change" }],
        weight: [{ required: true, message: "请输入", trigger: "change" }],
      },
    };
  },
  components: {
    DialogMod,
  },
  created() {
    if (this.$route.params.id) {
      this.MenuKey = this.$route.params.id;
    }
    if (this.$route.params.name) {
      this.MenuName = this.$route.params.name;
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changelist() {
      if (this.MenuKey === 0) {
        return;
      }
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped lang="scss">
.details {
  ::v-deep .el-form-item.is-error .el-input__inner,
  .el-form-item.is-error .el-input__inner:focus,
  .el-form-item.is-error .el-textarea__inner,
  .el-form-item.is-error .el-textarea__inner:focus {
    border-color: red !important;
  }
  ::v-deep .el-dialog__body {
    padding: 15px 0;
  }
  ::v-deep .el-select {
    width: 100%;
  }
  ::v-deep .el-dialog__header {
    padding: 0;
  }
  ::v-deep .el-form-item {
    background: #f6f6f6;
    border-radius: 10px;
    padding: 5px 15px;
    margin-bottom: 10px;
  }
  ::v-deep .el-input__inner {
    background: #f6f6f6;
    border-color: #f6f6f6;
    padding: 0 !important;
  }
  ::v-deep .el-form-item__label {
    font-weight: bold;
    font-size: 16px;
    padding: 0;
  }
  .result {
    color: #fff;
    padding-bottom: 25px;
    h2 {
      font-size: 32px;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
    }
  }
  .form {
    padding-bottom: 35px;
    .title {
      color: #fff;
      text-align: left;
      font-weight: bold;
      padding-bottom: 20px;
    }
    .formbox {
      background: #ffffff;
      box-shadow: 0px 3px 18px 1px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      padding: 15px;

      position: relative;
      .btns {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        ::v-deep .el-button {
          flex: 1;
          height: 50px;
          border-radius: 25px;
          box-sizing: border-box;
        }
        .resetbtn {
          border: 1px solid #3f6cde;
          color: #3f6cde;
        }
        .countbtn {
          background: #3f6cde;
          border: 1px solid #3f6cde;
          color: #fff;
        }
      }
      p {
        color: #333333;
      }
      .icon {
        position: absolute;
        left: 10px;
        top: -20px;
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .range {
    text-align: left;
    padding-bottom: 25px;
    h2 {
      padding-bottom: 15px;
      font-size: 16px;
    }
    .rangebox {
      padding: 15px;
      font-size: 15px;
      background: #f7f7f7;
      border-radius: 10px;
      color: #656565;
      line-height: 24px;
      .line {
        margin: 10px 0;
        height: 1px;
        background: #dddddd;
      }
    }
  }
}
</style>
