<template lang="html">
  <div class="chart-outer" ref="outer">
    <div :id="'line-chart-' + uid" ref="chart" class="chart-container"></div>
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
        this.target = Highcharts.chart(dom, {
          chart: {
            type: 'column',
            className: 'free-chart',
            width: w,
            height: h
          },
          title: {
            text: '浏览器市场份额'
          },
          subtitle: {
            text: '点击每列查看详细信息'
          },
          credits: {
            enabled: false // 去掉水印
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            title: {
              text: '市场份额百分比'
            }
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
              }
            }
          },
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Edge',
              y: 56.33,
              drilldown: 'Edge'
            },
            {
              name: 'Chrome',
              y: 24.03,
              drilldown: 'Chrome'
            },
            {
              name: 'Firefox',
              y: 10.38,
              drilldown: 'Firefox'
            },
            {
              name: 'Safari',
              y: 4.77,
              drilldown: 'Safari'
            },
            {
              name: 'Opera',
              y: 0.91,
              drilldown: 'Opera'
            },
            {
              name: '其他',
              y: 0.2,
              drilldown: null
            }]
          }],
          drilldown: {
            series: [{
              name: 'Edge浏览器',
              id: 'Edge',
              data: [['v11.0', 24.13], ['v8.0', 17.2], ['v9.0', 8.11], ['v10.0', 5.33], ['v6.0', 1.06], ['v7.0', 0.5]]
            },
            {
              name: 'Chrome',
              id: 'Chrome',
              data: [['v40.0', 5], ['v41.0', 4.32], ['v42.0', 3.68], ['v39.0', 2.96], ['v36.0', 2.53], ['v43.0', 1.45], ['v31.0', 1.24], ['v35.0', 0.85], ['v38.0', 0.6], ['v32.0', 0.55], ['v37.0', 0.38], ['v33.0', 0.19], ['v34.0', 0.14], ['v30.0', 0.14]]
            },
            {
              name: 'Firefox',
              id: 'Firefox',
              data: [['v35', 2.76], ['v36', 2.32], ['v37', 2.31], ['v34', 1.27], ['v38', 1.02], ['v31', 0.33], ['v33', 0.22], ['v32', 0.15]]
            },
            {
              name: 'Safari',
              id: 'Safari',
              data: [['v8.0', 2.56], ['v7.1', 0.77], ['v5.1', 0.42], ['v5.0', 0.3], ['v6.1', 0.29], ['v7.0', 0.26], ['v6.2', 0.17]]
            },
            {
              name: 'Opera',
              id: 'Opera',
              data: [['v12.x', 0.34], ['v28', 0.24], ['v27', 0.17], ['v29', 0.16]]
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
</style>
