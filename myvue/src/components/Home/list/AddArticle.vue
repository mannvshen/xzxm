<template>
  <div class="addArt">
    <h2>增加文章</h2>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	    <el-form-item label="文章标题" prop="region">
	    	<el-input v-model="ruleForm.title" style="width:600px;"></el-input>
	  	</el-form-item>
			<el-form-item label="一级类名" prop="region1">
					<el-select v-model="ruleForm.region1" placeholder="请选择一级类名">
						<el-option label="上海" value="shanghai"></el-option>
						<el-option label="北京" value="beijing"></el-option>
					</el-select>
			</el-form-item>
			<el-form-item label="二级类名" prop="region2">
					<el-select v-model="ruleForm.region2" placeholder="请选择二级类名">
						<el-option label="上海" value="shanghai"></el-option>
						<el-option label="北京" value="beijing"></el-option>
					</el-select>
			</el-form-item>
			<el-form-item label="是否显示" prop="resource1">
				<el-radio-group v-model="ruleForm.resource1">
					<el-radio label="是"></el-radio>
					<el-radio label="否"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="是否推荐" prop="resource2">
				<el-radio-group v-model="ruleForm.resource2">
					<el-radio label="是"></el-radio>
					<el-radio label="否"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="作者" prop="region">
				<el-input v-model="ruleForm.name" style="width:600px;"></el-input>
			</el-form-item>
			<el-form-item label="导读" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc" style="width:600px;"></el-input>
			</el-form-item>
			<el-form-item label="时间" required>
				<el-col :span="8">
					<el-form-item prop="date1">
						<el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择日期时间" style="width:100%"></el-date-picker>
					</el-form-item>
				</el-col>
			</el-form-item>
			<el-form-item label="缩略图">
				<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-form-item>
			<el-form-item label="内容" prop="desc">
				<el-input type="textarea" v-model="ruleForm.cont" style="width:600px;"></el-input>
			</el-form-item>
			<div class="btn">
        <el-button type="text" size="small" style="width:60px;color:#fff;background:#409FFF">提交</el-button>
        <el-button type="text" size="small" style="width:60px;border:1px solid #ccc;color:#666">重置</el-button>
      </div>
		</el-form>
  </div>
</template>

<script>
	export default {
	  name:'addArticle',
		data() {
			return {
				ruleForm: {
					name: '',
					region1: '',
					region2: '',
					date: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
					cont: ''
				},
				rules: {
					name: [
						{ required: true, message: '请输入文章标题', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					region1: [
						{ required: true, message: '请选择文章类名', trigger: 'change' }
					],
					region2: [
						{ required: true, message: '请选择文章类名', trigger: 'change' }
					],
					date1: [
						{ type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
					],
					resource1: [
						{ required: true, message: '是否显示', trigger: 'change' }
					],
					resource2: [
						{ required: true, message: '是否推荐', trigger: 'change' }
					]
				}
			};
		}
	}
</script>
<style>
	.addArt h2{
		line-height: 40px;
		text-indent: 40px;
		font-size:16px;
	}
	.addArt{
		border-left:1px solid #ccc;
	}
	.btn{
     margin:40px 120px;
  }
</style>