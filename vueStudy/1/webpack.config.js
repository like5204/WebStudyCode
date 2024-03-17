const path = require('path'); //使用node的路径相关模块

module.exports={
	mode:'development',
	entry:'./js/index.js',
	//定义需要处理的文件
	output:{
		path:path.resolve(__dirname, 'build'),
		filename:'bundle.js'
		//输出的路径和文件名 ./build/bundle.js
	}
}



