var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



let indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
let playersRouter = require('./routes/player.routes')
let teamRouter = require('./routes/team.routes');
let userTeamRouter = require('./routes/users.team.routes');
let leagueRouter = require('./routes/league.routes')
let cors = require('cors');
let passport = require('passport')
let User = require('./models/users');




let mongoose = require('mongoose')

let request = require('request')
let getData = require('./getStats')
let getValues = require('./getNewValues')
let newValues = require('./newValues')

var app = express();
app.use(cors())


//passport stuff
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/players', playersRouter)
app.use('/api/teams', teamRouter)
app.use('/api/user-teams', userTeamRouter)
app.use('/api/leagues', leagueRouter)


//conect mongoose

mongoose.connect(process.env.localDb,  { useNewUrlParser: true }, function(err, db){
  if(err) throw err
  console.log("connected to remote db");
  database=db

})

//make api request
//getData.makeRequest();  //get new player data
//getValues.getNew()
//newValues.getnew();
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
