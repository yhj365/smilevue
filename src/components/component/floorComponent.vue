<template>
  <div>
    <div class="floor">
      <div class="floor-title">{{floorTitle}}</div>
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.img" width="100%" />
        </div>
        <div>
          <div class="floor-two">
            <img :src="floorData1.img" width="100%" />
          </div>
          <div class="floor-two">
            <img :src="floorData2.img" width="100%" />
          </div>
        </div>
      </div>
      <div class="floor-rule">
        <div class="floor-one" v-for="(item, index) in floorData.slice(3)" :key="index">
          <img v-lazy="item.img" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'floorComponent',
  props: ['floorData', 'floorTitle'],
  data () {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    }
  },
  created () {
    this.floorData0 = this.floorData[0]
    this.floorData1 = this.floorData[1]
    this.floorData2 = this.floorData[2]
  },
  watch: {
    floorData: function (val) {
      console.log(val)
      this.floorData0 = this.floorData[0]
      this.floorData1 = this.floorData[1]
      this.floorData2 = this.floorData[2]
    }
  }
}
</script>

<style scoped>
.floor-title {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #eee;
}
.floor-two {
  border-bottom: 1px solid #eee;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #eee;
}
</style>
