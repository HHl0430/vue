// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import store from "./store"; //引入vuex
import VueHighcharts from "vue-highcharts"; //引入highcharts
import util from "./util"; //引入公共方法
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
//引入公共样式
import "./assets/reset.css";

//将方法存放到vue的实例上
Vue.prototype.$ajax = axios;
Vue.prototype.$util = util;
Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(VueHighcharts);

Vue.config.productionTip = false;


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
