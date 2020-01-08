const BASEURL = 'https://www.easy-mock.com/mock/5e097003bb88f46adb35926b/smileVue/'
const LOCALURL = 'http://localhost:3000/'
const URL = {
  // 商城首页所有信息
  getShopingMallInfo: BASEURL + 'index',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  // 用户注册接口
  registerUser: LOCALURL + 'user/register',
  // 用户登录接口
  login: LOCALURL + 'user/login',
  // 获取商品详情
  getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo',
  // 得到大类信息
  getCateGoryList: LOCALURL + 'goods/getCateGoryList',
  // 得到小类信息
  getCateGorySubList: LOCALURL + 'goods/getCategorySubList',
  // 得到小类商品信息
  getGoodsListByCategorySubID: LOCALURL + 'goods/getGoodsListByCategorySubID'
}

module.exports = URL
