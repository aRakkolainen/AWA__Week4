
async function getRecipe() {
    let response = await fetch("http://localhost:3000/recipe/pizza")
    console.log(response);
//console.log(response.json())
}

getRecipe();