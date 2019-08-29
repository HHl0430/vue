<template>
  <div class="home">
    <div class="operation">
      <el-button
        type="primary"
        icon="el-icon-edit"
        size="mini"
        @click="add"
      >添加</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="上传日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="上传姓名"
      >
      </el-table-column>
      <el-table-column
        prop="content"
        label="简介"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
        <template slot-scope="scope">
          <a
            target="_blank"
            :href="scope.row.address"
          >{{scope.row.addressName}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
      >
        <template slot-scope="scope">
          <a
            href="javaScript:;"
            @click="remove(scope.row.id)"
          > <i class="el-icon-delete"></i></a>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="ADD Info"
      :visible.sync="isAdd"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        label-position="right"
        label-width="80px"
        :model="form"
      >
        <el-form-item label="上传姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="上传姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="地址名称">
          <el-input v-model="form.addressName"></el-input>
        </el-form-item>
        <el-form-item label="地址链接">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cancel">Cancel</el-button>
        <el-button
          type="primary"
          @click="submit"
        >Submit</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCanviwDataboat, general } from "@/seavers/article";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2019-08-15",
          name: "HHl",
          address: "https://www.cnblogs.com/yanxulan/p/8978732.html",
          addressName: "搭建Vue框架",
          content: "学习如何搭建Vue框架",
          id: 0
        },
        {
          date: "2019-08-15",
          name: "HHl",
          address:
            "https://segmentfault.com/a/1190000018225708?utm_source=tag-newest",
          addressName: "2019面试题",
          content: "2019Vue前端面试题",
          id: 1
        },
        {
          date: "2019-08-15",
          name: "HHl",
          address:
            "https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html",
          addressName: "TypeScript",
          content: "TypeScript学习官网",
          id: 2
        }
      ],
      isAdd: false,
      form: {
        name: "",
        address: "",
        addressName: "",
        content: ""
      }
    };
  },
  created() {
    // general().then(res => {
    //   console.log(res);
    // });
    // getCanviwDataboat().then(res => {});
  },
  methods: {
    add() {
      this.isAdd = true;
    },
    handleClose(done) {
      done();
    },
    cancel() {
      this.form = {
        name: "",
        address: "",
        addressName: "",
        content: ""
      };
      this.isAdd = false;
    },
    submit() {
      this.isAdd = false;
      this.tableData.push(this.form);
    },
    remove(id) {
      this.tableData = this.tableData.filter(item => {
        return item.id != id;
      });
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
  .operation {
    margin-bottom: 10px;
  }
}
</style>
