<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column property="name" label="姓名" width="120"></el-table-column>
      <el-table-column property="age" label="年龄"> </el-table-column>
      <el-table-column property="gender" label="性别"> </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
    data() {
      return {
        tableData: [],
        currentRow: null
      }
    },
    created:function()
    {
        //组件被创建触发
        this.$http.get("/users/userInfo").then(response=>
        {
            console.log(response.data);
            this.tableData = response.data;
        })
    },
    mounted()
    {
            //组件被挂载时触发(渲染)
            console.log("222");
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
};
</script>