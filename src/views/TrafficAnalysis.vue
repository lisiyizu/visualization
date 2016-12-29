<template lang="html">
<div class="grids-wrapper">
  <div class="grid" v-for="(item, index) in styObjs" :style="item">
    <div class="grid-inner">
      <div class="chart-box">
        <div v-if="charts[index]['type'] === 'bar'">
          <bar></bar>
        </div>
        <div v-else-if="charts[index]['type'] === 'pie'">
          <pie :style="item"></pie>
        </div>
        <div v-else-if="charts[index]['type'] === 'line-chart'">
          <line-chart :style="item"></line-chart>
        </div>
        <div v-else>
          <div class="chart-box-title" v-if="charts[index]['title']">
            {{charts[index]['title']}}
          </div>
          <div class="chart-box-text" v-if="charts[index]['text']">
            {{charts[index]['text']}}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { generateChart } from '../utils/chart'
import Bar from './Bar'
import Pie from './Pie'
import LineChart from './Line'
export default {
  data () {
    return {
      styObjs: [],
      charts: [{
        row: 0,
        sizeX: 3,
        col: 0,
        sizeY: 2,
        title: '昨天UV',
        text: '35,923'
      }, {
        row: 0,
        sizeX: 4,
        col: 3,
        sizeY: 4,
        type: 'pie'
      }, {
        row: 0,
        sizeX: 5,
        col: 7,
        sizeY: 4,
        type: 'bar'
      }, {
        row: 2,
        sizeX: 3,
        col: 0,
        sizeY: 2,
        title: '过去一周日均UV',
        text: '20,563'
      }, {
        row: 4,
        sizeX: 6,
        col: 0,
        sizeY: 5,
        type: 'line-chart'
      }, {
        row: 4,
        sizeX: 6,
        col: 6,
        sizeY: 5,
        type: 'pie'
      }, {
        row: 9,
        sizeX: 6,
        col: 0,
        sizeY: 5
      }, {
        row: 9,
        sizeX: 6,
        col: 6,
        sizeY: 5
      }]
    }
  },
  created () {
    this.drawGridsWrapper()
  },
  components: {
    Bar,
    Pie,
    LineChart
  },
  mounted () {

  },
  methods: {
    drawGridsWrapper () {
      let self = this
      this.charts.forEach(function (item, index) {
        self.styObjs.push(generateChart(item, index))
      })
    }
  }
}
</script>

<style lang="less">
.grids-wrapper {
  position: relative;
  .grid {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    width: auto;
    height: auto;
    // background-color: #fff;
    border-radius: 6px;
    text-align: center;
    .grid-inner {
      width: 100%;
      height: 100%;
      background-color: #fff;
      overflow: hidden;
    }
    .chart-box-title {
      font-weight: 600;
    }
    .chart-box-text {
      font-weight: 300;
      font-size: 32px;
      color: rgba(0,0,0,.6);
    }
  }
}
</style>
