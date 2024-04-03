<template>
  <div id="boxhead">
    <header>
      <div id="icon">
        <a href="#">LXL</a>
      </div>

      <ul>
        <li><router-link to="/index">主页</router-link></li>
        <li>
          <router-link to="/note">随笔</router-link>
        </li>
        <li>
          <router-link to="/message">留言</router-link>
        </li>
        <li><a href="./noteManage">管理</a></li>
      </ul>
    </header>
  </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>

a {
  color: #555;
  /* é¾æ¥é¢è² */
}

#boxhead{height:10%;}

header {
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* å¯¼èªæ èæ¯è² */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.router-link-active {
  color: #007bff; /* Blue for active link text color */
  font-weight: bold; /* Optionally make the text bold */
}
</style>
