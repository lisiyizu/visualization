<template lang="html">
<div id="barChart"></div>
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
      let initChart = echarts.init(document.getElementById('barChart'))
      initChart.setOption({
        tooltip: {},
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            name: 'Num',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    })
  }
}
</script>

<style lang="less">
#barChart {
  // width: 400px;
  width: 100%;
  padding: 15px;
  height: 500px;
}
</style>
