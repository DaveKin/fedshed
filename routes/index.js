var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('edit', { title: 'FEDShed' });
});

router.post('/process', function(req, res, next){
    console.log(req.body);

    res.send('processing...');
});

module.exports = router;
