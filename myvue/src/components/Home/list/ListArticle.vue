<template>
    <div class="table">
        <el-table :data="tableData" style="width: 700px">
            <el-table-column prop="title" label="标题" style="width: 200px"></el-table-column>
            <el-table-column prop="name" label="作者"></el-table-column>
            <el-table-column prop="date" label="时间"></el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" style="border:1px solid #ccc;width:60px;color:#666">编辑</el-button>
                    <el-button type="text" size="small" style="background:red;color:#fff;width:60px" @click="dialogVisible = true">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="ArtAlert">
            <el-dialog title="提示" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
                <span>确认删除此列表？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.currentPage4" :page-sizes="[10, 20, 30, 40,50,60,70,80,90,100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="100"></el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name:'listArticle',
        methods: {
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            }
        },
        data() {
            return {
                dialogVisible: false,
                tableData: [
                   {
                        title:'我耳',
                        name: '王小虎',
                        date: '2016-05-03',
                        btn: '删除'
                    }, 
                    {
                        title:'我耳朵',
                        name: '王小虎',
                        date: '2016-05-03'
                    }, 
                    {
                        title:'我耳朵',
                        name: '王小虎',
                        date: '2016-05-03'
                    }, 
                    {
                        title:'我耳朵',
                        name: '王小虎',
                        date: '2016-05-03'
                    }
                ],
                pages:[
                    {
                        currentPage1: 5,
                        currentPage2: 5,
                        currentPage3: 5,
                        currentPage4: 4
                    }
                ]
            }
        }
    }
</script>

<style>
    .block{
        margin:40px 20px;
    }
</style>