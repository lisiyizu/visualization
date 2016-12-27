import echarts from 'echarts'

export function drawChart (dom, opts) {
  let initChart = echarts.init(document.getElementById(dom))
  initChart.setOption(opts)
}
// 画饼
export function drawPie (dom, opts) {
  let initChart = echarts.init(document.getElementById(dom))
  initChart.setOption(opts)
}
