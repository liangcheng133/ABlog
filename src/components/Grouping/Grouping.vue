<template>
  <div>
    <div class="groupingContent">
      <ul>
        <li><a href="javascript:;" class="active">全部</a></li>
        <li v-for="val in labels"><a href="javascript:;">{{val.labelName}}</a></li>
      </ul>
    </div>
    <div class="timeTree">
      <ul>
        <li><div>2021.5</div></li>
        <li><span>20</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
        <li><span>19</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
        <li><span>14</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
        <li><span>2</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
      </ul>
      <ul>
        <li><div>2021.5</div></li>
        <li><span>20</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
        <li><span>19</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
        <li><span>14</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
        <li><span>2</span><a href="javascript:;">某某欧姆某某欧姆某某欧姆某某欧姆</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labels: '',
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
      }
    },
    created() {
      this.findLabel();
    }
  }
</script>

<style scoped>
  @import url("../../../static/css/Grouping.css");
</style>
