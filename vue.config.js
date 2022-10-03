const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './build',
  // publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components',
      service: '@/service'
    }
  }
})
