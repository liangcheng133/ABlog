import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Grouping from '@/components/Grouping/Grouping'
import BlogHeadComponent from '@/components/BlogHead/BlogHead'
import BlogCopyComponent from '@/components/BlogCopy/BlogCopy'
import Article from '@/components/Article/Article'
import SideContent from '@/components/SideContent/SideContent'
import wangEditor from '@/components/Admin/WangEditor/WangEditor'

Vue.use(Router)

export default new Router({
  mode:'history', //去除url中 # 号
  routes: [
    {
      path: '/',
      redirect: '/home',  //重定向
    },
    {
      path: '/home',  //路由地址
      component: Home,  //路由参数
      comment: resolve => {require(['@/components/Home/Home'], resolve)},
      meta: {title: "AliangのBlog | 首页"}
    },
    {
      path: '/grouping',
      component: Grouping,
      comment: resolve => {require(['@/components/Home/Home'], resolve)},
      meta: {title: "AliangのBlog | 分类"}
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/admin/wangeditor',
      component: wangEditor
    },
  ]
})

// 导航栏
Vue.component('bloghead', BlogHeadComponent);
// 版权信息
Vue.component('blogcopy', BlogCopyComponent);
// 侧边内容
Vue.component('blogsidecontent', SideContent);
