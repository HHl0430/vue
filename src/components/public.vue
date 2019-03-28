<template>
  <div class="public">
    <div class="header">
      <img
        src="../assets/logo.jpg"
        alt=""
      >
      <span
        class="title"
        @click="$router.push({path:'/home'})"
      >
        VUE-DRILL
      </span>
      <div class="fr">
        <i class="iconfont icon-icon-"></i>
        <span class="name">
          {{uesrName}}
        </span>
        <img
          class="portrait"
          src="../assets/portrait.jpg"
          alt=""
        >
        <span
          class="logout"
          @click="logout"
        >
          <i class="iconfont icon-zhuxiao"></i>
          LOGOUT
        </span>
      </div>

    </div>
    <el-menu
      :default-active='$route.path'
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/map">
        <i class="el-icon-location"></i>
        <span slot="title">地图</span>
      </el-menu-item>
      <el-menu-item index="/chart">
        <i class="iconfont icon-chart"></i>
        <span slot="title">图表</span>
      </el-menu-item>
    </el-menu>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>是否注销</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click=" $router.push({path:'/login'})"
        >确 定</el-button>
      </span>
    </el-dialog>
    <router-view class="router" />
  </div>
</template>

<script>
export default {
  name: "Public",
  data() {
    return {
      activeIndex: "1",
      dialogVisible: false,
      uesrName: ""
    };
  },
  created() {
    if (this.getCookie("user") && this.getCookie("pswd")) {
      this.uesrName = this.getCookie("user");
    } else {
      console.log(111);
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    getCookie(name) {
      var reg = RegExp(name + "=([^;]+)");
      var arr = document.cookie.match(reg);
      if (arr) {
        return arr[1];
      } else {
        return "";
      }
    },
    setCookie(name, value, day) {
      var date = new Date();
      date.setDate(date.getDate() + day);
      document.cookie = name + "=" + value + ";expires=" + date;
    },
    delCookie(name) {
      this.setCookie(name, null, -1);
    },
    logout() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    }
  }
};
</script>

<style scoped lang='less'>
.public {
  height: 100%;
  .router {
    width: calc(100% - 271px);
    height: calc(100% - 105px);
    padding: 20px;
    float: right;
  }
  .el-menu-vertical-demo {
    width: 230px;
    height: calc(100% - 61px);
    float: left;
    .icon-chart {
      margin-right: 10px;
    }
  }
  .header {
    height: 60px;
    width: 100%;
    background: #fff;
    vertical-align: middle;
    border-bottom: #e5e7e9 1px solid;
    img {
      width: 160px;
      height: 60px;
      margin-left: -25px;
    }
    .title {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      line-height: 60px;
      font-weight: 700;
      font-size: 18px;
      color: #409eff;
      margin-left: -40px;
      cursor: pointer;
    }
    .fr {
      margin-right: 20px;
      .name {
        display: inline-block;
        height: 100%;
        color: #409eff;
        // vertical-align: middle;
        font-size: 14px;
        line-height: 60px;
      }
      .portrait {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        // padding-top: 10px;
        position: relative;
        top: 10px;
        margin-left: 10px;
      }
      .logout {
        margin-left: 10px;
        color: #828282;
        font-size: 14px;
        cursor: pointer;
        i {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
