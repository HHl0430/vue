import Vue from "vue";
import Router from "vue-router";

import TheMap from "@/pages/Map";
import Home from "@/pages/home/Home";
import Login from "@/login/Login";
import Public from "@/components/public";
import Charts from "@/pages/charts";
import Registered from "@/login/Registered";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "Public",
      component: Public,
      redirect: "/login",
      children: [
        {
          path: "/map",
          name: "Map",
          component: TheMap
        },
        {
          path: "/home",
          name: "Home",
          component: Home
        },
        {
          path: "/chart",
          name: "Charts",
          component: Charts
        },
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/registered",
      name: "Registered",
      component: Registered
    }
  ]
});
