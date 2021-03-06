//通用配置文件

//出口地址需要绝对地址，所以使用node.js的函数来进行地址的获取
const path = require('path');
//对最后导出的文件添加版权归属注释
const webpack = require('webpack');
//把工作目录的index.html在打包的时候编译进dist文件夹。这样就可以在发布的时候直接发布dist
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	//入口地址
	entry: './src/main.js',
	//出口地址
	output: {
		//第一个path：指定导出文件保存的地址
		// 第二个path: 动态获取路径； __dirname  node的全局地址。获取当前文件地址
		path: path.resolve(__dirname, '../dist'),
		//指定导出的文件的名称
		filename: 'bundle.js',
		// publicPath: 'dist/' //匹配所有url，在url前都会加一个dist/
	},
	module: {
		rules: [{
				test: /\.css$/,
				//css-loader只负责将css文件进行加载
				//style-loader负责将样式添加到DOM中
				//使用多个loader时，是从右向左
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						//当加载的图片。小于limit时，会将图片编译成best64形式的字符串
						//当加载的图片。大于limit时，需要使用file-loader模块进行加载 
						limit: 8192,
						//对获取的图片在dist显示的命名格式
						name: 'img/[name].[hash:8].[ext]'
					},
				}]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}

		]
	},
	resolve: { //resolve 一般是來解決路径的问题
		//配置在引入以下文件时，就不用写后缀名
		extensions:['.js','.css','.vue'],
		// alias别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
	plugins: [
		new webpack.BannerPlugin('最终版权归YBM所有'),
		new HtmlWebpackPlugin({
				template: "index.html"
		}),
	],
	

}
 