<template lang="html">
<div id="mapChart"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
export default {
  data () {
    return {
      barChartOption: null
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawPie('mapChart')
      let resizeTimer = null
      window.onresize = function () {
        if (resizeTimer) clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => {
          this.drawPie('mapChart')
        }, 100)
      }
    })
  },
  methods: {
    drawPie (dom) {
      let initChart = echarts.init(document.getElementById(dom))
      initChart.setOption({
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
    }
  }
}
</script>

<style lang="less">
#mapChart {
  // width: 400px;
  width: 100%;
  padding: 20px;
  height: 500px;
}
</style>
