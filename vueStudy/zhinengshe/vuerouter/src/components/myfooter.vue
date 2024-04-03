<template>
    <footer>
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >渝ICP备2021001737号</a
      >
      <img src="#" alt="" />
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011502000597"
        >渝公网安备50011502000597号</a
      >
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>

footer {
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /* åºé¨èæ¯è² */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  /* åºé¨å­ä½å¤§å° */
}


@media screen and (max-width: 400px) {
  footer {
    font-size: 13px;
  }
}

@media screen and (max-width: 350px) {
  footer {
    font-size: 10px;
  }
  main > div {
    font-size: 13px;
  }
}

</style>