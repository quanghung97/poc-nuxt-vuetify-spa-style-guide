export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - proof-of-concept-fe-spa',
    title: 'proof-of-concept-fe-spa',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/vuetify/variables.scss',
    // '~/assets/custom.scss',
    // '~/assets/override.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/mapImageCurrency'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://auth.nuxtjs.org/
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://www.npmjs.com/package/@nuxtjs/dotenv
    '@nuxtjs/dotenv',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'vi',
        file: 'vi.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          maxAge: 60
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 7
        },
        user: {
          property: 'data',
          autoFetch: true
        },
        endpoints: {
          login: { url: process.env.API_URL + '/defi-user-service/api/v1.0.0/users/login', method: 'post', propertyName: 'access_token' },
          refresh: { url: process.env.API_URL + 'defi-user-service/api/v1.0.0/users/refresh_token', method: 'post', propertyName: 'refresh_token' },
          user: { url: process.env.API_URL + 'defi-user-service/api/v1.0.0/users/profile', method: 'get', propertyName: 'data' },
          logout: false
        },
        autoLogout: false
      }
    },
    redirect: {
      login: '/',
      callback: '/',
      home: '/',
      logout: '/'
    }

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/vuetify/variables.scss'],
    optionsPath: './vuetify.options.js'
  },

  styleResources: {
    scss: [
      '~/assets/*.scss',
      '~/assets/vuetify/*.scss',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
