import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import WebFont from 'webfontloader'


Vue.use(Vuetify)

Vue.config.productionTip = false



WebFont.load({ google: { families: ["Roboto:100,300,400,500,700,900"] } });

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
