"use strict";

var express = require('express');

var path = require('path');

var app = express();
app.use(express["static"](__dirname + '/assets'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', serveHomepage);

function serveHomepage(req, res) {
  return regeneratorRuntime.async(function serveHomepage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('homepage');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

;
var server = app.listen(8085, function () {
  console.log('Listening at http://%s:%s', server.address().address, server.address().port);
});