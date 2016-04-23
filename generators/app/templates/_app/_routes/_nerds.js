var express = require('express');
var router = express.Router();

// grab the nerd model we just created
var Nerd = require('../models/nerd');

router.get('/api/nerds', function (req, res, next) {
  // use mongoose to get all nerds in the database
  Nerd.find(function (err, nerds) {

    // if there is an error retrieving, send the error.
    // nothing after res.send(err) will execute
    if (err)
      res.send(err);

    res.json(nerds); // return all nerds in JSON format
  });
});

module.exports = router;
