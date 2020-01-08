const Koa = require('koa')
const app = new Koa()
const {connect, initSchemas} = require('./database/init')
const mongoose = require('mongoose')

// 立即执行函数
;(async () => {
  await connect()
  initSchemas()

  const User = mongoose.model('User')
  let oneUser = new User({
    userName: 'haojie2',
    password: '123456'
  })
  oneUser.save().then(()=>{
    console.log('插入成功')
  })
})()

app.use(async(ctx) => {
  ctx.body = '<h1>hello koa</h1>'
})

app.listen(3000,()=>{
  console.log('server start')
})
