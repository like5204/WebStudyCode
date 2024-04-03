<template>
  <div id="box">
    <div id="content">
      <section id="write">
        <h2>留言板</h2>
        <form id="messageForm">
          <div class="userInfo">
            <input type="text" placeholder="昵称" />
            <input type="file" id="avatarInput" accept="image/*" />
            <label for="avatarInput" class="upload-label">上传头像</label>
            <ul id="avatarList"></ul>
          </div>
          <div class="msg">
            <textarea
              name="msg"
              cols="30"
              rows="10"
              placeholder="对我说的话"
            ></textarea>
            <br />
            <p>
              <span>还可输入100字</span>
              <button type="submit">留言</button>
            </p>
          </div>
        </form>
      </section>
      <!-- 留言板中显示留言的部分 -->

      <section id="show">
        <div class="message">
          <div class="user-info">
            <img src="img/love.png" alt="User Avatar" />
            <span class="username">lxl</span>
          </div>
          <div class="message-content">
            <p>
              留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容
            </p>
            <span class="timestamp">2022-01-01 12:34 PM</span>
          </div>
        </div>

        <div class="message">
          <div class="user-info">
            <img src="img/Music.png" alt="User Avatar" />
            <span class="username">lxl</span>
          </div>
          <div class="message-content">
            <p>
              留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容
            </p>
            <span class="timestamp">2022-01-01 12:34 PM</span>
          </div>
        </div>

        <div class="message">
          <div class="user-info">
            <img src="img/Music.png" alt="User Avatar" />
            <span class="username">lxl</span>
          </div>
          <div class="message-content">
            <p>
              留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容
            </p>
            <span class="timestamp">2022-01-01 12:34 PM</span>
          </div>
        </div>

        <div class="pagination">
          <span class="prev">Previous</span>
          <span class="page-number">Page 1</span>
          <span class="next">Next</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    
  }
};
</script>

<style scoped>
#box {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#content {
  width: 70%;
  min-height: 70vh;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
}

#write {
  width: 100%;
  min-height: 40%;
  padding: 20px;
  box-sizing: border-box;
}

#write h2 {
  text-align: center;
}

.userInfo {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.userInfo input {
  width: 35%;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #aaa;
  text-indent: 1.2em;
}

/* 样式 */
.upload-label {
  cursor: pointer;
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f8f8;
}

#avatarList {
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#avatarList img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

#avatarInput {
  display: none;
}

/* 美化上传按钮 */
.upload-label:hover {
  background-color: #eee;
}

.userInfo ul {
  width: 50%;
  display: flex;
  justify-content: space-around;
}

.userInfo ul li {
  width: 14%;
  height: 70%;
}

.userInfo > ul > li > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.msg {
  margin-top: 20px;
}

.msg textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 10px;
  resize: none;
}

.msg p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.msg span {
  color: #888;
  font-size: 14px;
}

.msg button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.msg button:hover {
  background-color: #2980b9;
}

/* 样式 */
#show {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  /* 如果留言过多，添加滚动条 */
}

.message {
  display: flex;
  margin-bottom: 20px;
}

.user-info {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}

.user-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}

.message-content {
  width: 85%;
}

.message-content p {
  margin: 0;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
  word-break: break-word;
  /* 长单词换行 */
}

.timestamp {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  color: #888;
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