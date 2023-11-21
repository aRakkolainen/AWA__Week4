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
  //console.log(req.params.food)
  //How to send and render at same time: https://expressjs.com/en/guide/using-middleware.html
  //res.send(req.body)
  let recipe = {
    "name": req.params.food,
    "instructions": ["Bake the dough", "Place the toppings", "Bake in the oven"],
    "ingredients": ["flour", "yeast", "water", "cheese", "tomatoes", "ham", "ketchup", "pineapple"]
  }
  //res.send(recipe);
  res.send(recipe)
  //res.render("index", {title: recipe.name, instructions: recipe.instructions, ingredients: recipe.ingredients})
})
router.post("/recipe/", function(req, res) {
  //let newRecipe = 

})

module.exports = router;
