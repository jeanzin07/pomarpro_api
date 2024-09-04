var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv= require('dotenv');
var cors = require('cors');

dotenv.config();

var app = express();
//configuração do CORS
app.use(cors({origin:['http://localhost:4200','http://127.0.0.1:4200']}))


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuario.route');
var materialRouter = require('./routes/material.route');
var produtoRouter = require('./routes/produto.route');
var pomarRouter = require('./routes/pomar.route');
var movimentoRouter = require('./routes/movimento.route');
var colheitaRouter = require('./routes/colheita.route');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usersRouter);
app.use('/material', materialRouter);
app.use('/produto', produtoRouter);
app.use('/pomar', pomarRouter);
app.use('/movimento', movimentoRouter);
app.use('/colheita', colheitaRouter)

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
