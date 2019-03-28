<template>
  <div class="home">
    <div class=" form-box">
      <el-row :gutter="20">
        <el-col :span='21'>
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
          >
            <el-form-item
              label="审批人"
              size='small '
            >
              <el-input
                v-model="formInline.user"
                placeholder="审批人"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span='3'>
          <el-button
            size='small '
            type="primary"
            @click="onSubmit"
          >查询</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- {{$store.state.show === true ? '1':'2'}} -->
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    this.$get("web/account.youzan.com/settings/general").then(res => {
      console.log(res)
    });
    //  console.log(11)
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(22);
    }
  }
};
</script>
<style lang="less">
.el-pagination.is-background .el-pager li {
  background-color: #fff;
}
</style>
<style scoped lang='less'>
.home {
  .form-box {
    box-shadow: 1px 1px 5px #d3cfcf;
    padding: 10px 20px;
    background: #fff;
    margin-bottom: 30px;
    .el-form-item--small.el-form-item,
    .el-form-item {
      margin-bottom: 0px;
    }
    .el-form-item__content {
      line-height: 0;
    }
  }
  .el-pagination {
    text-align: center;
    margin-top: 10px;
  }
}
</style>
