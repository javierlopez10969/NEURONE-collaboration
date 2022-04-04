const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  transpileDependencies: ['vuetify']
}
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
      }),
    ],
  },
}