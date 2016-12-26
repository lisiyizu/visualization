import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Bar from '../views/Bar'
import Line from '../views/Line'
import Map from '../views/Map'
import Pie from '../views/Pie'
import BarPie from '../views/BarPie'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home,
  redirect: '/pie',
  children: [{
    path: '/bar',
    component: Bar
  }, {
    path: '/line',
    component: Line
  }, {
    path: '/map',
    component: Map
  }, {
    path: '/pie',
    component: Pie
  }, {
    path: '/barpie',
    component: BarPie
  }]
}]
const router = new VueRouter({
  routes
})
export default router
