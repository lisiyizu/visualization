// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import echarts from './directives/echarts'

// register directives
Vue.directive('echarts', echarts)
Vue.use(infiniteScroll)
import router from './router/index'
Vue.use(axios)
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
