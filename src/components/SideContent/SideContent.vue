<template>
  <div>
    <div class="ablog_newArticle">
      <div class="ablog_newArticleLabel">总点击排行</div>
      <ul v-for="val in articleLabels">
        <li><a :href="'/article?id=' + val.aID" target="_blank" :title="val.aName">{{val.aName | sliceStr(20)}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        articleLabels: '',
      }
    },
    methods: {
      findAll() {
        let _this = this;  //指向vue实例本身，用在axios函数体中访问data数据
        // url = http://localhost/API/findAll.php
        // 后台url http://47.95.12.168/API/findAll.php
        this.axios.get(this.api.INTERFACES.newArticle)
        .then(function(res) {
          _this.articleLabels = res.data.data;
          // console.log(_this.articleLabels);
        }, function(err) {
          console.log(err);
        })
      }
    },
    created() {
      this.findAll();
    },
    filters: {
      sliceStr (str, sliLength){
        // console.log(str + " " + sliLength);
        if(str.length >= sliLength){
          return str.slice(0, sliLength) + "...";
        }else{
          return str;
        }
      }
    }
}
</script>

<style>
  .ablog_newArticle{
    float: left;
    width: 100%;
  }
  .ablog_newArticleLabel{
    font-size: 0.98rem;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  .ablog_newArticleLabel::before{
    content: ' ';
    width: 21px;
    height: 21px;
    display: block;
    float: left;
    background: url(../../../static/img/hot.png);
    background-size: 100%;
  }
  .ablog_newArticle ul li a{
    font-size: 0.9rem;
    display: block;
    width: 100%;
    color: #757575;
    margin: 5px 0;
    padding-left: 5px;
    transition: all 0.3s;
    line-height: 1.5;
  }
  .ablog_newArticle ul li a:hover{
    background-color: #757575;
    color: #fff;
  }
</style>
