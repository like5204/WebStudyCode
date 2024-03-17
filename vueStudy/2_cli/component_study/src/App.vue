<template>
  <div id="app">
    <Movie v-for="movie in movies"  :key="movie.id"
     :title="movie.title" 
     :link="movie.link">
     </Movie>

  </div>
</template>

<script>
import Movie from "./components/Movie.vue";

export default {
  name: 'App',
  data:function(){
        return {
            movies:[
              {id:1, title:"无问西东", link:"https://s1.imagehub.cc/images/2024/03/11/f765bfb03f66f68ba7f302414d55a673.webp"},
              {id:2, title:"周处除三害", link:"https://s1.imagehub.cc/images/2024/03/11/d0c657f73bb9a4d8baec1073018e9baf.webp"},
              {id:3, title:"热辣滚烫", link:"https://s1.imagehub.cc/images/2024/03/11/4bde48a939ef42b3bc718dcbd9bee7fc.webp"}
            ]
        }
  },
  components: {
    Movie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-wrap: wrap; /* 当没有足够空间时允许项目换行 */
  justify-content: center; /* 项目之间和周围的空间平均分布 */
  gap: 20px; /* 设置项目之间的间隙 */
}


</style>
