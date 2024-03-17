<template>
    <div id="movieBox">
        <h3>{{title}}</h3>
        <img :src="link" />
    </div>
</template>

<script>


export default {
    props:["title", "link"],
    
}
</script>


<style>
#movieBox {
    width: 200px;
    height: auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* 添加阴影 */
    transition: transform 0.3s; /* 动画效果 */
}

#movieBox:hover {transform: scale(1.05); /* 悬停时放大 */}

#movieBox h3 {
    color: #333; /* 标题颜色 */
    font-size: 18px; /* 字体大小 */
    text-align: center; /* 居中对齐 */
    margin-bottom: 10px; /* 底部间距 */
}

#movieBox img {
    width: 100%;
    height: auto; /* 保持图片比例 */
    border-radius: 5px; /* 图片圆角 */
}
</style>
