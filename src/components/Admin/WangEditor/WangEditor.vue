<template>
  <div>
    <div id="editor" >

    </div>
    <button @click="addArticle">提交文章</button>
  </div>
</template>

<script>
  // 富文本导入
  import E from 'wangeditor'
  export default{
    data() {
      return {
        editor: null
      }
    },
    methods: {
      addArticle() {
        let article = {
          aName: '文章标题',
          aContent: this.editor.txt.html(),
          aPreviewText: this.editor.txt.text(),
          aLabelID: 3,
        };
        console.log(article);
        let _this = this;
        this.axios.post(this.api.INTERFACES.addArticle, this.qs.stringify(article))
        .then(res => {
          console.log(res.data);
          if(res.data.code == 200){
            alert("文章已建立回传至数据库");
            _this.editor.txt.clear();
          }
        });



      }
    },
    mounted() {
      this.editor = new E('#editor');
      this.editor.config.placeholder = '请在此处撰写您的文章内容';
      this.editor.create();
    }
  }
</script>

<style>
</style>
