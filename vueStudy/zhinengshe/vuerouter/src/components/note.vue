<template>
  <div id="box">
    <ul class="blog-list">
     
      <li class="blog-item" v-for="item in dataJson" :key="item.id">
          <!-- <router-link :to="'/note/'+item.id"  class="blog-link"> -->
           <router-link :to="{name:'note', params:{id:item.id}}"  class="blog-link">
          <div class="blog-content">
            <h2 class="title">{{item.tit}}</h2>
            <ul class="tags">
              <li>C</li>
              <li>Java</li>
            </ul>
            <p class="timestamp">{{item.time}}</p>
          </div>
        </router-link>
      </li>


    </ul>

    <div class="pagination">
      <span class="prev">Previous</span>
      <span class="page-number">Page 1</span>
      <span class="next">Next</span>
    </div>
  </div>
</template>

<script>
export default {
  data()
  {
    return {
      dataJson:{}
    }
  },
  created()
  {
      fetch('http://localhost:8002/blog/GetAll').then(d=>d.json()).then(d=>
      {
          this.dataJson = d;
      })
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
#box {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.blog-list {
  list-style: none;
  padding: 0;
  width: 90%;
  max-width: 600px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.blog-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;
}
.blog-item:first-child {
  margin-top: 40px;
}

.blog-item:hover {
  transform: scale(1.05);
}

.blog-content {
  padding: 20px;
}

.title {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.tags {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tags > li {
  display: inline-block;
  margin-right: 10px;
  padding: 8px 12px;
  background-color: #f1f1f1;
  border-radius: 15px;
  text-transform: lowercase;
  font-size: 0.9em;
  color: #555;
}

.timestamp {
  margin-top: 15px;
  color: #888;
  font-size: 0.8em;
}

.blog-link {
  display: block;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.pagination span {
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.pagination .page-number {
  background-color: #f1f1f1;
}
</style>