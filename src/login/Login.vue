<template>
  <div class="login">
    <div class="login-box">
      <img
        class="portrait"
        src="../assets/logo.jpg"
        alt=""
      >
      <fieldset class="layui-field-title">
        <legend class="text-white">—— VUE-DRILL系统登录 ——</legend>
      </fieldset>
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="account">
          <el-input
            type="account"
            v-model.number="numberValidateForm.account"
            autocomplete="off"
            placeholder='请输入账号'
          ></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            type="passWord"
            v-model.number="numberValidateForm.passWord"
            autocomplete="off"
            placeholder='请输入密码'
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            round
            @click="login"
          >登录</el-button>
          <p class="registered">还没有账号?<span>立即注册>></span></p>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        account: "",
        passWord: ""
      }
    };
  },
  methods: {
    login() {
      if (this.numberValidateForm.account !== 123456) {
        this.$message({
          showClose: true,
          message: "请输入正确的账号",
          type: "warning"
        });
      }
       if (this.numberValidateForm.passWord !== 123456) {
           console.log(this.numberValidateForm.passWord)
        this.$message({
          showClose: true,
          message: "请输入正确的密码",
          type: "warning"
        });
      
      }
        if(this.numberValidateForm.passWord ===123456 &&  this.numberValidateForm.account === 123456) {
            this.$router.push({path:'/home'});
        }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
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
    }
  }
};
</script>

<style scoped lang='less'>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/login-bg.jpg);
  background-position: center;
  .login-box {
    width: 300px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 35%;
    margin: -150px 0 0 -150px;
    z-index: 99;
    text-align: center;
    .portrait {
      width: 180px;
    }
    .layui-field-title {
      color: #fff;
      font-size: 20px;
    }
    .el-form-item__content {
      margin-left: 0px;
    }
    .demo-ruleForm {
      margin-top: 15px;
      .login-btn {
        width: 100%;
      }
    }
    .registered {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      span {
        color: #409eff;
        cursor: pointer;
      }
    }
  }
}
</style>
