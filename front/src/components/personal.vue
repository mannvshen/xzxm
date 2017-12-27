<template>
    <div id="personal">
        <div class="tit"><h1>个人博客</h1><span v-for="(v, k) in list" :key="k">{{v.onedata.cnname}}</span></div>
        <p>首页</p>
        <div class="box">
            <div class="left">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="tit"
                    label="tit"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="classify"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="classify"
                    width="180">
                    </el-table-column>
                </el-table> 
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
import axios from 'axios';
  export default {
    data() {
      return {
        tableData: [{
          date: '2017-10-10',
          name: '八维',
          address: '张小三',
          tit:'音乐课'
        }, {
          date: '2017-10-11',
          name: '教育',
          address: '李小四',
          tit:'体育课'
        }, {
          date: '2017-10-12',
          name: '技术',
          address: '王小五',
          tit:'美术课'
        }, {
          date: '2017-10-13',
          name: '主管',
          address: '赵小六',
          tit:'礼仪课'
        }],
        input: '',
        list: ''
      }
    },
    created(){
        fetch('api/backArticle/getNav').then((data) => {
            return data.json()
        }).then((data) => {
            // this.list = data.data[0].onedata.cnname;
            this.list = data.data;
        });
        // fetch('api/backArticle/getArticleAll').then((data) => {
        //     return data.json()
        // }).then((data) => {
        //     console.log(data);
        // })
        axios({
            url: 'api/backArticle/getClassTwo',
            method: 'POST'
        }).then((data) => {
            console.log(data);
        })
    }
  }
</script>
<style>
    #personal{
        width:100%;
    }
    .tit {
        width:100%;
        background: yellow;
        display: flex;
    }
    .tit h1 {
        height: 4rem;
        line-height: 4rem;
        text-indent: 1rem;
        color:#666;
        font-size: 1.5rem;
    }
    .tit span{
        line-height: 4rem;
        margin-left:2rem;
    }
    p {
        width:100%;
        line-height: 3rem;
        font-size: 1.4rem;
        color:#666;
        text-indent: 1rem;
        background: #FFFFE1;
    }
    .box {
        width:100%;
        display: flex;
        background: #FFFFE1;
    }
    .left {
        width:70%;
        margin-right:2rem;
    }
    .left .block {
        margin:5rem 23rem;;
    }
    .right{
        width:30%;
        margin-right:1rem;
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

