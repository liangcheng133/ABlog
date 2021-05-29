<template>
  <div id='app'>
    <div class="ab_center">
      <div class="ab_box">

        <bloghead></bloghead>

        <router-view v-wechat-title="$route.meta.title"></router-view>

        <blogcopy></blogcopy>

      </div>
    </div>
    <div class="sidebar">
      <ul>
        <li><a class="login" href="javascript:;" title="登录"></a></li>
        <li><a class="author" href="javascript:;" title="作者联系方式"></a></li>
        <li><a class="backTop" href="javascript:;" @click="backTop" title="返回顶部"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'App',
    data() {
      return {

      }
    },
    methods: {
      backTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
      }
    },
  }
</script>

<style>
  @import '../static/css/app.css';
  [v-cloak]{
    display: none;
  }
  .sidebar{
    position: fixed;
    bottom: 10%;
    right: 0;
    margin-right: 100px;
  }
  .sidebar ul li{
    display: block;
    border: 1px solid #ccc;
    background-color: #fff;
    transition: all 0.2s;
  }
  .sidebar ul li:hover{
    background-color: #ccc;
  }
  .sidebar ul li:first-child{
    border-radius: 10px 10px 0 0;
  }
  .sidebar ul li:last-child{
    border-radius: 0 0 10px 10px;
  }
  .sidebar ul li a{
    display: block;
    width: 30px;
    height: 30px;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50%;
    padding: 10px;
  }
  .sidebar ul li a:hover{
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .login{
    background: url('../static/img/login.png');
  }
  .login:hover{
    background: url('../static/img/login_select.png');
  }
  .author{
    background: url('../static/img/code.png');
  }
  .author:hover{
    background: url('../static/img/code_select.png');
  }
  .backTop{
    background: url('../static/img/backTop.png');
  }
  .backTop:hover{
    background: url('../static/img/backTop_select.png');
  }

</style>
