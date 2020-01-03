const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ObjectID = Schema.Types.ObjectID

// 创建UserSchema
const userSchema = new Schema({
  userID: ObjectID,
  userName: {unique: true, type: String},
  password: String,
  createAt: {type: Date, default: Date.now()},
  lastLoginAt: {type: Date, default: Date.now()}
})
