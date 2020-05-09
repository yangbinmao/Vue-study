//出口地址需要绝对地址，所以使用node.js的函数来进行地址的获取
const path=require('path');


module.exports={
    //入口地址
    entry: './src/main.js',
    //出口地址
    output: {
        // path: 动态获取路径； __dirname  node的全局地址。获取当前文件地址
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            //css-loader只负责将css文件进行加载
            //style-loader负责将样式添加到DOM中
            //使用多个loader时，是从右向左
            use: [ 'style-loader', 'css-loader' ]
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
        }
        ]
      }
}