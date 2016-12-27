import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Bar from '../views/Bar'
import Line from '../views/Line'
import Map from '../views/Map'
import Pie from '../views/Pie'
import BarPie from '../views/BarPie'
import StackBar from '../views/StackBar'
// 访问流量分析
import TrafficAnalysis from '../views/TrafficAnalysis'

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
  }, {
    path: '/stackbar',
    component: StackBar
  }, {
    path: '/traffic-analysis',
    component: TrafficAnalysis
  }]
}]
const router = new VueRouter({
  routes
})
export default router
