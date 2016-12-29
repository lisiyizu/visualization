<!-- 圆饼图 -->
<template lang="html">
<div class="chart-outer" ref="outer">
  <div :id="'chart' + uid" ref="chart" class="chart-container"></div>
  <button id="plain" @click="update(options.plain)">普通</button>
  <button id="inverted" @click="update(options.inverted)">反转</button>
  <button id="polar" @click="update(options.polar)">极地图</button>
</div>

</template>

<script>
import Highcharts from 'highcharts'
import { UUID } from '../utils/public'
export default {
  data () {
    return {
      target: null,
      uid: UUID.generate(),
      options: {
        plain: {
          chart: {
            inverted: false,
            polar: false
          },
          subtitle: {
            text: 'Plain'
          }
        },
        inverted: {
          chart: {
            inverted: true,
            polar: false
          },
          subtitle: {
            text: 'inverted'
          }
        },
        polar: {
          chart: {
            inverted: false,
            polar: true
          },
          subtitle: {
            text: 'polar'
          }
        }
      }
    }
  },
  props: {
    styObj: Object
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
        w = (w > 500 ? w / 5 * 4 : w / 4 * 3) || null
        h = (h > 500 ? w / 5 * 4 : h / 4 * 3) || null
        this.target = Highcharts.chart(dom, {
          chart: {
            className: 'free-chart',
            width: w,
            height: h
          },
          title: {
            text: 'Chart.update'
          },
          subtitle: {
            text: 'Plain'
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          series: [{
            type: 'column',
            colorByPoint: true,
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            showInLegend: false
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
          self.startDraw()
        }, 100)
      }
    },
    update (opts) {
      this.target.update(opts)
    }
  },
  beforeDestroy: function () {
    this.target.destroy()
  }
}
</script>

<style lang="less">
.chart-outer {
  width: 100%;
  padding: 20px;
  height: 400px;
  background-color: #fff;
  text-align: center;
}
.chart-container {
  display: inline-block;
  width: 100%;
}
.free-chart {
  display: inline-block;
}
</style>
