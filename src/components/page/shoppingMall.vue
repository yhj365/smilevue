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
        <img v-lazy="cate.img" width="100%" />
        <span>{{cate.name}}</span>
      </div>
    </div>
    <div class="adbanner">
      <img v-lazy="adBanner" width="100%" />
    </div>
    <!-- 商品推荐 -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in recommemdGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.img" width="80%" />
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
              <goods-info
                :goodsId="item.ID"
                :goodsImage="item.IMAGE1"
                :goodsName="item.NAME"
                :goodsPrice="item.PRESENT_PRICE"
              ></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
    <div>
      <swiper-default2></swiper-default2>
      <swiper-text></swiper-text>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
      hotGoods: [{
        "ID": "0032862950ca44d397e58a6fb10a3e38",
        "GOODS_SERIAL_NUMBER": "6914782121027",
        "SHOP_ID": "402880e860166f3c0160167897d60002",
        "SUB_ID": "402880e86016d1b5016016e4dca2001e",
        "GOOD_TYPE": 1,
        "STATE": 0,
        "IS_DELETE": 1,
        "NAME": "徐福记1250酥心糖桶600g/桶",
        "ORI_PRICE": 57.9,
        "PRESENT_PRICE": 49.9,
        "AMOUNT": 10000,
        "DETAIL": "<img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110101_3479.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110101_7883.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110102_4338.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110102_9332.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110102_4779.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110102_2636.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110102_6703.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110102_2476.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110103_647.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110103_9999.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110103_2042.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110103_5857.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110103_4012.jpg\" width=\"100%\" height=\"auto\" alt=\"\" /><img src=\"http://images.baixingliangfan.cn/shopGoodsDetailImg/20180213/20180213110103_7879.jpg\" width=\"100%\" height=\"auto\" alt=\"\" />",
        "BRIEF": null,
        "SALES_COUNT": 0,
        "IMAGE1": "http://images.baixingliangfan.cn/shopGoodsImg/20180213/20180213110054_6547.jpg",
        "IMAGE2": null,
        "IMAGE3": null,
        "IMAGE4": null,
        "IMAGE5": null,
        "ORIGIN_PLACE": null,
        "GOOD_SCENT": null,
        "CREATE_TIME": 1518490868398,
        "UPDATE_TIME": 1523173952539,
        "IS_RECOMMEND": 0,
        "PICTURE_COMPERSS_PATH": "http://images.baixingliangfan.cn/compressedPic/20180213110054_6547.jpg"
      }]
    }
  },
  created () {
    // axios({
    //   url: url.getShopingMallInfo,
    //   method: 'get'
    // }).then(res => {
    //   if (res.status === 200) {
    //     console.log(res.data.data.list)
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
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
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin: 0.3rem 0 0;
}
.recommend-title {
  border-bottom: ipx solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
  text-align: left;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-area {
  text-align: center;
  font-size: 14px;
  line-height: 1.8rem;
}
.hot-title{
  height: 1.8rem;
}
.hot-goods {
  overflow: hidden;
  background-color: #fff;
}
</style>
