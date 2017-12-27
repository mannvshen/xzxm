<template>
    <div id='app'>
        <personal></personal>
    </div>
</template>

<script>
import Personal from './components/personal'
export default {
  name: "app",
  components: {
    Personal
  }
};
</script>
<style>
  @charset 'UTF-8';
  *{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    box-sizing:border-box;
  }
  html,body,.wrap,#app{
    width:100%;
    height:100%;
    overflow:hidden;
  }
  html,body{
    -webkit-user-select:none;
    user-select:none;
    font-size:62.5%;
    font-family:'微软雅黑';
  }
  
  
  /*网页的全局样式 解决兼容问题*/
  body,div,p,ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,table,tr,td,form,input,select,textarea,span,img,a,em,strong,*{ margin:0; padding:0;}
  body{ font-family:'宋体'; font-size:12px; color:#000000;}
  ul,ol,li{ list-style:none;}
  h1,h2,h3,h4,h5,h6{ font-size:14px;}
  input,select,textarea{ vertical-align:middle;}
  img{ border:none; vertical-align:middle;}
  a{ text-decoration:none; color:#333333;}
  a:hover{ color:#009999;}
  .clear{ clear:both; height:0px; width:0px; overflow:hidden;}
  body,html{ width:100%;}
</style>
