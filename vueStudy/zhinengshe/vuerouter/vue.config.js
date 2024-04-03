const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    port: 8080,
    proxy: {
      
    }
  }
})
