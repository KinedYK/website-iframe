import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import ElementPlus from "element-plus";
import iframeResize from 'iframe-resizer/js/iframeResizer';
import vClickOutside from "click-outside-vue3"
import "normalize.css";
import "animate.css";
import "bulma/css/bulma.css";
import "element-plus/dist/index.css";
import "font-awesome/css/font-awesome.css";
import axios from "axios";
import { encode, decode } from 'js-base64';
import encodeUtf8 from 'encode-utf8'
window.axios = axios;
window.encode = encode;
window.encodeUtf8 = encodeUtf8;

createApp(App)
  .directive('resize', {
    bind: function(el, { value = {} }) {
      el.addEventListener('load', () => iframeResize(value, el))
    },
    unbind: function (el) {
      el.iFrameResizer.removeListeners();
    }
  })
  .use(ElementPlus, { size: "mini", zIndex: 3000 })
  .use(vClickOutside)
  .use(router)
  .mount("#app");
