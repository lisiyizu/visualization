import Vue from 'vue'
import echarts from 'echarts'
module.exports = {
  deep: true,
  params: ['loading'],
  paramWatchers: {
    loading: function (val, oldVal) {
      let self = this
      if (val === true) {
        self.instance.showLoading()
      } else {
        self.instance.hideLoading()
      }
    }
  },
  bind: function (el) {
    let self = this
    Vue.nextTick(function () {
      self.instance = echarts.init(el)
      console.log(echarts.init(el))
      if (self.params.loading === true) {
        self.instance.showLoading()
      }
      self.resizeEventHandler = function () {
        self.instance.resize()
      }
      el.addEventListener('resize', self.resizeEventHandler, false)

      if (window.attachEvent) {
        window.attachEvent('onresize', self.resizeEventHandler)
      } else {
        window.addEventListener('resize', self.resizeEventHandler, false)
      }
    })
  },
  update: function (el, binding) {
    let self = this
    let options = binding.value
    Vue.nextTick(function () {
      self.instance.clear() // echarts Redraw
      self.instance.setOption(options)
    })
  },
  unbind: function () {
    let self = this
    self.instance.dispose()
    if (window.attachEvent) {
      window.detachEvent('onresize', self.resizeEventHandler)
    } else {
      window.removeEventListener('resize', self.resizeEventHandler, false)
    }
  }
}
