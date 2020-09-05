import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(GAuth, {
    clientId: '{CLIENT_ID}', scope: 'email profile openid', prompt: 'consent', fetch_basic_profile: false
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
