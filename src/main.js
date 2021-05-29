// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //在页面中引入vue.js
import App from './App' //引入自定义组件
import router from './router' //引入vue router js
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './router/Api'
import qs from 'qs'
import VueWeChatTitle from 'vue-wechat-title' //路由跳转改变标签 <虽然我感觉它没什么用处>

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueWeChatTitle)

Vue.prototype.$axios = axios
Vue.prototype.api = api
Vue.prototype.qs = qs

/* eslint-disable no-new */
new Vue({ //vue全局实例
  el: '#app', //绑定Vue实例全局作用域
  router, //注册路由对象
  components: { App },  //注册App组件
  template: '<App/>',
})
