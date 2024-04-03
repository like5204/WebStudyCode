<template>
  <article id="box">
    
    <router-view name="myhead"/>

    <main>
      <router-view />

      <router-view name="varview" />
    </main>

    <!-- <div class="navs">
        <button @click="fnback">back</button>
        <button @click="fnforward">forward</button>
    </div> -->


     <router-view name="myfoot" />
  </article>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods:{
    fnback()
    {
        this.$router.back();
    },
    fnforward()
    {
        this.$router.forward();
    }
  },
  created(){
      document.title = this.$route.meta;
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background-color: #f8f8f8;
  color: #333;
  /* ä¸»è¦æå­é¢è² */
}

a {
  color: #555;
  /* é¾æ¥é¢è² */
}

#box {
  width: 100%;
  height: 100%;
  position:relative;
}
/* 样式修改 */

.navs > button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.navs > button:hover {
  background-color: #2980b9;
}

/* 定位修改 */
.navs {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999; /* 可能需要调整z-index以确保按钮在其他元素之上 */
}



header {
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* å¯¼èªæ èæ¯è² */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#icon {
  width: 40%;
  padding-left: 40px;
}

header > ul {
  width: 60%;
  border-left: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
}

header > ul > li {
  cursor: pointer;
  padding: 10px;
}
header ul li a.active {
  color: #007bff; /* Blue for active link text color */
  font-weight: bold; /* Optionally make the text bold */
}

main {
  min-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main > div {
  width: 70%;
  font-size: 18px;
}

#content {
  margin-bottom: 20px;
}

#origin {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10%;
  padding-right: 10px;
}


@media screen and (max-width: 500px) {
  main > div {
    width: 100%;
    padding: 0px 5px;
  }
}

@media screen and (max-width: 350px) {
  main > div {
    font-size: 13px;
  }
}

.router-link-active {
  color: #007bff; /* Blue for active link text color */
  font-weight: bold; /* Optionally make the text bold */
}

</style>
