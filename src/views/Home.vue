<template lang="html">
<div>
    <gm-header></gm-header>
    <div class="page-wrapper">
        <div class="page-side">
            <div class="sidebar">
                <router-link class="gm-sidebar-item" v-for="item in menu" :to="{'path':item.link, 'activeClass': 'active'}" tag="div">
                    <div class="gm-sidebar-nav-item" :class="{ 'active': item.active }">
                        <span class="gm-sidebar-nav-text">{{item.title}}</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="page-content">
            <router-view></router-view>
        </div>
    </div>
    <footer class="gm-footer">

    </footer>
</div>
<!-- <div class="welcome-center">
    <router-view></router-view>
</div> -->
</template>

<script>
import GmHeader from './Head'
export default {
  name: 'app',
  data () {
    return {
      menu: [{
        title: '圆饼图',
        link: '/pie'
      }, {
        title: '柱状图',
        link: '/bar'
      }, {
        title: '折线图',
        link: '/line'
      }, {
        title: '柱状饼混搭',
        link: '/barpie'
      }, {
        title: '中国地图',
        link: '/map'
      }]
    }
  },
  components: {
    GmHeader
  }
}
</script>

<style lang="less">
.page-wrapper {
    margin: 5rem auto;
    width: 1000px;
    position: relative;
    .page-side {
        position: fixed;
        top: 5rem;
        width: 140px;
    }
    .page-content {
        margin-left: 150px;
        background-color: #fff;
        padding: 20px;
    }
}
.gm-sidebar-item {
    padding: 1rem 1.5rem;
    cursor: pointer;
    .gm-sidebar-nav-text {
        font-size: 14px;
    }
}
.welcome-center {
    width: 600px;
    min-height: 366px;
}
</style>
