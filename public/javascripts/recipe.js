
if (document.readyState !== "loading") {
   fetchRecipe();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      fetchRecipe();
    });
  }

const fetchRecipe = async () => {
    let recipeName = "pizza"
    let ingredients = ["flour", "water", "salt", "yeast", "oil", "cheese", "tomatoes", "tomatosose", "ham", "pineapple"];
    let instructions = ["Prepare the pizza dough", "Place toppings", "Bake in 250 degrees for 15 minutes"]
    
    console.log(recipeName)
    console.log(ingredients)
    console.log(instructions)
    let response = await fetch("http://localhost:3000/recipe/pizza", 
    {method: "GET",  headers: {
        "Content-type": "application/json"
        }, 
        body: {
            "name": "pizza", 
            "instructions": ["Bake the dough", "Place the toppings", "Bake in the oven"], 
            "ingredients": ["flour", "yeast", "water", "cheese", "tomatoes", "ham", "ketchup", "pineapple"]
        }
})
console.log(response.json())
}
