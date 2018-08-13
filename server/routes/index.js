var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/react_admin_manage');

mongoose.connection.on('connected', function () {
  console.log('mongoDb connected success.')
})

mongoose.connection.on('error', function () {
  console.log('mongoDb connected fail.')
})

mongoose.connection.on('disconnected', function () {
  console.log('mongoDb connected disconnected.')
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
