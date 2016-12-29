import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Bar from '../views/Bar'
import Line from '../views/Line'
import Map from '../views/Map'
import Pie from '../views/Pie'
// 访问流量分析
import TrafficAnalysis from '../views/TrafficAnalysis'
// 更新表
import Update from '../views/Update'

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
    path: '/traffic-analysis',
    component: TrafficAnalysis
  }, {
    path: '/update',
    component: Update
  }]
}]
const router = new VueRouter({
  routes
})
export default router
