const { defineConfig } = require('@vue/cli-service')

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:"./",
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      fileName: 'index.html'
    }
  },
  // chainWebpack: config => {
  //
  //     config.module.rule("images")
  //     .test(/\.(jpg|png|gif)/)
  //     .use("url-loader")
  //         .loader("url-loader")
  //         .options({
  //             limit:8192,//限制打包图片的大小：
  //             name:'images/[name]-[hash:8].[ext]',//images:图片打包的文件夹；
  //     }).end() //返回上级，继续写添加loader
  //
  //   // .test(/\.png$/)
  //   // .use('file-loader').loader('file-loader')
  //
  //
  //
  // }

})
