<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack"></van-nav-bar>
    <div class="register-panel">
      <van-field
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        v-model="userName"
        @click-icon="userName = ''"
        :error-message="userNameErrorMsg"
      />
      <van-field
        label="密码"
        type="password"
        placeholder="请输入密码"
        required
        v-model="password"
        :error-message="passwordErrorMsg"
      />
      <div class="register-button">
        <van-button type="primary" size="large" @click="registerAction" :loading="openLoading">立即注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config'
import { Toast } from 'vant'
export default {
  data () {
    return {
      userName: '',
      password: '',
      openLoading: false, // 是否开启Loading状态
      userNameErrorMsg: '',
      passwordErrorMsg: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    registerAction () {
      this.checkForm() && this.axiosRegisterUser()
    },
    axiosRegisterUser () {
      this.openLoading = true
      axios({
        url: url.registerUser,
        method: 'post',
        data: {
          userName: this.userName,
          password: this.password
        }
      })
        .then(res => {
          if (res.data.code === 200) {
            Toast.success(res.data.message)
            this.$router.push('/')
          } else {
            this.openLoading = false
            Toast.fail('注册失败')
          }
        })
        .catch(err => {
          console.log(err)
          Toast.fail('注册失败')
        })
    },
    checkForm () {
      let isOk = true
      if (this.userName.length < 5) {
        this.userNameErrorMsg = '用户名不能少于5位'
        isOk = false
      } else {
        this.userNameErrorMsg = ''
      }
      if (this.password.length < 6) {
        this.passwordErrorMsg = '密码不能少于6位'
        isOk = false
      } else {
        this.passwordErrorMsg = ''
      }
      return isOk
    }
  }
}
</script>

<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 80px;
  text-align: left;
}
.register-button {
  padding-top: 10px;
}
</style>
