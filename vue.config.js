module.exports = {

    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://www.cxhorange.com/blog/',
        //         // 转发请求时不会协带api
        //         changeOrigin: true,
        //         pathRewrite:{'^/api':'/'}
        //     }
        // }
    },
   
    pwa: {
        iconPaths: {
          favicon32: './public/logo.ico',
          favicon16: './public/logo.ico',
          appleTouchIcon: './public/logo.ico',
          maskIcon: './public/logo.ico',
          msTileImage: './public/logo.ico'
        }
      },
     
    chainWebpack:config=>{
        //移除 prefetch插件
        config.plugins.delete('prefetch')
    },
    // postcss:[require('postcss-px2rem')({'remUnit':75,'baseDpr':2})]
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
