<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
        <div class="recommend-item">
          <img :src="item.img" width="80%">
          <div>{{item.name}}</div>
          <div>¥{{item.price}}¥{{item.priceOld}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: 'swiper-pagination'
        }
      },
      slide: []
    }
  }
}
</script>

<style scoped>
.swiper-slide{
  height: 4rem;
  text-align: center;
  padding-top: 3rem;
  border-bottom: 1px solid #eee;
}
</style>