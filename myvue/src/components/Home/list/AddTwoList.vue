<template>
    <div class="addTwo">
        <div class="addTwo-one">
            <h1>一级分类列表</h1>
             <el-form label-width="120px">
                <el-form-item label="一级中文类名">
                    <el-select v-model="formInline.region" placeholder="请选择">
                        <el-option label="运维" value="shanghai"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <div class="addTwo-two">
            <h1>二级分类列表</h1>
            <el-form label-width="120px">
                <el-form-item label="二级中文类名">
                    <el-input style="width:220px;"></el-input>
                </el-form-item>
                <el-form-item label="二级英文标识">
                    <el-input style="width:220px;"></el-input>
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
		name:'addTwoList',
        data() {
	        return {
                 formInline: {
                    region: ''
                }
	        };
	    }
    }
</script>

<style>
    .addTwo h1{
        font-size:20px;
        text-indent:40px;
        line-height:60px;
    }
    .btn{
        margin:40px 120px;
    }
</style>