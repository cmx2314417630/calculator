import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as Formula from "./assets/formula";
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

import { Button, Input } from "element-ui";
Vue.use(Button);
Vue.use(Input);
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false;
Vue.prototype.$api = Formula;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
