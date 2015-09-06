/**
 * Error responses
 */

'use strict';

module.exports[404] = function pageNotFound(req, res) {
  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function(err) {
    if (err) { return res.json(result, result.status); }

    res.render(viewFilePath);
  });
};

module.exports[500] = function criticalError(err, req, res, next) {
  var result = {};

  if (err.stack) {
    console.error(err.stack);
    result.status = 500;
  } else {
    console.log(err);
    result = err;
  }

  res.status(result.status);

  if (req.is('json')) {
    res.send(result);
    return;
  }

  res.render(result.status, function(err) {
    if (err) { return res.status(result.status).json(result); }

    res.render(result.status);
  });
};
