<template>
  <div>
    <div class="navbar">
      <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="goBack" fixed/>
    </div>
    <div class="topimg">
      <img :src="goodsInfo.IMAGE1" width="100%" alt />
    </div>
    <div class="goods-name">{{goodsInfo.NAME}}</div>
    <div class="goods-price">价格：￥{{goodsInfo.PRESENT_PRICE | moneyFilter}}元</div>
    <div>
      <van-tabs swipeable >
        <van-tab title="商品详情">
          <div class="detail" v-html="goodsInfo.DETAIL"></div>
        </van-tab>
        <van-tab title="评论">评论制作中</van-tab>
      </van-tabs>
    </div>
    <div class="goods-bottom">
      <div>
        <van-button size="large" type="primary" @click="addGoodsToCart">加入购物车</van-button>
      </div>
      <div>
        <van-button size="large" type="danger">直接购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
import { Toast } from 'vant'
import { toMoney } from '@/filter/moneyFilter.js'
export default {
  data () {
    return {
      goodsId: this.$route.query.goodsId,
      goodsInfo: {}
    }
  },
  created () {
    this.getInfo()
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    addGoodsToCart () {

    },
    getInfo () {
      axios({
        url: url.getDetailGoodsInfo,
        method: 'post',
        data: {
          goodsId: this.goodsId
        }
      }).then((res) => {
        if (res.data.code === 200) {
          this.goodsInfo = res.data.message
        } else {
          Toast('服务器错误，数据获取失败')
        }
      }).catch(err => {
        console.log(err)
      })

    }
  }
}
</script>

<style scoped>
.goods-name {
  background-color: #fff;
}
.goods-price {
  background-color: #fff;
}
.detail {
  font-size: 0px;
}
.goods-bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
}

.goods-bottom > div {
  flex: 1;
  padding: 5px;
}
</style>