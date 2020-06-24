module.exports={
  configureWebpack: {
    resolve: {
     alias:{
       '@':'src',
       'assets':'@/assers',
       'common':'@/common',
       'components':'@/components',
       'network':'@/network',
       'views':'@/views',
     }
    }
  }
}