var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',function(req,res) {
  res.send('hello world')
})
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
