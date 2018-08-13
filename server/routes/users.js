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
router.get('/userList', function (req, res, next) {
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
            count: doc.length
          }
        });
      }
    }
  })
});

module.exports = router;
