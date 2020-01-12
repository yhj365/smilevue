<template>
  <div>
    <div class="navbar">
      <van-nav-bar title="商品列表" left-text="返回" left-arrow @click-left="goBack" />
    </div>
    <div>
      <van-row>
        <van-col span="6">
          <div id="leftNav">
            <ul>
              <li
                v-for="(item, index) in categoryList"
                :key="index"
                :class="{actionCategory: categoryIndex == index}"
                @click="clickCategory(index)"
              >{{item.MALL_CATEGORY_NAME}}</li>
            </ul>
          </div>
        </van-col>
        <van-col span="18">
          <div class="rightNav"></div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'

export default {
  name: 'CategoryList',
  data () {
    return {
      categoryList: [],
      categoryIndex: 0,
      categorySubList: []
    }
  },
  created () {
    this.getCategoryList()
  },
  mounted () {
    let winHeight = document.documentElement.clientHeight
    document.getElementById('leftNav').style.height = winHeight - 46 + 'px'
  },
  methods: {
    getCategoryList () {
      axios({
        url: url.getCateGoryList,
        method: 'get'
      }).then((res) => {
        if (res.data.code === 200 && res.data.message) {
          this.categoryList = res.data.message
        } else {
          Toast(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getCategorySubList (categoryId) {
      axios({
        url: url.getCateGorySList,
        method: 'post',
        data:{
          categoryId
        }
      }).then((res) => {
        if (res.data.code === 200 && res.data.message) {
          this.categorySubList = res.data.message
        } else {
          Toast(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    clickCategory (index) {
      this.categoryIndex = index
    },
    goBack () {
      this.$router.go(-1)
    }
  }

}

</script>
<style lang='' scoped>
</style>
