const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
// 加密长度
const SALT_WORK_FACTOR = 10

let ObjectID = Schema.Types.ObjectID
mongoose.set('useCreateIndex', true)
// 创建UserSchema
const userSchema = new Schema({
  userID: ObjectID,
  userName: {unique: true, type: String},
  password: String,
  createAt: {type: Date, default: Date.now()},
  lastLoginAt: {type: Date, default: Date.now()}
}, {
  // 配置项，防止mongodb自动加s
  // collation: 'user'
})
userSchema.pre('save', function(next){
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if(err) return next(err)
    bcrypt.hash(this.password, salt, (err, hash) => {
      if(err) return next(err)
      this.password = hash
      next()
    })
  })
})

// 发布模型
mongoose.model('User', userSchema)
