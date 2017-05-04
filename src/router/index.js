import Vue from 'vue'
import Router from 'vue-router'
import { Swipe, SwipeItem } from 'mint-ui'
// import { Waterfall, WaterfallSlot } from 'vue-waterfall'
import Home from '@/components/Home'
import HomePage from '@/components/home/HomePage'
import NewDetail from '@/components/home/NewDetail'
import HomeClass from '@/components/home/HomeClass'
//
import Detail from '@/components/Detail'
import DetailAll from '@/components/detail/DetailAll'
import DetailClass from '@/components/detail/DetailClass'
import DetailContent from '@/components/detail/DetailContent'
import DetailEvaluate from '@/components/detail/DetailEvaluate'
// import DetailMessage from '@/components/detail/DetailMessage'
import Login from '@/components/other/Login'
//
import Stroll from '@/components/Stroll'
//
import Mine from '@/components/Mine'
//
import Cart from '@/components/Cart'
Vue.use(Router)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Waterfall.name, Waterfall)
// Vue.component(WaterfallSlot.name, WaterfallSlot)
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'home',
      component: Home,
      redirect: '/index/home',
      children: [
        {
          path: '/index/home',
          name: 'home-page',
          component: HomePage
        },
        {
          path: '/index/newdetail',
          name: 'new-detail',
          component: NewDetail
        },
        {
          path: '/index/class/:id',
          name: 'home-class',
          component: HomeClass
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      redirect: '/detail/all',
      children: [
        {
          path: '/detail/all',
          name: 'detail-all',
          component: DetailAll
        },
        {
          path: '/detail/class/:classid',
          name: 'detail-class',
          component: DetailClass
        },
        {
          path: '/detail/:detailId',
          name: 'detail-content',
          component: DetailContent
        },
        {
          path: '/:detailId/evaluate',
          name: 'detailId-evaluate',
          component: DetailEvaluate
        }
      ]
    },
    {
      path: '/stroll',
      name: 'stroll',
      component: Stroll
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/Mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/register',
      name: 'register',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/index/home'
    }
  ]
})

