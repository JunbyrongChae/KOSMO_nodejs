/* 
웹 어플리케이션을 위한 기본적인 설정
- 모듈을 로딩(require)하고 템플릿(ejs,handlebars)엔진을 설정하며
라우트를 설정한다.
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*
라우트 설정하기
require()함수를 사용하며, 로딩한 함수들을 지정된 변수로 사용할 수  있게 해줌
사용자 정의 모듈을 사용 할 때 .js는 작성하지 않음
 */

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//익스프레스 객체를 app변수로 선언. 앞으로는 qpp을 통해 익스프레스 함수를 호출할 수 있다.
var app = express();

// view engine setup-템플릿관련 설정 부분
//app으로 set함수를 호출할 수 있다.
//화면과 로직은 분리되어야 한다.-mvc패턴 시작
//View계층
//Model계층(데이터처리+업무프로세스처리)-비즈니스 로직
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//지정된 인자(파라미터)를 실행하는 함수
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* 
정적페이지(리소스-resources)물리적인 배포 위치
이미지, javascript, css
html대신 ejs사용
왜? - inclsude
html코드와 js코드를 섞어 쓸 수 있다.(js의 역할은 백엔드의 포지션을 말함)
확장자가 ejs인것만 화면으로 출력 가능
*/
app.use(express.static(path.join(__dirname, 'public')));
//라우터를 설정하는 코드. 여기서 말하는 라우터는 url경로의 뒷부분을 말함
//그래서 '/'와 관련된 라우트는 routes/index.js에 설정된 함수를 통해 처리
app.use('/', indexRouter);
//users파일에 작성된 라우트 함수를 통해 처리
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
