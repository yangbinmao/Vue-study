//开发时候的配置


//配置分离的工具（作用是将不同的配置文件合并在一起，然后在一起导出）
const wabpackMerge= require('webpack-merge')
//引入通用配置，然后在用wabpackMerge工具和开发环境配置合并后一起导出
const baseConfig=require('./base.config')

module.exports = wabpackMerge(baseConfig,{
	//配置热部署响应
	devServer:{
		//监听的文件地址
		contentBase: './dist',
		//启动后就直接打开浏览器
		inline: true,
		//端口号，默认8080
		// port: "9001"
	}
		
})
 