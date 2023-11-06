var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function (req,res) {
  res.send('got a POST req')
})
router.put('/',function(req,res) {
  res.send('got a PUT req')
})
router.delete('/',function(req,res) {
  res.send('got a DELETE req')
})
module.exports = router;
