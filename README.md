# recipejs-functional-cooking<br>
A functional programming approach to a recipe companion app<br><br>

Step A1: Set Up Your GitHub Repository<br>
i. Go to GitHub and sign in<br>
ii. Create a new repository:<br>
    · Click the "+" icon (top right) → "New repository"<br>
    · Repository name: recipejs-functional-cooking<br>
    · Description: "A functional programming approach to a recipe companion app"<br>
    · Visibility: Public (important for submission)<br>
    · Check "Add a README file"<br>
    · Click "Create repository"<br>
iii. Clone the repository to your local machine:<br>
    · git clone https://github.com/arpitasi1gh/recipejs-functional-cooking.git<br>
    · cd recipejs-functional-cooking<br><br>

Step A2: Create Project Files<br>
i. Create three files in your project folder:<br>
    · recipejs-functional-cooking/<br>
      ├── index.html<br>
      ├── style.css<br>
      └── app.js<br>
ii. Build the HTML Structure (index.html)<br>
iii. Style with CSS (style.css)<br>
iv. JavaScript Implementation (app.js)<br><br>

Step B1: Add Features<br>
1. Add Filter Buttons that show and update the recipe list immediately when clicked.<br>
   · All, Easy, Medium, Hard, Quick (Under 30 minutes)<br>
2. Add Sorting Buttons for: Name (A–Z), Time (Fastest First)<br>
3. Follow Functional Programming<br>
4. Create a Pull Request<br><br>

Step B1: Add Features<br>
1. Expandable Recipe Cards<br>
    · Add a “Show Steps” button on each recipe card<br>
    · Add a “Show Ingredients” button<br>
2. Update recipe objects to include: steps (array), ingredients (array)<br>
3. Recursive Rendering of Steps<br>
4. IIFE / Module Structure<br>
5. Event Handling<br>
6. Preserve Existing Features<br><br>

Step B1: Add Features<br>
1. Real-Time Search<br>
    · Add a search bar to search recipes by title and/or ingredients.<br>
    · Implement debouncing so search does not run on every keystroke.<br>
2. Favorites Feature<br>
    · Add a favorite (heart) button to each recipe card.<br>
    · Allow users to mark and unmark recipes as favorites.<br>
    · Persist favorite recipes using localStorage so they remain after refresh.<br>
    · Favorites-Only Filter<br>
    · Add an option to view only favorited recipes.<br>
3. Recipe Counter<br>
· Display how many recipes are currently shown (e.g., “Showing 3 of 8 recipes”).<br>
· Ensure it updates correctly when search, filters, or favorites are applied.<br>
· Code Cleanup & Final Polish
