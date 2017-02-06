// import Vue from 'vue'
// import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
// import About from './components/About.vue'

require.ensure(['underscore'], function () {

  require('./vendor')

  // Routes
  const routes = {
    '/': {
      component: Index
    },

    '/about': {
      // component: About

      component: function (resolve) {
        require(['./components/About.vue'], resolve)
      }
    }
  }

  Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/'})

})
