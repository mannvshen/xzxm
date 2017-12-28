<template>
    <div class="addOne">
        <div class="addOne-one">
            <h1>一级分类列表</h1>
            <el-form label-width="120px">
                <el-form-item label="一级中文类名">
                    <el-input style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="一级英文标识">
                    <el-input style="width:200px;"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="addOne-two">
            <h1>二级分类列表</h1>
            <el-form label-width="120px">
                <el-form-item label="二级中文类名">
                    <el-input style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="二级英文标识">
                    <el-input style="width:200px;"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="btn">
            <el-button type="text" size="small" style="width:60px;color:#fff;background:#409FFF">提交</el-button>
            <el-button type="text" size="small" style="width:60px;border:1px solid #ccc;color:#666">重置</el-button>
        </div>
    </div>
</template>

<script>
    export default {
		name:'addOneList' 
    }
</script>

<style>
    .addOne h1{
        font-size:20px;
        text-indent:40px;
        line-height:60px;
    }
    .btn{
        margin:40px 120px;
    }
</style>