
async function getRecipe() {
    let response = await fetch("http://localhost:3000/recipe/pizza")
    let recipe = await response.json(); 
    console.log(recipe);
//console.log(response.json())
}