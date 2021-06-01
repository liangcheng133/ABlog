<template>
  <div>
    <div class="ablog_hotArticle">
      <span>总点击排行</span>
      <ul>
        <li v-for="val in hotArticle"><a :href="'/article?id=' + val.aID" target="_blank" :title="val.aName">{{val.aName | sliceStr(20)}}</a></li>
      </ul>
    </div>

    <div class="ablog_label">
      <span>标签</span>
       <ul>
         <li v-for="val in labels"><a href="javascript:;" :title="val.lableName">{{val.labelName}}</a></li>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        hotArticle: '',
        labels: '',
      }
    },
    methods: {
      // 获取前10条热门文章
      findHotArticle() {
        let _this = this;  //指向vue实例本身，用在axios函数体中访问data数据
        this.axios.get(this.api.INTERFACES.newArticle)
        .then(function(res) {
          _this.hotArticle = res.data.data;
        }, function(err) {
          console.log(err);
        })
      },
      // 获取全部标签
      findLabel() {
        let _this = this;  //指向vue实例本身，用在axios函数体中访问data数据
        this.axios.get(this.api.INTERFACES.allLabel)
        .then(function(res) {
          _this.labels = res.data.data;
        }, function(err) {
          console.log(err);
        })
      }
    },
    created() {
      this.findHotArticle();
      this.findLabel();
    },
    filters: {
      //  截取字段，当超过指定数量字符时则截断并加上提示字符
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
  .ablog_hotArticle, .ablog_label{
    float: left;
    width: 100%;
    margin-bottom: 30px;
  }
  .ablog_hotArticle span, .ablog_label span{
    display: block;
    font-size: 0.98rem;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  .ablog_hotArticle span::before{
    background: url(../../../static/img/hot.png) no-repeat;
    background-size: 100%;
  }
  .ablog_label span::before{
    background: url(../../../static/img/label.png) no-repeat;
    background-size: 80%;
    background-position-y: 50%;
  }
  .ablog_hotArticle span::before, .ablog_label span::before{
    content: ' ';
    width: 21px;
    height: 21px;
    display: block;
    float: left;
  }
  .ablog_hotArticle ul li a, .ablog_label ul li a{
    display: block;
    font-size: 0.9rem;
    margin: 5px 0;
    padding-left: 5px;
    transition: all 0.3s;
    line-height: 1.5;
  }
  .ablog_hotArticle ul li a{
    width: 100%;
    color: #757575;
  }
  .ablog_hotArticle ul li a:hover{
    background-color: #757575;
    color: #fff;
  }
  .ablog_label ul, .ablog_label ul li{
    float: left;
  }
  .ablog_label ul li a{
    float: left;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    color: #757575;
    padding: 1px 5px;
    margin-right: 10px;
    box-shadow: 1px 1px 1px #ccc;
  }
  .ablog_label ul li a:hover{
    background-color: #757575;
    color: #fff;
  }
</style>
