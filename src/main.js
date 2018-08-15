// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import { VTooltip } from 'v-tooltip'
// import moment from 'moment'
// import VueMomentJS from 'vue-momentjs'

// ----- Vue Toaster -----
import Toaster from 'v-toaster'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 6000})

// Vue.use(Toaster, {timeout: 5000})
Vue.use(VueFire)
Vue.use(require('vue-moment'))
// Vue.use(VueMomentJS, moment)
Vue.directive('my-tooltip', VTooltip)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
