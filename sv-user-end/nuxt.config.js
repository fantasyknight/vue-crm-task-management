import i18n from './config/i18n'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bib Cloud Drive',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/global.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/plugins' , '../bib-shared/js/plugins'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components/', pathPrefix: false }, { path: '~/../bib-shared/components/', pathPrefix: false }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Simple usage
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'en',
         locales: [
          {
             code: 'en',
             name: 'English'
          },
          {
             code: 'fr',
             name: 'Français'
          }
        ],
        vueI18n: i18n
      }
     ]
  ],
  axios: {
    // proxy: true,
    baseURL: process.env.VUE_APP_API_ENDPOINT,
  },
  router: {
    middleware: ['auth']
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],
  styleResources: {
    scss: [
      '../bib-shared/css/colors.scss',
      '../bib-shared/css/variables.scss',
      '../bib-shared/css/mixins.scss',
      '../bib-shared/css/utilities.scss'
    ]
  },
  // serverMiddleware: [
  //   '~/middleware/redirects'
  // ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { loaders }) {
      loaders.scss.additionalData = '@use "sass:math";'
    }
  },
  auth: {
    plugins: ['~/plugins/auth'],
    redirect: {
      login: process.env.AUTH_REDIRECT_URL+process.env.VUE_APP_URL+'/dashboard',
      callback: '/auth/login',
      home: '/'
    },
    strategies: {
      local: {
        autoFetchUser: false,
        tokenName: 'Authorization',
        required: true,
        tokenType: "Bearer"
      }
    }
  }
}
