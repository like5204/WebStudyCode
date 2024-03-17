<template>
    <div id="box">
        <h2>{{name}}</h2>
        <img :src="link" />
        <h5><router-link to="/Yanzi/Yue">专辑《余额》</router-link></h5>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:"孙燕姿",
            link:"https://s1.imagehub.cc/images/2024/03/04/6e548772c7f53e28db7f2ff6cafd0c32.md.jpeg"
        };    
    }
}
</script>

<style>
#box {
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* 添加阴影 */
    transition: transform 0.3s; /* 动画效果 */
}

#box:hover {transform: scale(1.05); /* 悬停时放大 */}

#box h2 {
    color: #333; /* 标题颜色 */
    font-size: 18px; /* 字体大小 */
    text-align: center; /* 居中对齐 */
    margin-bottom: 10px; /* 底部间距 */
}

#box img {
    width: 100%; /* 图片宽度自适应容器 */
    max-width: 100%; /* 限制图片最大宽度，防止溢出 */
    height: auto; /* 高度自动，保持图片比例 */
}
a{
  text-decoration: none;
  color: #333; /* 设置链接颜色 */
}

</style>
