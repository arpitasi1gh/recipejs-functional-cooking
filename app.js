const recipes = [
    {id:1, title: "A_recipe_1", time: 45, difficulty: "medium", description: "It is a traditional North Indian Food of Punjab.", category: "curry", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:2, title: "D_recipe_2", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Ladakh.", category: "salad", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:3, title: "Y_recipe_3", time: 40, difficulty: "hard", description: "It is a general West Indian Food of Rajasthan.", category: "curry", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:4, title: "B_recipe_4", time: 35, difficulty: "medium", description: "It is a general Italian food of Italy.", category: "pasta", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:5, title: "E_recipe_5", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Uttar Pradesh.", category: "pasta", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:6, title: "X_recipe_6", time: 45, difficulty: "hard", description: "It is a traditional South Indian Food of Maharashtra.", category: "curry", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:7, title: "Z_recipe_7", time: 15, difficulty: "medium", description: "It is a general East Indian Food of Assam.", category: "salad", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:8, title: "C_recipe_8", time: 35, difficulty: "hard", description: "It is a general West Indian Food of Gujarat.", category: "pasta", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"}
]

let recipeContainer = document.querySelector("#recipe-container");

const createRecipeCard = (recipe) => {
    return `
    <div class="recipe-card ${recipe.difficulty}-card" data-id="${recipe.id}" data-time="${recipe.time}">
    <h3>${recipe.title}</h3>
    <div class="recipe-meta">
    <span>${recipe.time}min</span>
    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
    <p>${recipe.description}</p><br>
    <button class="steps show btn">Show Steps</button>
    <button class="ingredients show btn">Show Ingredients</button>
    <pre class="extra-content" style="display:none;"></pre>
    </div>
    </div>
    `
};

const renderRecipes = (recipes) => {
    const html = recipes.map(recipe => createRecipeCard(recipe)).join("");
    recipeContainer.innerHTML = html;
};

renderRecipes(recipes);

const filterBtns = document.createElement("div")
filterBtns.setAttribute("class", "filterBtns");
filterBtns.innerHTML = "Filter<br><button class='all btn'>All Recipes</button><br><button class='easy btn'>Easy Recipes</button><br><button class='medium btn'>Medium Recipes</button><br><button class='hard btn'>Hard Recipes</button><br><button class='quick btn'>Quick Recipes</button><br>";
document.body.appendChild(filterBtns);
const sortBtns = document.createElement("div")
sortBtns.setAttribute("class", "sortBtns");
sortBtns.innerHTML = "Sort<br><button class='name btn'>Name (A–Z)</button><br><button class='time btn'>Time (Fastest First)</button>";
document.body.appendChild(sortBtns);

filterBtns.addEventListener("click", (e) => {
if (!e.target.classList.contains("btn")) return; // e.target.tagName === "BUTTON" && 
const cards = document.querySelectorAll(".recipe-card");

  if (e.target.classList.contains("easy")) {
    cards.forEach(card => {
      card.style.display = card.classList.contains("easy-card")
        ? "block"
        : "none";
    });
  }
  else if (e.target.classList.contains("medium")) {
    cards.forEach(card => {
      card.style.display = card.classList.contains("medium-card")
        ? "block"
        : "none";
    });
  }
else if (e.target.classList.contains("hard")) {
    cards.forEach(card => {
      card.style.display = card.classList.contains("hard-card")
        ? "block"
        : "none";
    });
  }
else if (e.target.classList.contains("all")) {
    cards.forEach(card => {
      card.style.display = card.classList.contains("recipe-card")
        ? "block"
        : "none";
    });
  }
else if (e.target.classList.contains("quick")) {
    cards.forEach(card => {
      const time = Number(card.dataset.time);

      card.style.display = time < 30 ? "block" : "none";
    });
  }
});

sortBtns.addEventListener("click", (e) => {
if (!e.target.classList.contains("btn")) return; // e.target.tagName === "BUTTON" && 
const cards = document.querySelectorAll(".recipe-card");
if (e.target.classList.contains("name")) {
  const sortedByName = [...recipes].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  renderRecipes(sortedByName);
}
else if (e.target.classList.contains("time")) {
  const sortedByTimeDesc = [...recipes].sort((a, b) => {
    // return b.time - a.time;
    return a.time - b.time;
  });

  renderRecipes(sortedByTimeDesc);
}
});

recipeContainer.addEventListener("click", (e) => {
    if (!e.target.classList.contains("show")) return;

    const card = e.target.closest(".recipe-card");
    const recipeId = Number(card.dataset.id);
    const recipe = recipes.find(r => r.id === recipeId);
    const extraContent = card.querySelector(".extra-content");

    if (e.target.classList.contains("steps")) {
        extraContent.textContent = recipe.steps;
    }

    if (e.target.classList.contains("ingredients")) {
        extraContent.textContent = recipe.ingredients;
    }

    extraContent.style.display = "block";
});