// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/reset.css";
import VueAMap from "vue-amap";
import store from "./store";
import VueHighcharts from "vue-highcharts";
import util from "./util"
Vue.prototype.$util = util
Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(VueHighcharts);
Vue.config.productionTip = false;
VueAMap.initAMapApiLoader({
  key: "c26a361e74bc694721937374a4457201",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  methods: {
    moreChart() {
      var options = this.getMoreOptions(this.type);

      if (this.chart) {
        this.chart.destroy();
      }
      // 初始化 Highcharts 图表
      this.chart = new Highcharts.Chart("highcharts-more", options);
    }
  },
  render: h => h(App)
});
