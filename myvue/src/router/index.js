import Vue from 'vue';
import Router from 'vue-router';

import login from '../components/Login/login.vue';
import home from '../components/Home/home.vue';

import editerArticle from '../components/Home/list/EditerArticle.vue';
import addArticle from '../components/Home/list/AddArticle.vue';
import listArticle from '../components/Home/list/ListArticle.vue';

import addOneList from '../components/Home/list/AddOneList.vue';
import addTwoList from '../components/Home/list/AddTwoList.vue';
import allList from '../components/Home/list/AllList.vue';

import editerPort from '../components/Home/list/EditerPort.vue';
import backPort from '../components/Home/list/BackPort.vue';
import addPort from '../components/Home/list/AddPort.vue';
import proPort from '../components/Home/list/ProPort.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'editerArticle',
          name: 'editerArticle',
          component: editerArticle
        },
        {
          path: 'addArticle',
          name: 'addArticle',
          component: addArticle
        },
         {
          path: 'listArticle',
          name: 'listArticle',
          component: listArticle
        },

        {
          path: 'addOneList',
          name: 'addOneList',
          component: addOneList
        },
        {
          path: 'addTwoList',
          name: 'bddTwoList',
          component: addTwoList
        },
        {
          path: 'allList',
          name: 'bllList',
          component: allList
        },
        {
          path: 'backPort',
          name: 'backPort',
          component: backPort
        },
        {
          path: 'editerPort',
          name: 'editerPort',
          component: editerPort
        },
        {
          path: 'addPort',
          name: 'AddPort',
          component: addPort
        },
        {
          path: 'proPort',
          name: 'ProPort',
          component: proPort
        }
      ]
    },
  ]
})
