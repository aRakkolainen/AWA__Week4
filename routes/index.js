var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Week4' });
});
//Task 1
router.get('/recipe/:food', function(req, res, next) {
  //let recipeName = req.params.food; 
  let recipe = req.body;
  //res.render('recipe', {title: req.body.name, ingredients: recipe.ingredients, instructions: recipe.instructions});
  res.send(recipe);
}, (req, res, next) => {
  res.render('index', {title: req.body.name, ingredients: recipe.ingredients, instructions: recipe.instructions})
})
router.post("/recipe/", function(req, res) {

})

module.exports = router;
