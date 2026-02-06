/***********************
 * DATA
 ***********************/
const recipes = [
    {id:1, title: "A_recipe_1", time: 45, difficulty: "medium", description: "It is a traditional North Indian Food of Punjab.", category: "curry", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:2, title: "D_recipe_2", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Ladakh.", category: "salad", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Dal\n2. Salt\n3. Spices"},
    {id:3, title: "Y_recipe_3", time: 40, difficulty: "hard", description: "It is a general West Indian Food of Rajasthan.", category: "curry", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:4, title: "B_recipe_4", time: 35, difficulty: "medium", description: "It is a general Italian food of Italy.", category: "pasta", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Pepper\n2. Salt\n3. Rice"},
    {id:5, title: "E_recipe_5", time: 15, difficulty: "easy", description: "It is a general North Indian Food of Uttar Pradesh.", category: "pasta", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:6, title: "X_recipe_6", time: 45, difficulty: "hard", description: "It is a traditional South Indian Food of Maharashtra.", category: "curry", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Salt\n3. Spices"},
    {id:7, title: "Z_recipe_7", time: 15, difficulty: "medium", description: "It is a general East Indian Food of Assam.", category: "salad", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Water\n2. Pulses\n3. Sugar"},
    {id:8, title: "C_recipe_8", time: 35, difficulty: "hard", description: "It is a general West Indian Food of Gujarat.", category: "pasta", steps: "Step 1: Add 1 teaspoon of xyz in abc bowl with water.\nStep 2: Mix well and cook lightly on the stove for qpr minutes.\nStep 3: Ready to serve!", ingredients: "1. Pulses\n2. Salt\n3. Spices"}
]

/***********************
 * STATE
 ***********************/
const FAVORITES_KEY = "favoriteRecipes";
let favoriteIds = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
let currentRecipes = [...recipes];

/***********************
 * HELPERS
 ***********************/
function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/***********************
 * DOM REFERENCES
 ***********************/
const recipeContainer = document.querySelector("#recipe-container");

/***********************
 * RENDERING
 ***********************/
function createRecipeCard(recipe) {
  const isFav = favoriteIds.includes(recipe.id);

  return `
    <div class="recipe-card ${recipe.difficulty}-card" data-id="${recipe.id}">
      <div class="card-header">
        <h3>${recipe.title}</h3>
        <button class="fav-btn">${isFav ? "❤️" : "🤍"}</button>
      </div>

      <p>${recipe.description}</p>

      <div class="meta">
        <span>${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>

      <button class="btn steps show">Show Steps</button>
      <button class="btn ingredients show">Show Ingredients</button>

      <pre class="extra-content" style="display:none;"></pre>
    </div>
  `;
}

function renderRecipes(list) {
  if (list.length === 0) {
    recipeContainer.innerHTML = "<p>No recipes found 🍽️</p>";
    return;
  }
  recipeContainer.innerHTML = list.map(createRecipeCard).join("");
}

/***********************
 * FILTER + SORT UI
 ***********************/
const filterBtns = document.createElement("div");
filterBtns.className = "filterBtns";
filterBtns.innerHTML = `
  Filter<br>
  <button class="btn all">All</button>
  <button class="btn easy">Easy</button>
  <button class="btn medium">Medium</button>
  <button class="btn hard">Hard</button>
  <button class="btn quick">Quick (&lt;30min)</button>
`;
document.body.appendChild(filterBtns);

const sortBtns = document.createElement("div");
sortBtns.className = "sortBtns";
sortBtns.innerHTML = `
  Sort<br>
  <button class="btn name">Name (A–Z)</button>
  <button class="btn time">Time (Fastest)</button>
`;
document.body.appendChild(sortBtns);

/***********************
 * FILTER LOGIC
 ***********************/
filterBtns.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;

  if (e.target.classList.contains("all")) {
    currentRecipes = [...recipes];
  } else if (e.target.classList.contains("easy")) {
    currentRecipes = recipes.filter(r => r.difficulty === "easy");
  } else if (e.target.classList.contains("medium")) {
    currentRecipes = recipes.filter(r => r.difficulty === "medium");
  } else if (e.target.classList.contains("hard")) {
    currentRecipes = recipes.filter(r => r.difficulty === "hard");
  } else if (e.target.classList.contains("quick")) {
    currentRecipes = recipes.filter(r => r.time < 30);
  }

  renderRecipes(currentRecipes);
});

/***********************
 * SORT LOGIC
 ***********************/
sortBtns.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;

  if (e.target.classList.contains("name")) {
    currentRecipes.sort((a, b) => a.title.localeCompare(b.title));
  } else if (e.target.classList.contains("time")) {
    currentRecipes.sort((a, b) => a.time - b.time);
  }

  renderRecipes(currentRecipes);
});

/***********************
 * CARD INTERACTIONS
 ***********************/
recipeContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".recipe-card");
  if (!card) return;

  const id = Number(card.dataset.id);
  const recipe = recipes.find(r => r.id === id);

  // Favorite
  if (e.target.classList.contains("fav-btn")) {
    favoriteIds.includes(id)
      ? favoriteIds = favoriteIds.filter(fid => fid !== id)
      : favoriteIds.push(id);

    saveFavorites();
    renderRecipes(currentRecipes);
    return;
  }

  // Steps / Ingredients
  if (e.target.classList.contains("show")) {
    const extra = card.querySelector(".extra-content");
    extra.textContent = e.target.classList.contains("steps")
      ? recipe.steps
      : recipe.ingredients;
    extra.style.display = "block";
  }
});

/***********************
 * SEARCH
 ***********************/
const searchBox = document.createElement("div");
searchBox.className = "searchBox";
searchBox.innerHTML = `<input id="searchInput" placeholder="Search recipes..." />`;
document.querySelector("header").appendChild(searchBox);

const searchInput = document.querySelector("#searchInput");

const handleSearch = debounce((e) => {
  const q = e.target.value.toLowerCase().trim();

  currentRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.ingredients.toLowerCase().includes(q)
  );

  renderRecipes(currentRecipes);
}, 300);

searchInput.addEventListener("input", handleSearch);

/***********************
 * INIT
 ***********************/
renderRecipes(currentRecipes);