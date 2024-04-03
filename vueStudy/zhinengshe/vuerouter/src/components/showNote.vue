<template>
  <div id="box">
    <div>
      <div id="tit">
        <h2>{{dataJson['tit']}}</h2>

        <span class="annot">{{dataJson['time']}}</span>
      </div>

      <div id="content">
        {{dataJson['content']}}
      </div>

      <span class="annot"
        >作者:{{dataJson['author']}}
        <a href="javascript:;">
          <svg width="24" height="15" viewBox="0 0 24 21" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </span>
    </div>
  </div>
</template>


<script>
export default {
    props:['id'],
    data(){
        return {
            dataJson:{}
        }
    },
    mounted()
    {
        let {id} = this.$route.params;

        if(id)
        fetch('http://localhost:8002/blog/GetById?id=' + id).then(d=>d.json()).then(d=>
        {
            this.dataJson = d;
        }).catch(d=>this.$router.push('/notefound'));
    }
}
</script>


<style scoped>

        #box {
            width: 100%;
            min-height: 80%;
            background: #fff;

            box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            /* 定义浏览器渲染引擎如何渲染字体。浏览器会在速度、清晰度、几何精度 */
        }

        #box>div {
            width: 55%;
            padding: 30px;
            margin: 0 auto 0;
        }

        #tit {
            width: 100%;
        }

        #tit>h2 {
            text-align: center;
        }

        .annot {
            display: block;
            padding-top: 10px;
            font-size: 12px;
            color: #888;
            text-align: right;
        }

        #content+.annot {
            color: black;
            padding-top: 40px;
            font-size: 16px;
        }

        #content {
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: -0.05400000140070915px;
            word-spacing: 0.01em;
            word-break: break-word;
            word-wrap: break-word;
            /* text-align:justify; */
            /* color:rgba(0, 0, 0, 0.8); */
            color: rgb(36, 36, 36);
            margin-top: 30px;
        }

        #content::first-letter {
            color: black;
            font-size: 66px;
            float: left;
            /* margin:0.2em 0 0; */
            margin-right: 12px;
            padding-top: 7px;
        }

        .spare {
            width: 100%;
            height: 30%;
            background: white;
        }
</style>