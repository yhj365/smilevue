<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img class="location-icon" :src="locationIcon" width="60%" alt />
        </van-col>
        <van-col span="16">
          <input class="search-input" type="text" />
        </van-col>
        <van-col span="5">
          <van-button size="mini">搜索</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner, index) in bannerPicArry" :key="index">
          <img v-lazy="banner.imgUrl" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate, index) in category" :key="index">
        <img v-lazy="cate.img" width="100%">
        <span>{{cate.name}}</span>
      </div>
    </div>
    <div class="adbanner">
      <img v-lazy="adBanner" width="100%">
    </div>
    <!-- 商品推荐 -->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in recommemdGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.img" width="80%">
              <div>{{item.name}}</div>
              <div>¥{{item.price}}¥{{item.priceOld}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floor-component :floorData="recommemdGoods" :floorTitle="floorTitle"></floor-component>
    <!--Hot Area-->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
            <!--这里需要一个list组件-->
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item , index) in hotGoods" :key="index">
                                <goods-info :goodsId="item.goodsId" :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price">

                                </goods-info>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    <swiper-default2></swiper-default2>
    <swiper-text></swiper-text>
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import swiperDefault2 from '../swiper/swiperDefault2'
import swiperText from '../swiper/swiperText'
import floorComponent from '../component/floorComponent'
import goodsInfo from '../component/goodsInfoComponent'
import url from '@/serviceAPI.config.js'

export default {
  components: {
    swiper,
    swiperSlide,
    swiperDefault2,
    swiperText,
    floorComponent,
    goodsInfo
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      msg: 'shopping mail',
      locationIcon: require('../../assets/imgs/location.png'),
      floorTitle: '商品标题',
      bannerPicArry: [
        {
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg'
        }, {
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg'
        }
      ],
      category: [
        {
          name: '牛奶饮品',
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg'
        }, {
          name: '牛奶饮品',
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg'
        }, {
          name: '牛奶饮品',
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg'
        }
      ],
      adBanner: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg',
      recommemdGoods: [
        {
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg',
          name: '商品名称',
          price: 100,
          priceOld: 200
        }, {
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg',
          name: '商品名称',
          price: 100,
          priceOld: 200
        }, {
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1106358219,1768552466&fm=26&gp=0.jpg',
          name: '商品名称',
          price: 100,
          priceOld: 200
        }
      ],
      hotGoods: []
    }
  },
  created () {
    axios({
      url: url.getShopingMallInfo,
      method: 'get'
    })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.data.list)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.location-icon {
  padding-top: 0.3rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border: 0;
  border-bottom: 1px solid #fff;
  background-color: #e5017d;
  color: #fff;
}
.swiper-area {
  clear: both;
  max-height: 10rem;
  overflow: hidden;
}
.type-bar{
  background-color: #fff;
  margin: 0 .3rem .3rem;
  border-radius: .3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div{
  padding: .3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area{
  background-color: #fff;
  margin: .3rem 0 0;
}
.recommend-title{
  border-bottom: ipx solid #eee;
  font-size: 14px;
  padding: .2rem;
  color: #e5017d;
  text-align: left;
}
.recommend-body{
  border-bottom: 1px solid #eee;
}
.recommend-item{
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-area{
        text-align: center;
        font-size:14px;
        height: 1.8rem;
        line-height:1.8rem;
    }
    .hot-goods{
        height: 130rem;
        overflow: hidden;
        background-color: #fff;
    }
</style>
