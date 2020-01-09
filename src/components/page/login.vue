<template>
  <div>
    <van-nav-bar title="用户登录"></van-nav-bar>
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
        <van-button type="primary" size="large" @click="registerAction" :loading="openLoading">立即登录</van-button>
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
  created () {
    if (localStorage.userInfo) {
      Toast.success('您已经登录')
      this.$router.push('/')
    }
  },
  methods: {
    registerAction () {
      this.checkForm() && this.axiosRegisterUser()
    },
    axiosRegisterUser () {
      this.openLoading = true
      axios({
        url: url.login,
        method: 'post',
        data: {
          userName: this.userName,
          password: this.password
        }
      })
        .then(res => {
          if (res.data.code === 200 && res.data.message) {
            new Promise((resolve, reject) => {
              localStorage.userInfo = { userName: this.userName }
              setTimeout(() => { resolve() }, 500)
            })
              .then(res => {
                Toast.success('登录成功')
                this.$router.push('/')
              })
              .catch(err => {
                console.log(err)
                Toast.fail('登录状态保存失败')
              })
          } else {
            this.openLoading = false
            Toast.fail('登录失败')
          }
        })
        .catch(err => {
          console.log(err)
          Toast.fail('登录失败')
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
