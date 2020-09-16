module.exports = {
  "transpileDependencies": [
    "vuetify",
    "vue-tel-input-vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'    /*'/new/'*/
    : '/',

  pwa: {
    name: 'JobAlart',
    start_url: './',
    themeColor: '#365899',
    backgroundColor: '#365899',
    msTileColor: '#365899',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#365899',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    },
  }
}