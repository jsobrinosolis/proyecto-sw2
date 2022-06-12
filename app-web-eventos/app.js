var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var lugaresRouter = require('./routes/lugares');
var organizadoresRouter = require('./routes/organizadores');
var eventosRouter = require('./routes/eventos');
var tiempoRouter = require('./routes/tiempo');
var lugaresPutRouter = require('./routes/lugaresPut');
var lugarRouter = require('./routes/lugar');
var lugarDeleteRouter = require('./routes/lugarDelete');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/lugares', lugaresRouter);
app.use('/organizadores', organizadoresRouter);
app.use('/eventos', eventosRouter);
app.use('/tiempo', tiempoRouter);
app.use('/lugaresPut', lugaresPutRouter);
app.use('/lugar', lugarRouter);
app.use('/lugarDelete', lugarDeleteRouter);



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
