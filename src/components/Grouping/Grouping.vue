<template>
  <div>
    <div class="groupingContent">
      <ul>
        <li><a href="javascript:;" class="active">全部</a></li>
        <li v-for="val in labels"><a href="javascript:;">{{val.labelName}}</a></li>
      </ul>
    </div>
    <div class="timeTree">
      <ul v-for="val in yearsArticle">
        <li><div>{{val.years}}</div></li>
        <!-- <li v-for="art in groupings" v-if="val.years == art.years"><span>{{art.days}}</span><a href="javascript:;">{{art.aName}}</a></li> -->
        <li v-for="v, k, i in findTest(val.years)"><span>{{v}} {{k}} {{i}}</span><a href="javascript:;"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labels: '',
        groupings: '',
        yearsArticle: '',
      }
    },
    methods: {
      // 获取全部标签
      findLabel() {
        let _this = this;  //指向vue实例本身，用在axios函数体中访问data数据
        this.axios.get(this.api.INTERFACES.allLabel)
        .then(function(res) {
          _this.labels = res.data.data;
        }, function(err) {
          console.log(err);
        })
      },
      findGroupingArticle() {
        let _this = this;
        this.axios.get(this.api.INTERFACES.groupingArticle)
        .then(function(res) {
          _this.groupings = res.data.data;
        }, function(err) {
          console.log(err);
        })
      },
      findYearsArticle() {
        let _this = this;
        this.axios.get(this.api.INTERFACES.yearsArticle)
        .then(function(res) {
          _this.yearsArticle = res.data.data;
        }, function(err) {
          console.log(err);
        })
      },
      findTest(years) {
        let _this = this;
        this.axios.get(this.api.INTERFACES.test + years)
        .then(function(res) {

          console.log(res.data.data);
          let result = res.data.data;
          return result;

        }, function(err) {
          console.log(err);
        })
      }
    },
    created() {
      this.findLabel();
      this.findGroupingArticle();
      this.findYearsArticle();
    }
  }
</script>

<style scoped>
  @import url("../../../static/css/Grouping.css");
</style>
