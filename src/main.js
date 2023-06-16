import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as Formula from "./assets/formula";
import MENU from "@/assets/menu.js";
import "element-ui/lib/theme-chalk/base.css";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

import {
  Button,
  Input,
  Option,
  OptionGroup,
  Select,
  Dialog,
  Form,
  FormItem,
} from "element-ui";
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.config.productionTip = false;
Vue.prototype.$api = Formula;
Vue.prototype.$menu = MENU;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
