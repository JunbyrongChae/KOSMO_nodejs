var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 회원가입 추가 */
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'users/join.ejs' });
});
/* cart */
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName: 'users/cart.ejs' });
});
/* mypage */
router.get('/mypage', function(req, res, next) {
  res.render('index', { title: '회원정보', pageName: 'users/mypage.ejs' });
});
/* mypag-update */
router.get('/update', function(req, res, next) {
  res.render('index', { title: '회원정보수정', pageName: 'users/update.ejs' });
});

module.exports = router;
