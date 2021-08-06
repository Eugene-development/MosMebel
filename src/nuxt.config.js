
export default {
  server: {
    port: 4150,
    host: '0.0.0.0'
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'МосМебель || Шкафы купе Стенли и кухонные гарнитуры в Москве и Московской области',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Компания МосМебель предлагает кухонные гарнитуры по индивидуальному заказу и недорогие шкафы купе стенли по низким ценам в Москве и Московской области' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lodash',
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    ['@nuxtjs/google-analytics', {
      id: ''
    }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: '',
    //   webvisor: true,
    //   clickmap:true,
    //   useCDN:false,
    //   trackLinks:true,
    //   accurateTrackBounce:true,
    // }],

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
