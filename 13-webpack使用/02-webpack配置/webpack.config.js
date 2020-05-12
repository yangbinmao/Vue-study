const path=require('path');


module.exports={
    entry: './src/main.js',
    output: {
        // path: 动态获取路径,
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}