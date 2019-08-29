<template>
  <div class="public">
    <el-container>
      <el-header>
        <div class="header">
          <span class="logo">
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
          </span>
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
              注销
            </span>
          </div>
        </div>
      </el-header>

      <el-container>
        <el-aside :style="!isCollapse ? 'width:200px;transition: width 0.3s;':'width:65px;transition: width 0.3s;'">
          <div class="menu">

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
          </div>
        </el-aside>
        <el-main>
          <router-view :class="isCollapse==true ? 'router active':'router'" />
        </el-main>
      </el-container>
    </el-container>

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
    handleOpen(key, keyPath) {},
    logout() {
      this.dialogVisible = true;
      this.$confirm("是否要登出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch(() => {});
    },
    handleClose(done) {
      done();
    }
  }
};
</script>

<style scoped lang='less'>
.public {
  .el-aside {
    z-index: 2;
  }
  height: 100%;
  .router {
    width: 100%;
    float: right;
    transition: width 0.3s;
  }
  .router.active {
    width: 100%;
    transition: width 0.3s;
  }
  .menu {
    height: 100%;
    position: fixed;

    .el-menu--collapse {
      min-height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      height: 100%;
      float: left;
      .icon-chart {
        margin-right: 10px;
      }
    }
  }
  .logo {
    display: inline-block;
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
  .header {
    position: fixed;
    right: 0;
    z-index: 2;
    height: 60px;
    width: 100%;
    background: #fff;
    vertical-align: middle;
    border-bottom: #e5e7e9 1px solid;
    transition: width 0.3s;
    .hamburger {
      display: inline-block;
      width: 50px;
      position: absolute;
      height: 100%;
      line-height: 60px;
      text-align: center;
    }
    .hamburger.active {
      transform: rotate(90deg);
    }
    .fr {
      margin-right: 20px;
      height: 100%;
      .name {
        display: inline-block;
        height: 100%;
        color: #409eff;
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
