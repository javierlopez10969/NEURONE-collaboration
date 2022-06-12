/*
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import MyWebComponent from './components/WidgetBtn.vue';

const WrappedElement = wrap(Vue, MyWebComponent);

window.customElements.define('my-web-component', WrappedElement);
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vueCustomElement from 'vue-custom-element'
import DemoElement from './DemoElement.vue';



Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

Vue.use(vueCustomElement);
Vue.customElement('demo-basic', DemoElement);