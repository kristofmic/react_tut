var
  path = require('path'),
  express = require('express'),
  timeout = require('connect-timeout'),
  favicon = require('serve-favicon'),
  compression = require('compression'),
  cookieParser = require('cookie-parser'),
  _ = require('lodash'),

  ENV = process.env.NODE_ENV || 'localhost',

  controllers = require('./controllers'),

  app = express();

// connect to Mongo
require('./db/connect');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use(compression());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(timeout(120000));

app.locals.env = ENV;

// dev config
if (ENV === 'development' || ENV === 'localhost') {
  console.log('setting development environment...');

  app.use(require('errorhandler')());
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  app.use(function(req, res, next) {
    console.log('\n' + req.method + ' ' + req.originalUrl);
    if (!_.isEmpty(req.params)) console.log('PARAMS: \n', req.params);
    if (!_.isEmpty(req.query)) console.log('QUERY: \n', req.query);
    if (!_.isEmpty(req.body)) console.log('BODY: \n', req.body);
    next();
  });
}

// init routes and controllers
controllers(app);

module.exports = app;
