import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Public from '@/components/public'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'Public',
            component: Public,
            redirect: '/home',
            children:[
              {
                path: '/helloWorld',
                name: 'HelloWorld',
                component: HelloWorld,
              },
              {
                path: '/home',
                name: 'Home',
               
                component: Home,
            }
            ]
        },
    ]
})

