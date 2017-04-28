import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import jQuery from 'jQuery'
import VueResource from 'vue-resource'
import VueScroll from 'vue-scroll'
import { Loadmore, Spinner, DatetimePicker } from 'mint-ui'

Vue.use(VueResource)
Vue.use(VueScroll)
Vue.component(Spinner.name, Spinner)
Vue.component(Loadmore.name, Loadmore)
Vue.component(DatetimePicker.name, DatetimePicker)
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
  store,
  router,
  template: '<App/>',
  components: { App }
})
