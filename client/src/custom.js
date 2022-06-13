import Vue from "vue";
import _ from 'lodash';
import vueCustomElement from "vue-custom-element";
import 'document-register-element/build/document-register-element';
import WidgetBtn from "./components/Widget";

Vue.use(vueCustomElement);

const options = {
    shadow: true,
    beforeCreateVueInstance(root) {

        const rootNode = root.el.getRootNode();

        if (rootNode instanceof ShadowRoot) {

            root.shadowRoot = rootNode

        } else {

            root.shadowRoot = document.head;
        }

        return root;

    }
}

Vue.customElement('widget-btn', WidgetBtn, options);