var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});


// doesnt have next() because is sending/rendering a response

module.exports = router;
