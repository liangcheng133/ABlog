<template>
  <div>
    <div class="ab_content">
      <div class="ab_ctLeft">

        <div class="ab_article" v-for="val in articleList">
          <ul>
            <li><a :href="'/article?id=' + val.aID" target="_blank">{{val.aName}}</a></li>
            <li><span>{{val.aPreviewText}}</span></li>
            <li>
              <span id="artTime">{{val.aCreateTime}}</span>
              <span id="artLabel"><a href="####">{{val.labelName}}</a></span>
              <span id="artNumber">{{val.aFlow}}</span>
            </li>
          </ul>
        </div>


      </div>
      <div class="ab_ctRight">
        <blogsidecontent></blogsidecontent>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        articleList: '',
      }
    },
    methods: {
      findAll() {
        let _this = this;  //指向vue实例本身，用在axios函数体中访问data数据
        // url = http://localhost/API/findAll.php
        // 后台url http://47.95.12.168/API/findAll.php
        this.axios.get(this.api.INTERFACES.allArticle)
        .then(function(res) {
          _this.articleList = res.data.data;
          // console.log(_this.articleList);
        }, function(err) {
          console.log(err);
        })
      }
    },
    filters: {

    },
    created() {
      this.findAll();
    }
  }
</script>

<style scoped>
  .ab_content{
    float: left;
    width: 100%;
    margin: 10px 0;
  }
  .ab_ctLeft{
    float: left;
    width: 60%;
    margin-right: 90px;
  }
  .ab_ctRight{
    float: left;
    width: 30%;
  }
  .ab_article{
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  .ab_article ul li:first-child{
    margin-bottom: 20px;
  }
  .ab_article ul li:first-child a{
    color: #099fe4;
    font-size: 1.4rem;
  }
  .ab_article ul li:first-child a:hover{
    color: #000;
  }
  .ab_article ul li:nth-child(2){
    margin-bottom: 10px;
    color: #757575;
  }
  .ab_article ul li:last-child{
    font-size: 0.9rem;
    color: #757575;
  }
  .ab_article ul li:last-child span:not(:first-child){
    margin-left: 10px;
  }
  #artLabel::before{
    background: url('../../../static/img/artLabel.png') no-repeat;
    background-size: 90%;
  }
  #artNumber::before{
    background: url('../../../static/img/artNumber.png') no-repeat;
    background-size: 100%;
  }
  #artTime::before{
    background: url('../../../static/img/artTime.png') no-repeat;
    background-size: 90%;
  }
  .ab_article ul li:last-child span::before{
    content: ' ';
    display:inline-block;
    width: 15px;
    height: 15px;
    margin-right: 3px;
    position: relative;
    top: 3px;
  }
</style>
