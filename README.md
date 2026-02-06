# recipejs-functional-cooking
A functional programming approach to a recipe companion app

Step A1: Set Up Your GitHub Repository
i. Go to GitHub and sign in
ii. Create a new repository: 
    · Click the "+" icon (top right) → "New repository"
    · Repository name: recipejs-functional-cooking
    · Description: "A functional programming approach to a recipe companion app"
    · Visibility: Public (important for submission)
    · Check "Add a README file"
    · Click "Create repository"
iii. Clone the repository to your local machine:
    · git clone https://github.com/YOUR-USERNAME/recipejs-functional-cooking.git
    · cd recipejs-functional-cooking

Step A2: Create Project Files
i. Create three files in your project folder:
    · recipejs-functional-cooking/
      ├── index.html
      ├── style.css
      └── app.js
ii. Build the HTML Structure (index.html)
iii. Style with CSS (style.css)
iv. JavaScript Implementation (app.js)

Step B1: Add Features
1. Add Filter Buttons that show and update the recipe list immediately when clicked.
   · All, Easy, Medium, Hard, Quick (Under 30 minutes)
2. Add Sorting Buttons for: Name (A–Z), Time (Fastest First)
3. Follow Functional Programming
4. Create a Pull Request

Step B1: Add Features
1. Expandable Recipe Cards
    · Add a “Show Steps” button on each recipe card
    · Add a “Show Ingredients” button
2. Update recipe objects to include: steps (array), ingredients (array)
3. Recursive Rendering of Steps
4. IIFE / Module Structure
5. Event Handling
6. Preserve Existing Features

Step B1: Add Features
1. Real-Time Search
    · Add a search bar to search recipes by title and/or ingredients.
    · Implement debouncing so search does not run on every keystroke.
2. Favorites Feature
    · Add a favorite (heart) button to each recipe card.
    · Allow users to mark and unmark recipes as favorites.
    · Persist favorite recipes using localStorage so they remain after refresh.
    · Favorites-Only Filter
    · Add an option to view only favorited recipes.
3. Recipe Counter
· Display how many recipes are currently shown (e.g., “Showing 3 of 8 recipes”).
· Ensure it updates correctly when search, filters, or favorites are applied.
· Code Cleanup & Final Polish