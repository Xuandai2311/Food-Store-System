import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "@/styles/index.scss"; // global css
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(ElementUI);

Vue.filter("formatMoney", function (value) {
  if (value) {
    return value.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
    });
  }
});
new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
