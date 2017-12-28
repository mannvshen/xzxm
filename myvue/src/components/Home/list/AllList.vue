<template>
  <el-table :data="tableData5" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form  inline class="demo-table-expand demo">
          <el-table :data="tableData5" style="width: 100%">
            <el-table-column type="expand">
              <template>
                <el-form class="demo-table-expand ">
                  <el-form-item label="中文名称"></el-form-item>
                  <el-form-item label="所属店铺"><span></span></el-form-item>
                  <el-form-item label="操作"><span></span></el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="中文名称" prop="id"> 
            </el-table-column>
            <el-table-column label="英文名称" prop="name"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" style="border:1px solid #ccc;width:60px;color:#666">编辑</el-button>
                <el-button type="text" size="small" style="background:red;color:#fff;width:60px">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="中文名称" prop="id"></el-table-column>
    <el-table-column label="英文名称" prop="name"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" style="border:1px solid #ccc;width:60px;color:#666">编辑</el-button>
        <el-button type="text" size="small" style="background:red;color:#fff;width:60px">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData5: [{
          id: '运维',
          name: 'options'
        }]
      }
    }
  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .demo-table-expand{
      display: flex;
  }
  .demo .el-table__expand-icon i{
    opacity: 0
  }
</style>
  
  