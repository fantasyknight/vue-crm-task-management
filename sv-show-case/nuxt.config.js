export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
   // Target (https://go.nuxtjs.dev/config-target)
   target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bib Playground',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Great+Vibes' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arizonia' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Parisienne' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pinyon+Script' },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cedarville+Cursive' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=La+Belle+Aurore' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alex+Brush' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Give+You+Glory' },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Over+the+Rainbow' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bad+Script' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playball' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Courgette' }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.scss'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/../bib-shared/js/plugins.js', '~/plugins/global.js'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components/', pathPrefix: false }, { path: '~/../bib-shared/components/', pathPrefix: false }],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/../bib-shared/css/colors.scss',
      '~/../bib-shared/css/variables.scss',
      '~/../bib-shared/css/mixins.scss',
      '~/../bib-shared/css/utilities.scss'
    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { loaders }){
      loaders.scss.additionalData = '@use "sass:math";'
    }
  }
}

