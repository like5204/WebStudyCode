<template>
    <div id="box">
        <h1>仿佛来到了一篇荒漠...</h1>

		<div>
				<button @click="toIndex">主页</button>
				<button @click="toNote">随笔</button>
				<button @click="toMessage">留言</button>
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
	methods:{
		toIndex()
		{
			this.$router.push('/index')
		},
		toNote()
		{
			this.$router.push('/note')
		},
		toMessage()
		{
			this.$router.push('/message')
		}

	}
}
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

#box>div {
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