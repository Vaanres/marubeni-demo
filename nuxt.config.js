import path from 'path'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main', '@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-lazyload',
    '~/plugins/scrollmagic.js',
    '~/plugins/fontawesome.js',
    '~/plugins/utils.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/style-resources'
    // 'bootstrap-vue/nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }

      // config.resolve.alias.TweenLite = path.resolve(
      //   'node_modules',
      //   'gsap/src/uncompressed/TweenLite.js'
      // )
      // config.resolve.alias.TweenMax = path.resolve(
      //   'node_modules',
      //   'gsap/src/uncompressed/TweenMax.js'
      // )
      // config.resolve.alias.TimelineLite = path.resolve(
      //   'node_modules',
      //   'gsap/src/uncompressed/TimelineLite.js'
      // )
      // config.resolve.alias.TimelineMax = path.resolve(
      //   'node_modules',
      //   'gsap/src/uncompressed/TimelineMax.js'
      // )

      config.resolve.alias.ScrollMagic = path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
      )

      // config.resolve.alias['animation.gsap'] = path.resolve(
      //   'node_modules',
      //   'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
      // )

      config.resolve.alias['debug.addIndicators'] = path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
      )
    }
  },
  webfontloader: {
    custom: {
      families: ['Montserrat:n4,n5,n6,n7', 'Material Icons'],
      urls: [
        'https://fonts.googleapis.com/icon?family=Montserrat:300,400,500,600,700,800&display=swap',
        'https://fonts.googleapis.com/icon?family=Material+Icons&display=block'
      ]
    }
  },
  styleResources: {
    scss: ['~assets/styles/_core.scss']
  }
}
