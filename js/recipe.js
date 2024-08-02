// API Key
const apiKey = 'MY-API-KEY';

// Function to extract the recipe ID from the URL
function getRecipeIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to fetch and display recipe data
function fetchRecipeData(id) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'apikey': apiKey
        }
    };

    fetch(`https://api.apilayer.com/spoonacular/recipes/${id}/information?includeNutrition=true`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayRecipeData(data);
        })
        .catch(error => {
            console.error('Error fetching recipe data:', error);
        });
}

// Function to display recipe data
function displayRecipeData(recipe) {
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-description').innerHTML = recipe.summary;

    // Populate Ingredients Table
    const ingredientsTable = document.getElementById('ingredients-table');
    ingredientsTable.innerHTML = ''; // Clear existing data

    recipe.extendedIngredients.forEach(ingredient => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}" alt="${ingredient.name}" class="img-fluid" style="width: 50px;"></td>
            <td><a href="ingredient.html?id=${ingredient.id}">${ingredient.name}</a></td>
            <td>${ingredient.amount}</td>
            <td>${ingredient.measures.metric.unitShort}</td>
        `;
        ingredientsTable.appendChild(row);
    });
}

// Main logic to execute when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const recipeId = getRecipeIdFromUrl();
    if (recipeId) {
        fetchRecipeData(recipeId);
    } else {
        console.error('Recipe ID is missing in the URL.');
    }
});
