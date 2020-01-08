<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
        slide {{item}}
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
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      slide: [1, 2, 3]
    }
  }
}
</script>

<style scoped>
.swiper{
 height: 7rem;
 border-top: 1px solid #ccc;
 border-bottom: 1px solid #ccc;
}
.swiper-slide{
  height: 4rem;
  text-align: center;
  line-height: 4rem;

}
</style>
