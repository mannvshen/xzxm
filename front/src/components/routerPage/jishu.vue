<template>
  <section>
      <div class="jishu">
        <h1>Welcome to the technology page!</h1>
          <div class="container">
            <div class="jishuBox">
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
              <el-radio-button label="top">top</el-radio-button>
              <el-radio-button label="right">right</el-radio-button>
              <el-radio-button label="bottom">bottom</el-radio-button>
              <el-radio-button label="left">left</el-radio-button>
            </el-radio-group>
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
              <el-tab-pane label="张小三">张小三</el-tab-pane>
              <el-tab-pane label="李小四">李小四</el-tab-pane>
              <el-tab-pane label="王小五">王小五</el-tab-pane>
              <el-tab-pane label="赵小六">赵小六</el-tab-pane>
            </el-tabs>
          </div>
          <div class="pic">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kB</div>
            </el-upload>
          </div>
          </div>
          <div class="blockBox">
            <div class="block">
              <span class="demonstration">默认不区分颜色</span>
              <el-rate v-model="value1"></el-rate>
            </div>
            <div class="block">
              <span class="demonstration">区分颜色</span>
              <el-rate
                v-model="value2"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
              </el-rate>
            </div>
          </div>
          <p>作者：大倩  访问量：999+  时间：20147-12-12 05:20</p>
      </div>
  </section>
</template>
<script>
export default {
    name:'jishu',
    data() {
      return {
        tabPosition: 'top',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        value1: null,
        value2: null
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>

<style>
  section{
    flex:1;
  }
  .jishu{
    width:100%;
    height:48rem;
    background: rgb(247, 222, 222);
  }
  .jishu h1 {
    text-align: center;
    padding-top:2rem;
    color:#666;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .container .jishuBox {
    width:50%;
    padding-left:5rem;
    padding-top:5rem;
  }
  .container .pic {
    padding-top:5rem;
    padding-right:10rem;
  }
  .jishu p {
    float:right;
    margin-top:2rem;
    font-size: 1.4rem;
    color:#666;
    margin-right:2rem;
    margin-top:8rem;
  }
  .blockBox {
    padding-top:3rem;
    padding-left:5rem;
    display: flex;
  }
  .blockBox .block {
    margin-right:5rem;
  }
</style>