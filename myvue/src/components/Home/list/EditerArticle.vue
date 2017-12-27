<template>
    <div>
        <h1>修改文章</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="活动时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期事件" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>

            <el-form-item label="是否显示">
                <el-radio-group v-model="form.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="是否推荐">
                <el-radio-group v-model="form.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="作者">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="导读">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>