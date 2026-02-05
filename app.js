const recipes = [
    {id:1, title: "recipe_1", time: 45, difficulty: "medium", description: "It is a traditional North Indian Food of Punjab. It requires ingredients X,Y,Z and salt for taste.", category: "curry"},
    {id:2, title: "recipe_2", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Ladakh. It requires ingredients X,Y,Z and salt for taste.", category: "salad"},
    {id:3, title: "recipe_3", time: 40, difficulty: "hard", description: "It is a general West Indian Food of Rajasthan. It requires ingredients X,Y,Z and salt for taste.", category: "curry"},
    {id:4, title: "recipe_4", time: 35, difficulty: "medium", description: "It is a general Italian food of Italy. It requires ingredients X,Y,Z and salt for taste.", category: "pasta"},
    {id:5, title: "recipe_5", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Uttar Pradesh. It requires ingredients X,Y,Z and salt for taste.", category: "pasta"},
    {id:6, title: "recipe_6", time: 45, difficulty: "hard", description: "It is a traditional South Indian Food of Maharashtra. It requires ingredients X,Y,Z and salt for taste.", category: "curry"},
    {id:7, title: "recipe_7", time: 15, difficulty: "easy", description: "It is a general East Indian Food of Assam. It requires ingredients X,Y,Z and salt for taste.", category: "salad"},
    {id:8, title: "recipe_8", time: 35, difficulty: "medium", description: "It is a general West Indian Food of Gujarat. It requires ingredients X,Y,Z and salt for taste.", category: "pasta"}
]

let recipeContainer = document.querySelector("#recipe-container");

const createRecipeCard = (recipe) => {
    return `
    <div class="recipe-card" data-id="${recipe.id}">
    <h3>${recipe.title}</h3>
    <div class="recipe-meta">
    <span>${recipe.time}min</span>
    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
    <p>${recipe.description}</p>
    </div>
    </div>
    `
};

const renderRecipes = (recipes) => {
    // Inside the function:
    // Use'-map ()' method to transform each recipe into HTML using 'createRecipeCard ()'
    // Use '.join('')' to combine all HTML strings into one
    // Set the 'innerHTML' of recipeContainer' to the combined HTML
    const html = recipes.map(recipe => createRecipeCard(recipe)).join("");
    recipeContainer.innerHTML = html;
};

renderRecipes(recipes);