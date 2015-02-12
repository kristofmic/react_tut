module.exports = function routeHandler(app) {
  app.use('/', require('./main'));
  app.use('/api', require('./api'));

  // Default route handler if nothing else matches
  app.use(function defaultRoute(req, res) {
    res.render('index');
  });
};

