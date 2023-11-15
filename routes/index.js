var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recipe/:food', function(req, res) {
  let recipeName = req.params.food; 
  let recipe = req.body;
  res.send(recipeName)
  //console.log(req.params.food);
  //console.log(req.body);
})

module.exports = router;
