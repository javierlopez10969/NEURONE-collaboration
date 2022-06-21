//As application : 

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
/*

//As Widget : 
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import MyWebComponent from './components/WidgetBtn.vue';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const WrappedElement = wrap(Vue, MyWebComponent);

window.customElements.define('my-web-component', WrappedElement);*/