<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" >
        <div>{{text}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'swiperText',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true
      },
      text: '去美国比较早的人应该知道，大城市出租车执照挺值钱的，有数量控制，实际上相当于铁饭碗。很多外国来美国的移民倾家荡产买执照，于是价格越来越高，越升越有人买。网约车泛滥后，出租车司机的收入并没有下降太多，但是执照的价值归零了。新乡时报采访了一位华人移民，他和弟弟都是出租车司机，当执照价格超过100万美元时，两兄弟的妻子哀求他们把执照卖了。弟弟问哥哥，“你怕吗？”“不，”哥哥说。“我信任这座城市。”不久，执照泡沫破裂。弟弟把出租车停在一个公园里，自杀了。这兄弟俩都是80年代就去美国了，20多年的美国生活也没能转变他们的观念。'
    }
  }
}
</script>

<style scoped>
.swiper{
 height: 300px;
 overflow: hidden;
}
.swiper-slide{
  font-size: 18px;
  text-align: left;
  padding: 30px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
