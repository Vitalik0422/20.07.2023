var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//-------session
const session = require('express-session');
const MongoStore = require('connect-mongo');
const db = require('../storages/db');
const { server: serversConf } = require('../config');

//---------routes
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var authRouter = require('../routes/auth/index');

var app = express();

const sessionOptions = {
  secret: serversConf.sessionSet.secret,
  resave: serversConf.sessionSet.resave,
  saveUninitialized: serversConf.sessionSet.saveUninitialized,
  cookie: serversConf.sessionSet.cookie,
  store: MongoStore.create({
    client: db.getClient(), // Використовуємо об'єкт клієнта MongoDB
    dbName: "mongo", // назва бд
  })
};

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(session(sessionOptions))



app.use('/', indexRouter);
app.use('/auth', authRouter);


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
