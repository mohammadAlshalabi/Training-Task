"use strict";

var express = require('express');

var path = require('path');

var app = express();
app.use(express["static"](__dirname + '/assets'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', function (res, req) {
  req.render('homepage');
});
var server = app.listen(8085, function () {
  console.log('Listening at http://%s:%s', server.address().address, server.address().port);
});