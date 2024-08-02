// API Key
const apiKey = 'MY-API-KEY';

// Function to extract the ingredient ID from the URL
function getIngredientIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to fetch and display ingredient data
function fetchIngredientData(id) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'apikey': apiKey
        }
    };

    fetch(`https://api.apilayer.com/spoonacular/food/ingredients/${id}/information`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayIngredientData(data);
        })
        .catch(error => {
            console.error('Error fetching ingredient data:', error);
        });
}

// Function to display ingredient data
function displayIngredientData(ingredient) {
    document.getElementById('ingredient-name').textContent = ingredient.name;
    document.getElementById('ingredient-image').src = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`;
    document.getElementById('ingredient-aisle').textContent = ingredient.aisle;
    document.getElementById('ingredient-category').textContent = ingredient.categoryPath.join(', ');
    document.getElementById('ingredient-consistency').textContent = ingredient.consistency;
    document.getElementById('ingredient-original').textContent = ingredient.originalName;

    // Populate Possible Units
    const unitsList = document.getElementById('possible-units');
    unitsList.innerHTML = ''; // Clear existing content

    ingredient.possibleUnits.forEach(unit => {
        const listItem = document.createElement('div');
        listItem.className = 'unit-item';
        listItem.textContent = unit;
        unitsList.appendChild(listItem);
    });
}

// Main logic to execute when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const ingredientId = getIngredientIdFromUrl();
    if (ingredientId) {
        fetchIngredientData(ingredientId);
    } else {
        console.error('Ingredient ID is missing in the URL.');
    }
});
