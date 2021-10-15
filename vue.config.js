module.exports = {
  publicPath: './',

  css: {
    requireModuleExtension: true
  },
  chainWebpack(config){
    // console.log(config)
    config.output.filename = {
      filename: 'app.js'
    }
  },
  configureWebpack: {

  }
}
