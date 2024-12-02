var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '한빛미디어',pageName:'home.ejs' });
});
/* 로그인화면 추가 */
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인',pageName:'auth/login.ejs' });
})
/* 도서검색화면 추가 */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색',pageName:'book/bookList.ejs' });
})
/* 클라우드 서비스를 활용한 게시판 추가 */
router.get('/posts', function(req, res, next) {
  res.render('index', { title: '게시판',pageName:'posts/list.ejs' });
})
router.get('/posts/write', function(req, res, next) {
  res.render('index', { title: '글쓰기',pageName:'posts/write.ejs' });
})
router.get('/posts:id', function(req, res, next) {
  let id = req.params.id
  res.render('index', { title: '상세보기',pageName:'posts/read.ejs',id:id });
})
router.get('/posts/update/:id', function(req, res, next) {
  let id = req.params.id
  res.render('index', { title: '글수정',pageName:'posts/update.ejs',id:id });
})
module.exports = router;
