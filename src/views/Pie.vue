<!-- 圆饼图 -->
<template lang="html">
<div class="chart-outer" ref="outer">
  <div :id="'pie-chart' + uid" ref="chart" class="chart-container"></div>
</div>

</template>

<script>
import Highcharts from 'highcharts'
import { UUID } from '../utils/public'
export default {
  data () {
    return {
      target: null,
      uid: UUID.generate()
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
        w = (w > 500 ? 500 : w / 4 * 3) || null
        h = (h > 500 ? 500 : h / 4 * 3) || null
        this.target = Highcharts.chart(dom, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            className: 'free-chart',
            width: w,
            height: h
          },
          title: {
            text: '访问流量来源',
            align: 'center',
            verticalAlign: 'top'
          },
          credits: {
            enabled: false
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              dataLabels: {
                enabled: true,
                distance: 0,
                style: {
                  fontWeight: '300',
                  color: '#666'
                }
              },
              startAngle: -90,
              endAngle: 270,
              center: ['50%', '60%']
            }
          },
          series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '60%',
            data: [['Firefox', 45.0], ['IE', 26.8], ['Chrome', 12.8], ['Safari', 8.5], ['Opera', 6.2], {
              name: 'Others',
              y: 0.7,
              dataLabels: {
                enabled: false
              }
            }]
          }],
          responsive: {
            rules: [{              // 在图表小于 500px 的情况下关闭图例
              condition: {         // 响应条件
                maxWidth: 500
              },
              chartOptions: {      // 响应内容
                legend: {
                  enabled: false
                }
              }
            }]
          }
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
