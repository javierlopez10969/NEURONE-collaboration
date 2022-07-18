const {
  defineConfig
} = require('@vue/cli-service')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },

  transpileDependencies: [
    'vuetify'
  ]
}
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
      }),
    ],
  },
  transpileDependencies: [
    'vuetify'
  ]
}

module.exports = {
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(400000)
      .maxAssetSize(400000)
  },

  transpileDependencies: [
    'vuetify'
  ]
}
const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, './src/styles/_variables.scss')],
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
};

module.exports ={
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["./node_modules"]
        }
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
