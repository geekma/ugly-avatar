const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/ugly-avatar/'
  : '/',
  devServer: {
    host: 'localhost', 
    port: 8089,
    historyApiFallback: true,
    allowedHosts: "all"
  }
})
