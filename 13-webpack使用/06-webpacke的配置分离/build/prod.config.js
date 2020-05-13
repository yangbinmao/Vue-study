//生产环境的配置

//配置分离的工具（作用是将不同的配置文件合并在一起，然后在一起导出）
const wabpackMerge= require('webpack-merge')
//打包压缩输出的js。减少内存空间
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')

//引入通用配置，然后在用wabpackMerge工具和生产环境配置合并后一起导出
const baseConfig=require('./base.config')
module.exports = wabpackMerge(baseConfig,{
	plugins: [
		new UglifyjsPlugin()
	]
})



 