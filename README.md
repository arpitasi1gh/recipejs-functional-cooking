# 🍳 RecipeJS – Functional Cooking

A recipe companion app built using **Vanilla JavaScript** with a strong focus on **Functional Programming principles**, clean architecture, and interactive UI features.

This project demonstrates how scalable, maintainable applications can be built without frameworks by applying pure functions, modular patterns, and state-driven rendering.

---

## 🚀 Live Demo

🔗 **Deployed Link:**  
👉 https://recipejs-functional-cooking.vercel.app

---

## 📸 Screenshots

<img width="1470" height="832" alt="Screenshot 2026-02-28 at 10 57 23 PM" src="https://github.com/user-attachments/assets/27633e08-d086-4b36-bbfe-65bf48b4461e" />
<img width="1371" height="836" alt="Screenshot 2026-02-28 at 11 13 57 PM" src="https://github.com/user-attachments/assets/66b3db75-6fd8-471b-b0da-deb9cdab7a07" />

---

## 📂 Project Structure
- recipejs-functional-cooking/
- │
- ├── index.html
- ├── style.css
- ├── app.js
- └── README.md

---

## 🧠 Core Concepts Applied

- Functional Programming approach
- Pure Functions
- Immutability patterns
- Higher-order functions
- Array methods (`map`, `filter`, `reduce`)
- IIFE / Module structure
- Debouncing
- Event Delegation
- State-driven rendering
- LocalStorage persistence

---

## ✨ Features

### 🔍 1. Real-Time Search (With Debounce)

- Search by recipe title
- Search by ingredients
- Debounced input for optimized performance

---

### 🧩 2. Filtering

Filter recipes by:

- All
- Easy
- Medium
- Hard
- Quick (Under 30 minutes)
- Favorites Only

Filters update instantly without page reload.

---

### 🔄 3. Sorting

Sort recipes dynamically by:

- Name (A–Z)
- Cooking Time (Fastest First)

---

### 📋 4. Expandable Recipe Cards

Each card includes:

- “Show Ingredients”
- “Show Steps”
- Recursive rendering of step lists
- Smooth dynamic updates

---

### ❤️ 5. Favorites System

- Mark / unmark recipes as favorite
- Stored in `localStorage`
- Favorites persist after refresh
- Dedicated Favorites filter

---

### 📊 6. Dynamic Recipe Counter

Displays real-time count:
Showing 3 of 8 recipes

Updates automatically when:

- Search changes
- Filters apply
- Sorting changes
- Favorites toggle

---

## 🛠 Development Breakdown

### Step A – Project Setup

- Created GitHub repository
- Designed base HTML structure
- Styled UI using CSS
- Implemented core JavaScript logic using functional programming principles

### Step B – Feature Expansion

- Implemented filtering & sorting system
- Built expandable recipe cards
- Applied recursive rendering for nested steps
- Used IIFE module pattern for scoped architecture
- Added real-time search with debouncing
- Implemented favorites system with localStorage persistence
- Added dynamic recipe counter
- Refactored and cleaned code for maintainability

---

## 🎯 Challenges Faced

- Maintaining immutability while updating UI state
- Preventing unnecessary re-renders
- Implementing efficient debouncing logic
- Managing multiple filters and sorting simultaneously
- Persisting UI state using localStorage

---

## 🚀 Future Improvements

- Add animations & transitions
- Add category tags
- Add recipe creation form
- Add dark mode
- Convert to React / Next.js version
- Connect to a backend API

---

## 📚 Learning Outcomes

Through this project, I strengthened my understanding of:

- Functional programming in frontend development
- State management without frameworks
- Writing scalable vanilla JavaScript
- Clean modular architecture
- Real-world UI feature integration

---

## 👩‍💻 Author

**Arpita Singh**

---

## 📌 Pull Request Workflow

All features were developed incrementally and merged via Pull Requests to simulate a collaborative development workflow.

---

## 📜 License

This project is built for educational purposes.
