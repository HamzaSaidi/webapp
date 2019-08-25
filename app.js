var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var authRouter=require('./routes/auth')
var app = express();
var passport = require('passport')
//configurating passport instance
require("./config/passport-config")(passport)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



////sesssion config
app.use(require('express-session')({
  name: 'sessionId',
  secret: "mysecretkeythatiwillnottellyou",
  saveUninitialized: false, // don't create sessions for not logged in users
  resave: false, //don't save session if unmodified


}))
/**
 * 
 * 
 * initialize passport
 * 
 */
app.use(passport.initialize())
app.use(passport.session())
 
app.use('/users', usersRouter);
app.use('/auth',authRouter)







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
