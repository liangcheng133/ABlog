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

        <div class="pageNum">
          <ul>
            <li><a href="javascript:;" v-show="nowPage != 1" @click="findAllArticle(nowPage - 1)">< 上一页</a></li>
            <li v-for="i in countPage">
              <a href="javascript:;" :style=" i <= pageBegin - 1 || i >= pageEnd + 1 ? 'display:none' : ''" :class="nowPage == i ? 'page_active' : ''" @click="findAllArticle(i)">{{i}}</a>
            </li>
            <li><a href="javascript:;" v-show="nowPage != countPage" @click="findAllArticle(nowPage + 1)">下一页 ></a></li>
          </ul>
          <div>
            <span>总共有{{countPage}}页，跳转到</span>
            <input type="text" id="pageText" @keyup.enter="changePage($event)"/>
            <span>页</span>
          </div>

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
        //  文章列表
        articleList: '',
        //  总页数
        countPage: 0,
        //  当前页
        nowPage: 1,
        //  起始页
        pageBegin: 1,
        //  终止页
        pageEnd: 3,
      }
    },
    methods: {
      // 查找指定页数文章
      findAllArticle(nowPage) {
        let _this = this;  //指向vue实例本身，用在axios函数体中访问data数据
        this.axios.get(this.api.INTERFACES.allArticle + nowPage)
        .then(function(res) {
          _this.articleList = res.data.data;
          _this.nowPage = nowPage;

          //  针对页数过多时的处理，限制每次只提供3个页数
          if(_this.countPage <= 1){
            _this.pageEnd = 1;
          }

          if(_this.nowPage >= 2 && _this.nowPage <= _this.countPage -1){
            _this.pageBegin = _this.nowPage - 1;
            _this.pageEnd = _this.nowPage + 1;
            // console.log(_this.pageBegin + " | " + _this.pageEnd);
          }else{
            _this.pageBegin = _this.nowPage - 2;
            _this.pageEnd = _this.nowPage + 2;
            // console.log(_this.pageBegin + " | " + _this.pageEnd);
          }

          //  返回顶部
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, function(err) {
          console.log(err);
        })
      },

      // 查找文章分页数量
      getPageNum() {
        let _this = this;
        this.axios.get(this.api.INTERFACES.allCountArticle)
        .then(function(res) {
          _this.countPage = parseInt(res.data.data.limitCount) + 1;
        }, function(err) {
          console.log(err);
        })
      },

      //  用户跳转指定页数
      changePage(event) {
        const userPage = event.currentTarget.value;
        const inputE = event.target;
        inputE.blur();
        inputE.value = '';
        if(!isNaN(userPage) && userPage != '' && userPage <= this.countPage){
            this.findAllArticle(parseInt(userPage));
        }else{
          alert("请输入小于页数的数字哦QAQ");
        }
      },
    },
    created() {
      this.getPageNum();
      this.findAllArticle(this.nowPage);
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
    margin-right: 45px;
  }
  .ab_ctRight{
    float: left;
    width: 30%;
    padding-left: 45px;
    border-left: 1px solid #ddd;
  }
  .ab_article{
    border-bottom: 1px solid #ddd;
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
  .pageNum{
    margin: 0 auto;
    color: #757575;
  }
  .pageNum li{
    float: left;
  }
  .pageNum li a{
    padding: 5px 10px;
    border: 1px solid #ddd;
    color: #757575;
    transition: all .2s;
    margin-right: 7px;
  }
  .pageNum li a:hover{
    border-bottom: 2px solid #099FE4;
    background-color: #F8F8F8;
  }
  .pageNum .page_active{
    border-bottom: 2px solid #099FE4;
    background-color: #F8F8F8;
  }
  .pageNum span, .pageNum input{
    float: left;
  }
  .pageNum input{
    width: 50px;
    padding: 2px 3px;
    margin: 0 5px;
    text-align: center;
  }
</style>
