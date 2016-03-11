var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  res.send('get bin ' + req.params.id);
});

router.post('/', function(req, res, next) {
  res.send('add a bin');
});

router.put('/:id', function(req, res, next) {
  res.send('update bin ' + req.params.id);
});

router.delete('/:id', function(req, res, next) {
  res.send('remove bin ' + req.params.id);
});




module.exports = router;