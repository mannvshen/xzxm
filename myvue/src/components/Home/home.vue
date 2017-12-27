<template>
    <div class="wrap">
        <header class="header">
           <div> 个人博客</div>
            <main>
                <span>当前登录账户 : host</span>
            </main>
        </header>
        <div class="main">
            <div class="cont_list">
                <el-row class="tac">
                    <el-col :span="4">
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <el-submenu index="1">
                            <router-link to="/home/editerArticle">
                                <template slot="title">
                                    <i class="el-icon-menu"></i><span>文章管理</span>
                                </template>
                            </router-link>
                            <template slot="title">
                                <i class="el-icon-menu"></i><span>文章管理</span>
                            </template>
                            <el-menu-item-group>
                                <router-link to="/home/addArticle">
                                    <el-menu-item index="1-1">添加文章</el-menu-item>
                                </router-link>
                                <router-link to="/home/listArticle">
                                    <el-menu-item index="1-2">文章列表</el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span>分类管理</span>
                            </template>
                            <el-menu-item-group>
                                <router-link to="/home/addOneList">
                                    <el-menu-item index="2-1">增加一级分类</el-menu-item>
                                </router-link>
                                 <router-link to="/home/addTwoList">
                                    <el-menu-item index="2-2">增加二级分类</el-menu-item>
                                </router-link>
                                 <router-link to="/home/allList">
                                    <el-menu-item index="2-3">分类列表</el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </el-submenu>
                         <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span>接口管理</span>
                            </template>
                            <el-menu-item-group>
                                <router-link to="/home/addPort">
                                    <el-menu-item index="3-1">增加接口文档</el-menu-item>
                                </router-link>
                                <router-link to="/home/proPort">
                                    <el-menu-item index="3-2">前台接口列表</el-menu-item>
                                </router-link>
                                <router-link to="/home/backPort">
                                    <el-menu-item index="3-3">后台接口列表</el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="8">
                        <router-view></router-view>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        methods: {
            handleOpen () {

            },
            handleClose() {

            }
        }
    }
</script>

<style>
    .header{
        width:100%;
        height:56px;
        background:#5E9FA1;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#fff;
        font-size:18px;
    }
    .header div{
        margin-left:10px;
    }
    .header main{
        margin-right:10px;
    }
    .main{
        width:100%;
        overflow:auto;   
    }
</style>
