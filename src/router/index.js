import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/list/list.vue'
import Sigin from '../components/sigin.vue'
import Gift from '../components/gift.vue'
import Bargain from '../components/bargain/bargain.vue'
import Special from '../components/special/special.vue'
import Classify from '../components/classify/classify.vue'


import Myuser from '../components/User/myuser.vue'
import UserZC from '../components/User/userZC.vue'
import UserDL from '../components/User/userDL.vue'


import Barginbot from '../components/bargain/bargin-bot.vue'
import Specialbot from '../components/special/special-bot.vue'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/sigin',
      component: Sigin
    },
    {
      path: '/gift',
      component: Gift
    },
    {
      path: '/bargain',
      component: Bargain
    },
    {
      path: "/bargain/:id?",
      component: Barginbot
    },
    {
      path: '/special',
      component: Special
    },
    {
      path: '/special/:id?',
      component: Specialbot
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path:'/myuser',
      component:Myuser
    },
    {
      path:'/userZC',
      component:UserZC
    },
    {
      path:'/userDL',
      component:UserDL
    }
  ]
})
