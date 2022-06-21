import Vue from 'vue';

import wrap from '@vue/web-component-wrapper';
import MyWebComponent from './components/WidgetBtn';
//import MyWebComponentReal from './components/Widget/WidgetBtn';
Vue.config.productionTip = false
window.customElements.define('widget-btn', wrap(Vue, MyWebComponent));
//window.customElements.define('widget-btn2', wrap(Vue, MyWebComponentReal));