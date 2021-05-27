<template>
  <div class="box">
    <div class="article" v-for="val in articleList.data">
      <h1>{{val.aName}}</h1>
      <div class="information">
        <span>阿凉丶</span>
        <span>{{val.aCreateTime}}</span>
        <span>分类: {{val.labelName}}</span>
      </div>
      <div v-html="val.aContent"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articleList: '',
        labelUrl: '',
      }
    },
    methods: {

    },
    created() {
      // 获取url中的参数
      const query = this.$router.history.current.query.id;
      // console.log(query);
      // console.log(this.api.INTERFACES.useArticle + query);
      // url = http://localhost/API/findArticle.php?id=1
      let _this = this;  //指向vue实例本身，用在axios函数体中使用
      if(query != null && query != ''){
        this.axios.get(this.api.INTERFACES.useArticle + query)
        .then(function(res) {
          _this.articleList = res.data;
          _this.labelUrl = res.data.data[0].labelName;
          // console.log(res);
        }, function(err) {
          console.log(err);
        })
      }else{
        alert("请以安全的方式进行访问哦");
      }
    }
  }

</script>

<style>
  .box{
    width: 100%;
    float: left;
  }
  .childrenNav{
    margin-bottom: 20px;
    font-size: 0.9em;
  }
  .childrenNav::after{
    content: ' ';
    display: block;
    width: 100%;
    border-bottom: 2px solid #ccc;
    padding-bottom: 5px;
  }
  .article{
    float: left;
    width: 100%;
  }
  .article h1{
    margin-bottom: 10px;
  }
  .information{
    margin-bottom: 30px;
    background-color: #F8F8F8;
    padding: 20px;
  }
  .information span{
      margin-right: 10px;
      color: #A5A5A5;
   }
  /* 文章引用样式 */
/*  blockquote{
    border-left: 8px solid #D0E5F2;
    background-color: #F1F1F1;
    display: block;
    padding: 20px 0 20px 10px;
    color: #757575;
  } */

  /* table 样式 */
  table {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  table td,
  table th {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 3px 5px;
  }
  table th {
    border-bottom: 2px solid #ccc;
    text-align: center;
  }

  /* blockquote 样式 */
  blockquote {
    display: block;
    border-left: 8px solid #d0e5f2;
    padding: 10px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 80%;
    background-color: #f1f1f1;
  }

  /* code 样式 */
  code {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 4px 5px;
    margin: 0 3px;
  }
  pre code {
    display: block;
  }

  /* ul ol 样式 */
  ul, ol {
    margin: 10px 0 10px 20px;
  }

</style>
