<template>
  <div class="public">
    <div :class="isCollapse==true ? 'header active':'header'">

      <span
        :class="isCollapse==true ? 'hamburger active':'hamburger'"
        @click="isCollapse =!isCollapse"
      >
        <i class="iconfont icon-hamburger"></i>
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
    <div class="menu">
      <div :class=" isCollapse==true ? 'logo active':'logo'">
        <img
          v-if="!isCollapse"
          src="../assets/logo.jpg"
          alt=""
        >
        <span
          class="title"
          v-if="!isCollapse"
          @click="$router.push({path:'/home'})"
        >
          VUE-DRILL
        </span>
        <span
          class="title"
          v-else
          @click="$router.push({path:'/home'})"
        >
          D
        </span>
      </div>
      <el-menu
        :default-active='$route.path'
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
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
      <!-- <el-menu
        
       
        router
        :collapse='true'
        mode='vertical'
        @open="handleOpen"
        @close="handleClose"
      >
      
      </el-menu> -->
    </div>

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
    <router-view :class="isCollapse==true ? 'router active':'router'" />
  </div>
</template>

<script>
export default {
  name: "Public",
  data() {
    return {
      activeIndex: "1",
      dialogVisible: false,
      isCollapse: false,
      uesrName: ""
    };
  },
  created() {
    if (this.$util.getCookie("user") && this.$util.getCookie("pswd")) {
      this.uesrName = this.$util.getCookie("user");
    } else {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
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
    margin: 61px 0 0 231px;
    width: calc(100% - 271px);
    min-height: calc(100% - 105px);
    padding: 20px;
    float: right;
    transition: width 0.3s;
  }
  .router.active {
    width: calc(100% - 105px);
    transition: width 0.3s;
  }
  .menu {
    height: 100%;
    position: fixed;
    .logo {
      width: 230px;
      height: 60px;
      background: #fff;
      border-bottom: #e5e7e9 1px solid;
      transition: width 0.3s;
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
    }
    .logo.active {
      width: 65px;
      transition: width 0.3s;
      .title {
        margin-left: 24px;
        font-size: 40px;
      }
    }
    .el-menu--collapse {
      min-height: calc(100% - 61px);
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 230px;
      min-height: calc(100% - 61px);
      float: left;
      .icon-chart {
        margin-right: 10px;
      }
    }
  }

  .header {
    position: fixed;
    right: 0;
    z-index: 2;
    height: 60px;
    width: calc(100% - 231px);
    background: #fff;
    vertical-align: middle;
    border-bottom: #e5e7e9 1px solid;
    transition: width 0.3s;
    .hamburger {
      display: inline-block;
      width: 50px;
      height: 100%;
      line-height: 60px;
      text-align: center;
    }
    .hamburger.active {
      transform: rotate(90deg);
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
  .header.active {
    width: calc(100% - 65px);
    transition: width 0.3s;
  }
}
</style>
