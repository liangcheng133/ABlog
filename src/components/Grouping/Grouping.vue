<template>
  <div>
    <!-- {{groupingList}} -->
    <div class="groupingContent">
      <ul>
        <li>
          <a href="javascript:;" :class="activeLabel == 0 ? 'activeLabel' : ''" @click="findAppointLabel(0)">全部</a>
        </li>
        <li v-for="val in labelList">
          <a href="javascript:;" :class="activeLabel == val.labelID ? 'activeLabel' : ''" @click="findAppointLabel(val.labelID)">{{val.labelName}}</a>
        </li>
      </ul>
    </div>
    <div class="timeTree">
      <ul v-for="val in yearList">
        <li><div>{{val.years}}</div></li>
        <li v-for="art in groupingList" v-if="val.years == art.years"><span>{{art.days}}日</span><a :href="'/article?id=' + art.aID" target="_blank">{{art.aName}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 标签列表
        labelList: null,
        // 分类文章列表
        groupingList: null,
        // 文章年份列表
        yearList: null,
        // 标签选中标识
        activeLabel: 0,
      }
    },
    methods: {
      // 获取全部标签
      findLabel() {
        let _this = this;  //指向vue实例本身，用在axios函数体中访问data数据
        this.axios.get(this.api.INTERFACES.allLabel)
        .then(function(res) {
          _this.labelList = res.data.data;
        }, function(err) {
          console.log(err);
        })
      },
      // 获取文章信息
      findGroupingArticle(labelID) {
        let _this = this;
        // url地址拼接
        let url = this.api.INTERFACES.groupingArticle;
        // 当有存入标签时，即拼接地址
        if(labelID != null) {
          url += "?ID=" + labelID;
        }
        this.axios.get(url)
        .then(function(res) {
          _this.groupingList = res.data.data;
        }, function(err) {
          console.log(err);
        })
      },
      // 获取所有文章的年份
      findYearsArticle(labelID) {
        let _this = this;
        let url = this.api.INTERFACES.yearsArticle;
        if(labelID != null) {
          url += "?ID=" + labelID;
        }
        this.axios.get(url)
        .then(function(res) {
          _this.yearList = res.data.data;
        }, function(err) {
          console.log(err);
        })
      },
      // 获取指定分类标签的所有文章
      findAppointLabel(labelID) {
        this.activeLabel = labelID;
        // 文章年份
        this.findYearsArticle(labelID);
        // 文章信息
        this.findGroupingArticle(labelID);
      }
    },
    created() {
      this.findLabel();
      // 主页界面标签ID链接跳转
      let path = this.$route.query['ID'];
      if(path != null && !isNaN(path)){
        this.activeLabel = path;
        this.findGroupingArticle(path);
        this.findYearsArticle(path);
      }else{
        this.findGroupingArticle();
        this.findYearsArticle();
      }
    }
  }
</script>

<style scoped>
  @import url("../../../static/css/Grouping.css");
</style>
