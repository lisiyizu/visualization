<!-- 圆饼图 -->
<template lang="html">
<div class="chart-outer" ref="outer" >
  <div :id="'high-chart' + uid" ref="chart" class="chart-container"></div>
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
    styObj: Object,
    options: Object
  },
  mounted () {
    this.startDraw(this.options)
    this.resize()
  },
  methods: {
    startDraw (opts) {
      let self = this
      this.$nextTick(function () {
        let dom = this.$refs.chart.id
        let w = self.$refs.outer.getBoundingClientRect().width
        let h = self.$refs.outer.getBoundingClientRect().height
        let defaultOpt = {
          chart: {
            className: 'free-chart',
            width: w,
            height: h
          }
        }
        w = (w > 500 ? 500 : w / 4 * 3) || null
        h = (h > 500 ? 500 : h / 4 * 3) || null
        this.target = Highcharts.chart(dom, Object.assign(defaultOpt, opts))
      })
    },
    resize () {
      let self = this
      let resizeTimer = null
      window.onresize = function () {
        if (resizeTimer) clearTimeout(resizeTimer)
        resizeTimer = setTimeout(function () {
          self.startDraw(self.options)
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
