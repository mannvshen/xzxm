<template>
    <div id="personal">
        <div class="box">
            <div class="left">
                <div class="tab">
                    <table>
                        <tr class="th">
                            <td>标题</td>
                            <td>分类</td>
                            <td>作者</td>
                            <td>发布时间</td>
                        </tr>
                        <tr v-for="(v, k) in tabdata" :key="k">
                            <td>{{v.editer}}</td>
                            <td>{{v.cnname_one}}</td>
                            <td>{{v.article_name}}</td>
                            <td>{{v.time}}</td>
                        </tr>
                    </table>
                </div>
                <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </div>
            <div class="right">
                <button class="btn">全部搜索</button>
                <div class="sousuo">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                    <button>搜索</button>
                </div>
                <div class="paihang">
                    <button class="btn">点击排行</button>
                    <ul class="list">
                        <li>
                            <span>1</span>
                            <span>王小五</span>
                            <span>★</span>
                            <span>12</span>
                        </li>
                        <li>
                            <span>1</span>
                            <span>王小五</span>
                            <span>★</span>
                            <span>10</span>
                        </li>
                        <li>
                            <span>1</span>
                            <span>王小五</span>
                            <span>★</span>
                            <span>15</span>
                        </li>
                    </ul>
                </div>
                <div class="article">
                    <button class="btn">最新文章</button>
                    <ul class="list">
                        <li>
                            <span>1</span>
                            <span>赵小六</span>
                            <span>2017-10-11</span>
                        </li>
                        <li>
                            <span>1</span>
                            <span>赵小六</span>
                            <span>2017-12-15</span>
                        </li>
                        <li>
                            <span>1</span>
                            <span>赵小六</span>
                            <span>2017-12-12</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data/titRouter';
import axios from 'axios';
  export default {
    name:'shouye',
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    data() {
      return {
          data,
        tableData4: [{
        city: '音乐课',
        name: '张小三',
        province: '八维',
        date: '2017-12-03'
        }, {
        date: '2017-12-02',
        name: '李小四',
        province: '技术',
        city: '美术课'
        }, {
        date: '2017-12-04',
        name: '王小五',
        province: '总监',
        city: '体育课'
        }, {
        date: '2017-12-01',
        name: '赵小六',
        province: '传媒',
        city: '瑜伽课'
        }, {
        date: '2017-12-08',
        name: '黑小七',
        province: '云计算',
        city: '音乐课'
        }, {
        date: '2017-12-06',
        name: '刘小虎',
        province: '网站',
        city: '音乐课'
        }, {
        date: '2017-12-07',
        name: '王小虎',
        province: '网络',
        city: '音乐课'
        }],
        input: '',
        tabdata: ''
      }
    },
    created () {
        axios.get('api/backArticle/getArticleAll').then((data) => {
            this.tabdata = data.data.data;
            console.log(this.tabdata);
        });
        axios.get('api/backArticle/getNav').then((data) => {
            // this.tabdata = data.data.data;
            // console.log(this.tabdata);
            console.log(data.data.data);
        })
    }
  }
</script>
<style>
    #personal{
        width:100%;
        overflow-y: scroll;
    }
    .box {
        width:100%;
        display: flex;
        background: #FFFFE1;
    }
    .left {
        width:70%;
        margin-right:2rem;
        margin-top:2rem;
        margin-left:2rem;
    }
    .left .block {
        margin:5rem 23rem;;
    }
    .left .tab{
        width:80%;
        margin:1rem;
        background: pink;
    }
    .left .tab table{
        width: 100%;
        text-align: center;
        line-height: 3rem;
        border-collapse: collapse;
    }
    .left .tab table .th{
        background: skyblue;
        font-size: 16px;
        font-weight: 800;
    }
    .left .tab table tr{
        margin-top: 10px;
    }
    .del {
        height:1rem;
        line-height:1rem;
    }
    el-table-column{
        height:2rem;
    }
    .cell {
        text-align: center;
    }
    .right{
        width:30%;
        margin-right:2rem;
        margin-top:3rem;
    }
    .right .btn{
        width:100%;
        height: 2rem;
        background:#FFCCCC;
        color: #fff;
        text-align: center;
        line-height: 2rem;
        border-radius: 1rem;
        border:none;
        margin-bottom:1rem;
    }
    .right .sousuo {
        width:100%;
        display: flex;
        margin-top:1rem;
        margin-bottom: 1rem;
    }
    .right .sousuo button{
        width:5rem;
        height:3rme;
        margin-left:1rem;
        border:none;
        background: #FFCCCC;
        color:#fff;
        line-height: 3rem;
        text-align: center;
        border-radius: .5rem;
    }
    .paihang {
        width:100%;
    }
    .list {
        width:100%;
        background: #FFF7B5;
        margin-bottom: 1rem;
    }
    .list li {
        width:100%;
        display: flex;
        color:#666;
        font-size: 1.3rem;
        line-height: 3rem;
    }
    .list li span {
        display: block;
    }
    .list li span:nth-child(1) {
        width:1.5rem;
        height:1.5rem;
        line-height: 1.5rem;
        background: blue;
        color:#fff;
        text-align: center;
        margin-top:.7rem;
        margin-right:1rem;
        margin-left:1rem;
    }
    .list li span:nth-child(2) {
        margin-right:55%;
    }
    .list li span:nth-child(3) {
        margin-right:2rem;
    }
</style>

