<template>
  <div>
    <div class="main-div">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="shop">列表</van-tabbar-item>
      <van-tabbar-item icon="shop">购物车</van-tabbar-item>
      <van-tabbar-item icon="shop">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      active: 0
    }
  },
  created () {
    this.changeTabbarActive()
  },
  updated () {
    this.changeTabbarActive()
  },
  methods: {
    changeTabbarActive (active) {
      this.nowPath = this.$route.path
      if(this.nowPath == '/Cart'){
        this.active = 2
      }
    },
    changeTabbar (active) {
      switch(active) {
        case 0:
          this.$router.push({name: 'shoppingMall'})
          break;
        case 1:
          this.$router.push({name: 'CategoryList'})
          break;
        case 2:
          this.$router.push({name: 'Cart'})
          break;
        case 3:
          this.$router.push({name: ''})
          break;
      }
    }
  }
}

</script>
<style lang='' scoped>

</style>
