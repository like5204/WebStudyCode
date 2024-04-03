<template>
  <div id="box">
    <form @submit.prevent="handleSubmit" action="." method="POST" ref="myForm">
      <header>
        <div>标题: <input type="text" v-model="title" /></div>
      </header>

      <div class="editor-container">
        <div class="preview" ref="previewContainer">
          <div v-html="parsedMarkdown" class="output"></div>
        </div>

        <div class="editor" ref="editorContainer">
          <textarea
            placeholder="Please input..."
            v-model="markdownInput"
            @input="updatePreview"
          ></textarea>
        </div>
      </div>

      <footer>
        <input type="button" value="清除" @click="clearInput" />
        <input type="submit" value="保存" @click="savefn" />
      </footer>
    </form>
  </div>
</template>


<script>
import { marked } from "marked";
console.log(marked);

export default {
  data() {
    return {
      title: "",
      markdownInput: "",
      saved: true,
    };
  },
  computed: {
    parsedMarkdown() {
      return marked.parse(this.markdownInput);
    },
  },
  methods: {
    savefn(){
        alert('已经保存！');
        this.saved=true;
    },
    handleSubmit() {
      // 处理表单提交逻辑
      console.log("Form submitted");
    },
    clearInput() {
      this.markdownInput = "";
    },
    updatePreview() {
      this.saved = false;
      const output = this.$refs.previewContainer;
      output.innerHTML = this.parsedMarkdown;
      this.syncScroll();
    },
    syncScroll() {
      const editorContainer = this.$refs.editorContainer;
      const previewContainer = this.$refs.previewContainer;
      previewContainer.scrollTop = editorContainer.scrollTop;
    },
    aaa(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        this.$refs.myForm.submit();
      }
    },
  },
  mounted() {
    // 添加滚动事件监听，实时同步滚动
    const editorContainer = this.$refs.editorContainer;
    editorContainer.addEventListener("scroll", this.syncScroll);

    // 监听键盘事件
    document.addEventListener("keydown", this.aaa);
  },
  beforeRouteLeave(to, from, next) {
    if(!this.saved)
    {
        if(confirm('还未保存，确定要离开吗？'))
        {
            next();
        }
    }else
    next();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html,
body,
#box {
  width: 100%;
  height: 100%;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  max-height: 60px;
  height: 60px;
  display: flex;
  padding: 0 20px;
  justify-content: end;
  align-items: center;
}

body input {
  border: 1px solid black;
}

.editor-container {
  display: flex;
  min-height: 80vh;
}

.editor textarea {
  border: 1px solid #333;
}

.editor,
.preview {
  flex: 1;
  padding: 20px 0; /* 仅在顶部和底部添加间距 */
  overflow-y: auto; /* 设置 overflow-y 为 auto，使内容超过容器高度时出现滚动条 */
  word-wrap: break-word; /* 确保长单词或长链接能够正确换行显示 */
}

textarea {
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px;
  font-size: 16px;
}

.output {
  border: 1px solid #ddd;
  padding: 0 10px;
  height: 100%;
  overflow-y: auto;
}

footer {
  width: 100%;
  max-height: 50px;
  height: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 20px;
}

footer input {
  width: 50px;
  height: 30px;
  background: rgb(192, 192, 192);
  cursor: pointer;
}

footer input[type="submit"] {
  margin-left: 8px;
}

a {
  color: #007bff;
}
</style>