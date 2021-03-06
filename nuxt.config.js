export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Movie base',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    }
  },

  googleFonts: {
    families: {
      'The+Nautigal': {
        wght: [700]},
      'Mochiy+Pop+P+One': true,
    }

  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
