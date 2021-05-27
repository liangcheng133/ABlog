<template>
  <div class="ab_head">
    <div class="ab_logo"><a href="/">ALiangのBlog</a></div>
    <ul>
      <li :class="isShow == 'home' ? 'ab_head_active' : ''"><a href="/">首页</a></li>
      <li :class="isShow == 'grouping' ? 'ab_head_active' : ''"><a href="/grouping">分类</a></li>
      <li><a href="javascript:;">关于</a></li>
      <li><a href="javascript:;">归档</a></li>
      <li><a href="javascript:;">杂谈</a></li>
    </ul>
    <div class="ab_search">
      <form action="">
        <input type="text">
        <button type="submit"></button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: 'home',
      }
    },
    created () {
      if(this.$route.path != null){
        let path = this.$route.path.slice(1);
        if(path != 'home' && path != 'grouping'){
          this.isShow = 'home';
        }else{
          this.isShow = path;
        }
      }else{
        this.isShow = 'home';
      }
    }
  }
</script>

<style scoped>

</style>