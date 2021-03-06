import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import './styles/global.less'
import 'view-design/dist/styles/iview.css'
import axios from './utils/http'

Vue.use(ViewUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
