
async function getRecipe() {
    let response = await fetch("http://localhost:3000/recipe/pizza")
    let recipe = await response.json(); 
    //console.log(recipe)
    return recipe
//console.log(response.json())
}
async function addNewRecipe() {
    //Finding elements: 
    const newRecipeName = document.getElementById("name-text");
    const newIngredient = document.getElementById("ingredients-text");
    const newInstruction = document.getElementById("instructions-text");
    const addIngredientBtn = document.getElementById("add-ingredient");
    const addInstructionBtn = document.getElementById("add-instruction");
    const submitBtn = document.getElementById("submit");
    // Lists for ingredients and instructions
    let ingredients = []; 
    let instructions = []; 

    // Checking whether new ingredient is added: 
    addIngredientBtn.addEventListener("click", () => {
        if (newIngredient.value !== "") {
            if (ingredients.indexOf(newIngredient.value) == -1) {
                ingredients.push(newIngredient.value)
                console.log("New ingredient added!")
            }
        }
    })

    addInstructionBtn.addEventListener("click", () => {
        if (newInstruction.value != "" && instructions.indexOf(newInstruction.value) == -1) {
            instructions.push(newInstruction.value);
            console.log("New instruction added!")
        } 
    })

    submitBtn.addEventListener("click", async () => {
        if (newRecipeName.value !== "" && ingredients.length != 0 && instructions.length != 0 ) {
            let recipe = {
                "name": newRecipeName.value,
                "instructions": instructions,  
                "ingredients": ingredients
            }
            let response = await fetch("http://localhost:3000/recipe/", {method: 'POST',
            headers: {
            "Content-type": "application/json"
             }, 
            body: JSON.stringify(recipe)
           });
           let data = await response.json(); 
           console.log(data);
        }

        sendImages()
    })

}

async function sendImages() {
    const imageInput = document.getElementById("image-input");
    let images_temp = imageInput.files;
    let images = []
    for (let i=0; i < images_temp.length; i++) {
        images.push(images_temp[i].name)
    }
    //console.log(images[0].name)
    //Example how to use formData: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects
    //Sending FormData: https://medium.com/deno-the-complete-reference/sending-form-data-using-fetch-in-node-js-8cedd0b2af85
    let imageData = new FormData();
    imageData.append("images", images);
    let body = imageData;
    let response = await fetch("http://localhost:3000/images", {method: "POST", body,});
    let text = await response.text(); 
    console.log(text);
}
function renderPage(recipe) {
    let nameItem = document.getElementById("recipe-name");
    let ingredientsList = recipe.ingredients; 
    let instructionsList = recipe.instructions; 
    nameItem.innerText = recipe.name;
    let Ing_list = document.getElementById("ingredients-list");
    ingredientsList.forEach(ingredient => {
        let item = document.createElement("li");
        item.innerText = ingredient; 
        Ing_list.appendChild(item);
    });

    let Inst_list = document.getElementById("instructions-list");
    instructionsList.forEach(instruction => {
        let item = document.createElement("li");
        item.innerText =instruction; 
        Inst_list.appendChild(item);
    });
    //body.appendChild(Ing_list);
}
window.onload = async function() {
    //Task 1
    let recipe = await getRecipe()
    renderPage(recipe)
    
    
    addNewRecipe();


}