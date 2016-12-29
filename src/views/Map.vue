<template lang="html">
<div class="chart-outer" ref="outer">
  <div :id="'map-chart-' + uid" ref="chart" class="chart-container"></div>
</div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import { UUID } from '../utils/public'
export default {
  data () {
    return {
      target: null,
      uid: UUID.generate()
    }
  },
  mounted () {
    this.startDraw()
    this.resize()
  },
  methods: {
    startDraw () {
      let self = this
      this.$nextTick(function () {
        let dom = this.$refs.chart.id
        let w = self.$refs.outer.getBoundingClientRect().width
        let h = self.$refs.outer.getBoundingClientRect().height
        this.target = echarts.init(document.getElementById(dom))
        this.target.resize({
          width: w,
          height: h
        })
        this.target.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          series: [{
            name: '中国',
            type: 'map',
            mapType: 'china',
            scaleLimit: {
              min: 0.8,
              max: 1.1
            },
            selectedMode: 'multiple',
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },
            data: [{
              name: '北京',
              selected: true
            }]
          }]
        })
      })
    },
    resize () {
      let self = this
      let resizeTimer = null
      window.onresize = function () {
        if (resizeTimer) clearTimeout(resizeTimer)
        resizeTimer = setTimeout(function () {
          self.target.resize()
        }, 100)
      }
    }
  },
  beforeDestroy: function () {
    this.target.dispose()
  }
}
</script>

<style lang="less">
</style>
