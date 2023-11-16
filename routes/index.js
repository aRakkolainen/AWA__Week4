var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Week4' });
});

router.get('/recipe/:food', function(req, res) {
  let recipeName = req.params.food; 
  let recipe = req.body;
  res.render('recipe', {title: recipeName, ingredients: recipe.ingredients, instructions: recipe.instructions});
})

router.post("/recipe/", function(req, res) {

})

module.exports = router;
