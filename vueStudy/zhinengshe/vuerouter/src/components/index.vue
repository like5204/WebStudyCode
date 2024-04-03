<template>
  <div id="box">
    <div id="content">{{ content }}</div>
    <div id="origin">{{ author }}</div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      content: "",
      author: "",
    };
  },
  methods: {},
  created() {


    fetch("https://v2.jinrishici.com/one.json")
      .then((response) => response.json())
      .then((data) => {
		this.content = data['data'].content
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

#box {
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#box > div {
  width: 70%;
  font-size: 18px;
  text-align: center;
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
</style>