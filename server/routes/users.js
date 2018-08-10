var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var User = require('./../models/user');

//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/vue_shop');

mongoose.connection.on('connected', function () {
  console.log('mongoDb connected success.')
})

mongoose.connection.on('error', function () {
  console.log('mongoDb connected fail.')
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

mongoose.connection.on('disconnected', function () {
  console.log('mongoDb connected disconnected.')
})

/**
 * 获取用户列表
 */
router.get('/userList', function (req, res, next) {
  console.log(req)
  console.log(res)
});

module.exports = router;
