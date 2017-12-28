<template>
    <div class="wrap">
        <div class="login_box">
            <h1>个人博客:</h1>
            <p> 
                <label for="user">账号 : </label>
                <input type="text" placeholder="请输入用户名" id="user" required>
            </p>
            <p>
                <label for="pwd">密码 : </label>
                <input type="password" placeholder="请输入密码" id="pwd" required>
            </p>
            <button><router-link to="/home">登录</router-link></button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'login',
        methods:{
          
        }
    }
</script>
<style scoped>
    .wrap{
        width:100%;
        height:100%;
        position:relative;
    }
    .login_box{
        position:absolute;
        margin:auto;
        left:0;
        right:0;
        top:0;
        bottom:0;
    }
    .login_box{
        width:320px;
        height:320px;
        border:1px solid #EF5A00;
    }
    .login_box h1{
        text-indent:2rem;
        color:#EF5A00;
        line-height:70px;
        font-size:20px;
    }
    .login_box p{
        width:240px;
        height:35px;
        margin-top:20px;
        border:1px solid #ccc;
        margin-left:30px;
        line-height:35px;
        text-indent:1rem;
    }
    .login_box p input{
        background:#FBFFBD;
        border:none;
        outline:none;
        font-size:12px;
    }
    .login_box button{
        width:242px;
        height:37px;
        background:#EF5A00;
        color:#fff;
        border:none;
        margin-top:20px;
        margin-left:30px;
        outline:none;
    }
</style>