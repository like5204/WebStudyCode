<template>
  <div id="navBox">
    <div id="nav">
      <div
        class="nav-item"
        v-for="item in navItems"
        :key="item.id"
       :class="{ 'active': $route.path.startsWith(item.path) }"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </div>

    <router-view class="item-img"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navItems: [
        {id:1, name: 'Yanzi', path: '/Yanzi' },
        {id:2, name: 'Faye', path: '/Faye' },
        {id:3, name: 'Jay', path: '/Jay' },
      ],
    };
  },
};
</script>

<style>
#navBox {
  width: 100%;
}

#nav {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #f3f3f3;
  list-style-type: none;
}

.nav-item {
  margin: 0 15px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  /* 新增样式 */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* 添加轻微阴影 */
}

.nav-item:hover, .nav-item.active {
  background-color: #e0e0e0;
}

.nav-item.active {
  background: #ccc; /* 激活状态的背景色 */
}

.nav-item a {
  text-decoration: none;
  color: #333; /* 设置链接颜色 */
}

.item-img {
  margin: 0 auto;
}
</style>
