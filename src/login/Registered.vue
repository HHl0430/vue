<template>
  <div class="login">
    <div class="login-box">
      <img
        class="portrait"
        src="../assets/logo.jpg"
        alt=""
      >
      <fieldset class="layui-field-title">
        <legend class="text-white">—— VUE-DRILL系统注册 ——</legend>
      </fieldset>
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="account">
          <el-input
            type="num"
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
        <el-form-item prop="secondPassWord">
          <el-input
            type="passWord"
            v-model.number="numberValidateForm.secondPassWord"
            autocomplete="off"
            placeholder='请再次输入密码'
          ></el-input>
        </el-form-item>
        <el-form-item prop="num">
          <el-input
            type="tel"
            placeholder='输入手机号'
            v-model.number="numberValidateForm.num"
          >
            <template slot="append">
              <el-button
                class="login-btn"
                type="primary"
                round
                @click="registered"
              >获取验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            round
            @click="registered"
          >注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type=""
            round
            @click="$router.push({path:'/login'})"
          >已有账号登录</el-button>
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
        passWord: "",
        secondPassWord: "",
        num: ""
      }
    };
  },
  methods: {
    registered() {
      this.numberValidateForm.account += "";
      if (this.$store.state.user.indexOf(this.numberValidateForm.account) > -1) {
        this.$message({
          showClose: true,
          message: "此账号已存在请直接登录",
          type: "warning"
        });
        this.numberValidateForm.account = "";
        return;
      }
      if (this.numberValidateForm.account.length < 5) {
        this.$message({
          showClose: true,
          message: "账号必须至少5位数",
          type: "warning"
        });
        this.numberValidateForm.account = "";
        return;
      } else if (this.numberValidateForm.passWord.length < 6) {
        this.$message({
          showClose: true,
          message: "密码必须至少6位数",
          type: "warning"
        });
        this.numberValidateForm.passWord = "";
        return;
      } else if (
        this.numberValidateForm.passWord !==
        this.numberValidateForm.secondPassWord
      ) {
        this.$message({
          showClose: true,
          message: "密码必须一致",
          type: "warning"
        });
        this.numberValidateForm.secondPassWord = "";
        return;
      }
      this.$store.commit("addUser", this.numberValidateForm.account);
      this.$store.commit("addPswd", this.numberValidateForm.passWord);
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style lang="less">
.el-input-group__append {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  width: 110px;
  padding: 0;
}
</style>
<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/login-bg2.jpg);
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
