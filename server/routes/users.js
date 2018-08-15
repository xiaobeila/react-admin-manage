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
 * 用户创建
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

/**
 * 用户编辑
 */
router.post('/edit', function (req, res, next) {
  //查询的条件
  var whereStr = { "_id": req.body._id }
  //更新的内容
  let updateStr = {
    $set: {
      username: req.body.username,
      sex: req.body.sex,
      state: req.body.state,
      interest: req.body.interest,
      phone: req.body.phone,
      address: req.body.address,
    }
  }
  User.update(whereStr, updateStr, function (err, doc) {
    if (err) {
      res.json({
        status: '400',
        msg: err.message,
        result: ''
      });
    } else {
      res.json({
        status: '200',
        msg: '',
        result: 'success'
      });
    }
  })
})

/**
* 用户删除
*/
router.post('/delete', function (req, res, next) {
  let userId = req.body._id;
  User.remove({
    "_id": userId
  }, function (err, doc) {
    if (err) {
      res.json({
        status: '400',
        msg: err.message,
        result: ''
      });
    } else {
      res.json({
        status: '200',
        msg: '',
        result: 'success'
      });
    }
  })
});

module.exports = router;
