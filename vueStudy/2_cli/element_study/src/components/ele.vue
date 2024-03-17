<template>
  <div class="demo-image__preview">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :preview-src-list="srcList"
    >
    </el-image>

    <br />

    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="total" :page-size="pageSize"> </el-pagination>
    </div>


     <br />
      <br />
       <br />

    <h3>fontawesome图标库使用</h3>

    <i class="fas fa-user"></i>
  </div>
</template>



<script>

export default {
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      ],
      total:40,
      pageSize:5
    };
  },
};
</script>

