const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: './',
  outputDir: 'build',
  assetsDir: 'static',
  filenameHashing: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('filters', resolve('src/filters'))

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  css: {
    // modules: true,
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/snjt-cpu-portal': {
        target: 'http://ectest.snjt.com',
        ws: true,
        changeOrigin: true
      }
    }
  },

  // 通过 webpack-merge 合并到最终的配置中
  configureWebpack: {

  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/styles/common.less')// 需要全局导入的less
      ]
    })
}
