import Vue from 'vue'
import Router from 'vue-router'

import { Swipe, SwipeItem } from 'mint-ui'
// import { Waterfall, WaterfallSlot } from 'vue-waterfall'
import Home from '@/components/Home'
import HomePage from '@/components/home/HomePage'
import NewDetail from '@/components/home/NewDetail'
import HouseHold from '@/components/home/HouseHold'
import Kitchen from '@/components/home/Kitchen'
import Know from '@/components/home/Know'
import Life from '@/components/home/Life'
import Decorate from '@/components/home/decorate'
import Bedding from '@/components/home/bedding'
import Travel from '@/components/home/Travel'
//
import Detail from '@/components/Detail'
import DetailAll from '@/components/detail/DetailAll'
import DetailContent from '@/components/detail/DetailContent'
import DetailEvaluate from '@/components/detail/DetailEvaluate'
// import DetailMessage from '@/components/detail/DetailMessage'
import Login from '@/components/other/Login'
import Register from '@/components/other/Register'
import Search from '@/components/other/Search'
//
import Stroll from '@/components/Stroll'
//
import Account from '@/components/Account'
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
          path: '/index/household',
          name: 'house-hold',
          component: HouseHold
        },
        {
          path: '/index/kitchen',
          name: 'kitchen',
          component: Kitchen
        },
        {
          path: '/index/know',
          name: 'know',
          component: Know
        },
        {
          path: '/index/life',
          name: 'life',
          component: Life
        },
        {
          path: '/index/decorate',
          name: 'decorate',
          component: Decorate
        },
        {
          path: '/index/bedding',
          name: 'bedding',
          component: Bedding
        },
        {
          path: '/index/travel',
          name: 'travel',
          component: Travel
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      redirect: '/detailall',
      children: [
        {
          path: '/detailall',
          name: 'detail-all',
          component: DetailAll
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
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/index/home'
    }
  ]
})

