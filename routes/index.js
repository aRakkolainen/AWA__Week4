var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Week4' });
});
//Task 1
/*router.get('/recipe/:food', function(req, res) {
  //let recipeName = req.params.food; 
  let recipe = req.body;
  //How to send and render at same time: https://expressjs.com/en/guide/using-middleware.html
  //res.render('recipe', {title: req.body.name, ingredients: recipe.ingredients, instructions: recipe.instructions});
  //res.render('recipe', {title: req.body.name, ingredients: recipe.ingredients, instructions: recipe.instructions})
  res.send(recipe)
})*/

router.get('/recipe/:food', function(req, res) {
  let recipe = {
    "name": req.params.food,
    "instructions": ["Bake the dough", "Place the toppings", "Bake in the oven"],
    "ingredients": ["flour", "yeast", "water", "cheese", "tomatoes", "ham", "ketchup", "pineapple"]
  }
  res.send(recipe)
})
router.post("/recipe/", function(req, res) {
  let newRecipe = req.body; 
  res.send(newRecipe) 

})

router.post("/images", function(req, res) {
  res.send("Images received!");
})

module.exports = router;
