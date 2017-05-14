var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Establezco la conexión de la base de datos
require('./lib/connectMongoose');
//Incluyo mi modelo
require('./models/Agente');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middlewar test
app.use( (req, res, next) => {
  console.log("Soy un middleware y estoy evaluando la petición: ", req.originalUrl); //Si no llamamos a next o res, se queda colgado aca
  next(); //Si llamo a next, sigue ejecutando los demas middlewars
  //res.send("Que tal?"); //Responde con este texto, entonces se termina porque express espera una respuesta por cada petición, entonces no sigue.
});

app.use('/',              require('./routes/index'));
app.use('/apiv1/agentes', require('./routes/apiv1/agentes.js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);

  //Devuelvo un error mas lindo con status si es un api req y no funcionó (por eso llegó aca)
  if (isAPI(req)) {
    res.json({success: false, error:err});
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

function isAPI(req) {
  return req.originalUrl.indexOf('/apiv') == 0;  //true si el req empieza con apiv o false sino
}

module.exports = app;
