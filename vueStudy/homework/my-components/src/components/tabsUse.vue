<template>
  <div id="app">
    <tabs :arr="imgs.map((item) => item.title)" v-model="cur"></tabs>

    <img :src="imgs[cur].link" :alt="imgs[cur].title" />
  </div>
</template>

<script>
import tabs from "@/components/tabs";

export default {
  name: "App",
  components: {
    tabs,
  },
  data() {
    return {
      cur: 3,
      imgs: [
        {
          title: "唱游",
          author: "王菲",
          link: "https://s1.imagehub.cc/images/2024/03/04/fe855aa38aaa95b43a2684a5725325d0.jpeg",
        },
        {
          title: "余额",
          author: "孙燕姿",
          link: "https://s1.imagehub.cc/images/2024/03/04/6e548772c7f53e28db7f2ff6cafd0c32.md.jpeg",
        },
        {
          title: "七里香",
          author: "周杰伦",
          link: "https://s1.imagehub.cc/images/2024/03/06/829a2622688e4fa1c0dd836a5cbdb77b.md.jpeg",
        },
        {
          title: "热辣滚烫",
          author: "贾玲",
          link: "https://s1.imagehub.cc/images/2024/03/11/4bde48a939ef42b3bc718dcbd9bee7fc.md.webp",
        },
      ],
    };
  },
  watch: {
    cur: {
      immediate:true,
      handler() {
        console.log("数据变" + this.cur);
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  margin-left: 50px;
}
</style>
