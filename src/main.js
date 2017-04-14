import Vue from 'vue'
import App from './App'
// import store from './store'
import router from './router'
import 'mint-ui/lib/style.css'
import jQuery from 'jQuery'
window.$ = jQuery
Vue.config.productionTip = false
Vue.config.silent = true
Vue.config.devtools = false
Vue.config.ignoredElements = [
  'my-custom-web-component', 'another-web-component'
]
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  template: '<App/>',
  components: { App }
})
