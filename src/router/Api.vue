<template>

</template>

<script>
  // 接口地址
  const baseUrl = 'http://47.95.12.168/API';

  // 接口路径
  const APILIST = {
    allArticle: '/find_All_Article.php?page=',
    newArticle: '/find_Hot_Article.php',
    useArticle: '/find_Use_Article.php?id=',
    addArticle: '/add_Article.php',
    allCountArticle: '/find_All_CountArticle.php',
    allLabel: '/find_All_Label.php',
  };

  // 地址拼接
  const base = function() {
    let api = {};
    for (let k in APILIST){
      api[k] = baseUrl + APILIST[k];
    }
    return api;
  };
  
  // 暴露
  export default {
    INTERFACES: base()
  }
</script>

<style>

</style>
