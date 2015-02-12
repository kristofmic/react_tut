var
  mongoose = require('mongoose'),
  _ = require('lodash'),
  util = require('util'),
  ENV = process.env.NODE_ENV,
  dbName = 'react-tut',
  hosts = ['localhost'],
  dbConnection;

require('colors');

if (ENV === 'localhost' || ENV === 'test') {
  dbName += '-' + ENV;
}

console.log(('MongoDB Database set to ' + dbName + '.').cyan);

dbConnection = _.map(hosts, formatHostURL).join(',');
mongoose.connect(dbConnection, onConnect);

console.log(('MongoDB hosts set to ' + hosts + '.').cyan);

function formatHostURL(host) {
  return util.format('mongodb://%s/%s', host, dbName);
}

function onConnect(err) {
  if (err) {
    console.log(('Error connecting to Mongo - ').cyan + err);
  }
  else {
    console.log(('Connected web server to Mongo').cyan);
  }
}

