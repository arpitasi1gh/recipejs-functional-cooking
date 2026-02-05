const recipes = [
    {id:1, title: "A_recipe_1", time: 45, difficulty: "medium", description: "It is a traditional North Indian Food of Punjab. It requires ingredients X,Y,Z and salt for taste.", category: "curry"},
    {id:2, title: "D_recipe_2", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Ladakh. It requires ingredients X,Y,Z and salt for taste.", category: "salad"},
    {id:3, title: "Y_recipe_3", time: 40, difficulty: "hard", description: "It is a general West Indian Food of Rajasthan. It requires ingredients X,Y,Z and salt for taste.", category: "curry"},
    {id:4, title: "B_recipe_4", time: 35, difficulty: "medium", description: "It is a general Italian food of Italy. It requires ingredients X,Y,Z and salt for taste.", category: "pasta"},
    {id:5, title: "E_recipe_5", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Uttar Pradesh. It requires ingredients X,Y,Z and salt for taste.", category: "pasta"},
    {id:6, title: "X_recipe_6", time: 45, difficulty: "hard", description: "It is a traditional South Indian Food of Maharashtra. It requires ingredients X,Y,Z and salt for taste.", category: "curry"},
    {id:7, title: "Z_recipe_7", time: 15, difficulty: "medium", description: "It is a general East Indian Food of Assam. It requires ingredients X,Y,Z and salt for taste.", category: "salad"},
    {id:8, title: "C_recipe_8", time: 35, difficulty: "hard", description: "It is a general West Indian Food of Gujarat. It requires ingredients X,Y,Z and salt for taste.", category: "pasta"}
]

let recipeContainer = document.querySelector("#recipe-container");

const createRecipeCard = (recipe) => {
    return `
    <div class="recipe-card ${recipe.difficulty}-card" data-id="${recipe.id}" data-time="${recipe.time}">
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