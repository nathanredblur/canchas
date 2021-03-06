/**
 * Main application routes
 */

'use strict';

// API to expose
require('./api/manager');

var errors = require('./components/errors');
var baucis = require('baucis');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  // Add baucis routes
  app.use('/api', baucis());

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.use('', require('./components/endpoints'));

  app.get('/*', function(req, res) {
    res.status(404);
    res.render(404);
  });

  // Log the error
  app.use(errors[500]);
};
