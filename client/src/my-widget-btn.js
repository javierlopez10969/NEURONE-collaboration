import Vue from 'vue';

import wrap from '@vue/web-component-wrapper';
import MyWebComponent from './components/WidgetBtn';
//import vuetify from './plugins/vuetify'
Vue.config.productionTip = false
//Vue.use(vuetify);
window.customElements.define('widget-btn', wrap(Vue, MyWebComponent));