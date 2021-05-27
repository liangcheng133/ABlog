<template>
  
</template>

<script>
  const baseUrl = 'http://localhost/API';

  const APILIST = {
    allArticle: '/find_All_Article.php',
    newArticle: '/find_Hot_Article.php',
    useArticle: '/find_Use_Article.php?id=',
    addArticle: '/add_Article.php',
  };

  const base = function() {
    let api = {};
    for (let k in APILIST){
      api[k] = baseUrl + APILIST[k];
    }
    return api;
  };

  export default {
    INTERFACES: base()
  }
</script>

<style>

</style>