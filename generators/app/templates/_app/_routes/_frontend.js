var express = require('express');
var router = express.Router();

// route to handle all angular requests
router.get('*', function (req, res, next) {
  res.sendfile('./public/views/index.html'); // load our public/index.html file
});

module.exports = router;
