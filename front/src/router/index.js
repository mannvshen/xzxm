import Vue from 'vue'
import Router from 'vue-router'

import shouye from '../components/routerPage/shouye.vue';
import jishu from '../components/routerPage/jishu.vue';
import qianduan from '../components/routerPage/qianduan.vue';

Vue.use(Router)

export default new Router({
  routes: [
      { path:'/',redirect:'shouye' },
      { path:'/shouye',component:shouye },
      { path:'/jishu',component:jishu },
      { path:'/qianduan',component:qianduan }
  ]
})
