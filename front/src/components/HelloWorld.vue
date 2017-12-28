<template>
  <div class="wrap">
      <my-header></my-header>
      <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './header/header';
// import mySection from './section/section';
export default {
    name:'HelloWorld',
    components:{
        myHeader
        // mySection
    }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
