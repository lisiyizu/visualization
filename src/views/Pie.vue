<template lang="html">
<div id="pieChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      barChartOption: null
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawPie('pieChart')
    })
  },
  methods: {
    drawPie (dom) {
      let initChart = echarts.init(document.getElementById(dom))
      initChart.setOption({
        title: {
          text: '2016年最受欢迎的电视剧类型',
          subtext: '纯属虚构',
          x: 'center'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['琅琊榜', '伪装者', '麻雀', '锦绣未央', '青云志']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '琅琊榜'},
            {value: 310, name: '伪装者'},
            {value: 234, name: '麻雀'},
            {value: 135, name: '锦绣未央'},
            {value: 1548, name: '青云志'}
          ]
        }]
      })
    }
  }
}
</script>

<style lang="less">
#pieChart {
  // width: 400px;
  width: 100%;
  padding: 15px;
  height: 500px;
}
</style>
