// Sample data for recipes (you can expand this or load from a JSON file)
const recipes = [
    {
        id: 1,
        title: "puranpoli",
        description: "Maharashtrian Dish",
        image: "images/carbonara.jpg",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g Pecorino cheese",
            "50g Parmesan cheese",
            "Freshly ground black pepper",
            "Salt",
            "Fresh parsley"
        ],
        instructions: "Cook spaghetti. Fry pancetta. Mix eggs and cheese. Combine with spaghetti and pancetta. Serve hot."
    },
    // More recipes...
];

// Function to display recipes
function displayRecipes() {
    const recipeGrid = document.getElementById('recipeGrid');
    recipeGrid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        </div>
    `).join('');
}

// Search functionality
document.getElementById('searchBar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm)
    );
    displayFilteredRecipes(filteredRecipes);
});

function displayFilteredRecipes(filteredRecipes) {
    const recipeGrid = document.getElementById('recipeGrid');
    recipeGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        </div>
    `).join('');
}

// Initial display of recipes
document.addEventListener('DOMContentLoaded', displayRecipes);
