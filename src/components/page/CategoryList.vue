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
                v-for="(item, index) in category"
                :key="index"
                :class="{categoryActice: categoryIndex == index}"
                @click="clickCategory(index,item.ID)"
              >{{item.MALL_CATEGORY_NAME}}</li>
            </ul>
          </div>
        </van-col>
        <van-col span="18">
          <div class="tabCategorySub">
            <van-tabs v-model="active" @click="onClickCategorySub">
              <van-tab v-for="(item,index) in categorySub" :key="index" :title="item.MALL_SUB_NAME"></van-tab>
            </van-tabs>
          </div>
          <div id="list-div">
            <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div
                  class="list-item"
                  @click="goGoodsInfo(item.ID)"
                  v-for="(item,index) in goodList"
                  :key="index"
                >
                  <div class="list-item-img">
                    <img v-lazy="item.IMAGE1" width="100%" :onerror="errorImg" />
                  </div>
                  <div class="list-item-text">
                    <div>{{item.NAME}}</div>
                    <div>￥{{item.ORI_PRICE | moneyFilter}}</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
import { toMoney } from '@/filter/moneyFilter.js'

export default {
  name: 'CategoryList',
  data () {
    return {
      category: [],
      categoryIndex: 0,
      categorySub: [],
      active: 0, //激活标签的值
      loading: false,
      finished: false, //上拉加载是否有数据
      num: 8,
      page: 1, //商品列表的页数
      goodList: [], //商品列表信息
      categorySubId: '', //商品子类ID
      isRefresh: false, //下拉刷新
      errorImg: 'this.src="' + require('@/assets/images/errorimg.png') + '"'
    }
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  created () {
    this.getCategoryList()
  },
  mounted () {
    let winHeight = document.documentElement.clientHeight
    document.getElementById('leftNav').style.height = winHeight - 46 - 50 + 'px'
    document.getElementById("list-div").style.height = winHeight - 90 - 50 + 'px'
  },
  methods: {
    getCategoryList () {
      axios({
        url: url.getCateGoryList,
        method: 'get'
      }).then((res) => {
        if (res.data.code === 200 && res.data.message) {
          this.category = res.data.message
          this.getCategorySubByCategoryID(this.category[0].ID)
        } else {
          Toast(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    onClickCategorySub (index, title) {
      this.categorySubId = this.categorySub[index].ID
      this.goodList = []
      this.finished = false
      this.page = 1
      this.onLoad()

    },
    //根据大类ID读取小类类别列表
    getCategorySubByCategoryID (categoryId) {
      axios({
        url: url.getCateGorySubList,
        method: 'post',
        data: { categoryId: categoryId }
      })
        .then(response => {
          if (response.data.code == 200 && response.data.message) {
            this.categorySub = response.data.message
            this.active = 0
            this.categorySubId = this.categorySub[0].ID
            this.onLoad()
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getGoodList () {
      axios({
        url: url.getGoodsListByCategorySubID,
        method: 'post',
        data: {
          categorySubId: this.categorySubId,
          num: this.num,
          page: this.page
        }
      })
        .then(response => {
          if (response.data.code == 200 && response.data.message.length) {
            this.page++
            this.goodList = this.goodList.concat(response.data.message)
          } else {
            this.finished = true
          }
          this.loading = false;

        })
        .catch(error => {
          console.log(error)
        })
    },
    //跳转到商品详细页
    goGoodsInfo (id) {
      this.$router.push({ name: 'Goods', query: { goodsId: id } })
    },
    //上拉加载方法
    onLoad () {
      setTimeout(() => {
        this.categorySubId = this.categorySubId ? this.categorySubId : this.categorySub[0].ID
        this.getGoodList()
      }, 1000)
    },
    //下拉刷新方法
    onRefresh () {
      setTimeout(() => {
        this.isRefresh = false;
        this.finished = false;
        this.goodList = []
        this.page = 1
        this.onLoad()

      }, 500)
    },
    clickCategory (index, categoryId) {
      this.categoryIndex = index
      this.page = 1
      this.finished = false
      this.goodList = []
      this.getCategorySubByCategoryID(categoryId)
    },
    goBack () {
      this.$router.go(-1)
    }
  }

}

</script>
<style lang='' scoped>
#leftNav {
  background-color: aliceblue;
}
#leftNav ul li {
  line-height: 2rem;
  border-bottom: 1px solid #e4e7ed;
  padding: 3px;
  font-size: 0.8rem;
  text-align: center;
}
.categoryActice {
  background-color: #fff;
}

.list-item {
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  padding: 5px;
}
#list-div {
  overflow: scroll;
}
.list-item-img {
  flex: 8;
}
.list-item-text {
  flex: 16;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
