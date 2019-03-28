import Vue from 'vue'
import Router from 'vue-router'

import TheMap from '@/components/Map'
import Home from '@/components/Home'
import Login from '@/login/Login'
import Public from '@/components/public'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'Public',
            component: Public,
            redirect: '/login',
            children:[
              {
                path: '/map',
                name: 'Map',
                component: TheMap,
              },
              {
                path: '/home',
                name: 'Home',
               
                component: Home,
            }
            ]
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
        },
    ]
})

