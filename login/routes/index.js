/* 
app.js에서 라우트를 처리할 때 app.get()나 app.post()함수를 사용
req는 http요청객체에 대한 정보이며, res는 http응답 객체에 대한 정보를 가짐
next는 다음 미들웨어를 연결할 때 필요한 인자이다.
res는 객체이므로 함수를 제공한다.
1) send() - 문자열 메세지만 출력으로 내보낼 수 있다
2) render() - 페이지 이름을 추가하여 **응답페이지를 지정할 수 있다.**
:요청을 받는 페이지와 응답을 받는 페이지가 다르다.(다르게할 수 있다.)
 응답페이지에 dataset을 섞어서 처리할 때 Handlebars를 사용할 수 있다.
 Handlebars를 사용하는 것 만으로 html태그와 js코드를 분리 할 수 있다.
 디자이너 혼란을 줄이고 오류감소
 WAS응답코드 500번은 서버측 오류이다.(서버측 처리한 결과에 데이터를 매핑하여 출력을 내보낸다.)
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '한빛미디어', pageName: 'home.ejs' });
});
/* http://localhost:3000/login */
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName :'auth/login.ejs'});
});
/* 도서검색화면 추가 */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색',pageName:'book/bookList.ejs' });
})
module.exports = router;
