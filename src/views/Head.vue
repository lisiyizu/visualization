<template lang="html">
<header class="gm-header">
    <router-link :to="{ path: '/' }">
        <div class="gm-header-logo">
            <span class="gm-header-logo-text">{{header.logo.title}}</span>
        </div>
    </router-link>
    <nav class="gm-header-nav">
        <router-link v-for="item in header.nav" :to="item.route">
            <div class="gm-header-nav-item" :class="{ 'active': item.active }">
                <span class="gm-header-nav-text">{{item.title}}</span>
            </div>
        </router-link>
    </nav>
</header>
</template>

<script>
export default {
  name: 'GmHeader',
  data () {
    return {
      header: {
        logo: {
          title: 'vue数据可视化'
        },
        nav: [{
          title: '',
          route: '/'
        }, {
          title: '',
          route: '/'
        }]
      }
    }
  }
}
</script>

<style lang="less">
.gm-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 4rem;
    width: 100%;
    padding: 0 3rem;
    z-index: 999;
    background: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.12), 0 10px 12px 0 rgba(170,182,206,.2), inset 0 -1px 0 0 rgba(255,255,255,.3);
}
.gm-header-logo {
    padding-top: .5rem;
    width: 12rem;
}
.gm-header-logo-img {
    display: none;
    height: 2rem;
    margin: 1rem 1rem 0 0;
}
.gm-header-logo-text {
    color: #007fff;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 3rem;
}
.gm-header-nav {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.gm-header-nav-item {
    color: ##007fff;
    text-align: center;
    font-size: .9rem;
    line-height: 3.9rem;
    min-width: 4rem;
    cursor: pointer;
}
.gm-header-nav-item.active,
.gm-header-nav-item:hover {
    color: ##007fff;
    border-bottom: .2rem solid #fff;
}
</style>
