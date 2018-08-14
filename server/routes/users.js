var express = require('express');
var router = express.Router();
var User = require('./../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/**
 * 获取用户列表
 */
router.get('/index', function (req, res, next) {
  User.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: '400',
        msg: err.message,
        result: ''
      });
    } else {
      if (doc) {
        res.json({
          status: '200',
          msg: '',
          result: {
            items: doc,
            page: 1,
            page_size: 10,
            total_count: doc.length
          }
        });
      }
    }
  })
});

/**
 * 用户编辑
 */
router.post('/store', function (req, res, next) {
  User.create(req.body, function (err, doc) {
    if (err) {
      res.json({
        status: '400',
        msg: err.message
      });
    } else {
      res.json({
        status: '200',
        msg: '',
        result: 'success'
      });
    }
  });
})

module.exports = router;
