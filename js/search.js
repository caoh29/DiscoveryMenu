const API_BASE_URL = "https://api.apilayer.com/spoonacular";
const API_KEY = "Y9tDaJwWiHJEDuIWpWlbBGlGZneygjcH";

const OPTIONS = [
  { value: 'addRecipeInformation', text: 'Add Recipe Information', resultDataType: 'boolean' },
  { value: 'addRecipeNutrition', text: 'Add Recipe Nutrition', resultDataType: 'boolean' },
  { value: 'author', text: 'Author', resultDataType: 'string' },
  { value: 'cuisine', text: 'Cuisine', resultDataType: 'string' },
  { value: 'diet', text: 'Diet', resultDataType: 'string' },
  { value: 'equipment', text: 'Equipment', resultDataType: 'string' },
  { value: 'excludeCuisine', text: 'Exclude Cuisine', resultDataType: 'string' },
  { value: 'excludeIngredients', text: 'Exclude Ingredients', resultDataType: 'string' },
  { value: 'fillIngredients', text: 'Fill Ingredients', resultDataType: 'boolean' },
  { value: 'ignorePantry', text: 'Ignore Pantry', resultDataType: 'boolean' },
  { value: 'includeIngredients', text: 'Include Ingredients', resultDataType: 'string' },
  { value: 'instructionsRequired', text: 'Instructions Required', resultDataType: 'boolean' },
  { value: 'intolerances', text: 'Intolerances', resultDataType: 'string' },
  { value: 'limitLicense', text: 'Limit License', resultDataType: 'boolean' },
  { value: 'maxAlcohol', text: 'Max Alcohol', resultDataType: 'integer' },
  { value: 'maxCaffeine', text: 'Max Caffeine', resultDataType: 'integer' },
  { value: 'maxCalcium', text: 'Max Calcium', resultDataType: 'integer' },
  { value: 'maxCalories', text: 'Max Calories', resultDataType: 'integer' },
  { value: 'maxCarbs', text: 'Max Carbs', resultDataType: 'integer' },
  { value: 'maxCholesterol', text: 'Max Cholesterol', resultDataType: 'integer' },
  { value: 'maxCholine', text: 'Max Choline', resultDataType: 'integer' },
  { value: 'maxCopper', text: 'Max Copper', resultDataType: 'integer' },
  { value: 'maxFat', text: 'Max Fat', resultDataType: 'integer' },
  { value: 'maxFiber', text: 'Max Fiber', resultDataType: 'integer' },
  { value: 'maxFluoride', text: 'Max Fluoride', resultDataType: 'integer' },
  { value: 'maxFolate', text: 'Max Folate', resultDataType: 'integer' },
  { value: 'maxFolicAcid', text: 'Max Folic Acid', resultDataType: 'integer' },
  { value: 'maxIodine', text: 'Max Iodine', resultDataType: 'integer' },
  { value: 'maxIron', text: 'Max Iron', resultDataType: 'integer' },
  { value: 'maxMagnesium', text: 'Max Magnesium', resultDataType: 'integer' },
  { value: 'maxManganese', text: 'Max Manganese', resultDataType: 'integer' },
  { value: 'maxPhosphorus', text: 'Max Phosphorus', resultDataType: 'integer' },
  { value: 'maxPotassium', text: 'Max Potassium', resultDataType: 'integer' },
  { value: 'maxProtein', text: 'Max Protein', resultDataType: 'integer' },
  { value: 'maxReadyTime', text: 'Max Ready Time', resultDataType: 'integer' },
  { value: 'maxSaturatedFat', text: 'Max Saturated Fat', resultDataType: 'integer' },
  { value: 'maxSelenium', text: 'Max Selenium', resultDataType: 'integer' },
  { value: 'maxSodium', text: 'Max Sodium', resultDataType: 'integer' },
  { value: 'maxSugar', text: 'Max Sugar', resultDataType: 'integer' },
  { value: 'maxVitaminA', text: 'Max Vitamin A', resultDataType: 'integer' },
  { value: 'maxVitaminB1', text: 'Max Vitamin B1', resultDataType: 'integer' },
  { value: 'maxVitaminB12', text: 'Max Vitamin B12', resultDataType: 'integer' },
  { value: 'maxVitaminB2', text: 'Max Vitamin B2', resultDataType: 'integer' },
  { value: 'maxVitaminB3', text: 'Max Vitamin B3', resultDataType: 'integer' },
  { value: 'maxVitaminB5', text: 'Max Vitamin B5', resultDataType: 'integer' },
  { value: 'maxVitaminB6', text: 'Max Vitamin B6', resultDataType: 'integer' },
  { value: 'maxVitaminC', text: 'Max Vitamin C', resultDataType: 'integer' },
  { value: 'maxVitaminD', text: 'Max Vitamin D', resultDataType: 'integer' },
  { value: 'maxVitaminE', text: 'Max Vitamin E', resultDataType: 'integer' },
  { value: 'maxVitaminK', text: 'Max Vitamin K', resultDataType: 'integer' },
  { value: 'maxZinc', text: 'Max Zinc', resultDataType: 'integer' },
  { value: 'minAlcohol', text: 'Min Alcohol', resultDataType: 'integer' },
  { value: 'minCaffeine', text: 'Min Caffeine', resultDataType: 'integer' },
  { value: 'minCalcium', text: 'Min Calcium', resultDataType: 'integer' },
  { value: 'minCalories', text: 'Min Calories', resultDataType: 'integer' },
  { value: 'minCarbs', text: 'Min Carbs', resultDataType: 'integer' },
  { value: 'minCholesterol', text: 'Min Cholesterol', resultDataType: 'integer' },
  { value: 'minCholine', text: 'Min Choline', resultDataType: 'integer' },
  { value: 'minCopper', text: 'Min Copper', resultDataType: 'integer' },
  { value: 'minFat', text: 'Min Fat', resultDataType: 'integer' },
  { value: 'minFiber', text: 'Min Fiber', resultDataType: 'integer' },
  { value: 'minFluoride', text: 'Min Fluoride', resultDataType: 'integer' },
  { value: 'minFolate', text: 'Min Folate', resultDataType: 'integer' },
  { value: 'minFolicAcid', text: 'Min Folic Acid', resultDataType: 'integer' },
  { value: 'minIodine', text: 'Min Iodine', resultDataType: 'integer' },
  { value: 'minIron', text: 'Min Iron', resultDataType: 'integer' },
  { value: 'minMagnesium', text: 'Min Magnesium', resultDataType: 'integer' },
  { value: 'minManganese', text: 'Min Manganese', resultDataType: 'integer' },
  { value: 'minPhosphorus', text: 'Min Phosphorus', resultDataType: 'integer' },
  { value: 'minPotassium', text: 'Min Potassium', resultDataType: 'integer' },
  { value: 'minProtein', text: 'Min Protein', resultDataType: 'integer' },
  { value: 'minSaturatedFat', text: 'Min Saturated Fat', resultDataType: 'integer' },
  { value: 'minSelenium', text: 'Min Selenium', resultDataType: 'integer' },
  { value: 'minSodium', text: 'Min Sodium', resultDataType: 'integer' },
  { value: 'minSugar', text: 'Min Sugar', resultDataType: 'integer' },
  { value: 'minVitaminA', text: 'Min Vitamin A', resultDataType: 'integer' },
  { value: 'minVitaminB1', text: 'Min Vitamin B1', resultDataType: 'integer' },
  { value: 'minVitaminB12', text: 'Min Vitamin B12', resultDataType: 'integer' },
  { value: 'minVitaminB2', text: 'Min Vitamin B2', resultDataType: 'integer' },
  { value: 'minVitaminB3', text: 'Min Vitamin B3', resultDataType: 'integer' },
  { value: 'minVitaminB5', text: 'Min Vitamin B5', resultDataType: 'integer' },
  { value: 'minVitaminB6', text: 'Min Vitamin B6', resultDataType: 'integer' },
  { value: 'minVitaminC', text: 'Min Vitamin C', resultDataType: 'integer' },
  { value: 'minVitaminD', text: 'Min Vitamin D', resultDataType: 'integer' },
  { value: 'minVitaminE', text: 'Min Vitamin E', resultDataType: 'integer' },
  { value: 'minVitaminK', text: 'Min Vitamin K', resultDataType: 'integer' },
  { value: 'minZinc', text: 'Min Zinc', resultDataType: 'integer' }
];


document.getElementById('add-filter-button').addEventListener('click', function () {
  const container = document.getElementById('filters-container');
  const filterGroup = document.createElement('div');
  filterGroup.className = 'filter-group';

  const select = document.createElement('select');

  OPTIONS.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.text = option.text;
    select.appendChild(opt);
  });

  const input = document.createElement('input');
  // Set the input type based on the selected option's data type
  select.addEventListener('change', function () {
    const selectedOption = OPTIONS.find(opt => opt.value === select.value);
    input.type = selectedOption.resultDataType === 'boolean' ? 'checkbox' : selectedOption.resultDataType === 'integer' ? 'number' : 'text';
  });

  input.type = 'text'; // Default type
  input.placeholder = 'Enter value';

  filterGroup.appendChild(select);
  filterGroup.appendChild(input);

  container.appendChild(filterGroup);
});


document.getElementById('query-button').addEventListener('click', async function () {
  const query = document.getElementById('query-input').value;
  const filters = document.getElementById('filters-container').children;

  let response;
  
  if (query.length === 0) {
    alert('Please enter a query');
    return;
  }
  
  if (filters.length === 0 && query.length > 0) {
    response = await fetch(`${API_BASE_URL}/recipes/complexSearch?query=${query}`, {
      headers: {
        "Content-Type": "application/json",
        "apikey": API_KEY
      }
    });
  } else {
    let url = `${API_BASE_URL}/recipes/complexSearch?query=${query}`;
  
    Array.from(filters).forEach(filter => {
      const filterType = filter.children[0].value;
      const filterValue = filter.children[1].value;
      url += `&${filterType}=${filterValue}`;
    });
    response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "apikey": API_KEY
      }
    });
  }

  const data = await response.json();
  setTableData(data.results);
  console.log(data.results);
})

const setTableData = (data) => {
  const tableBody = document.getElementById('recipes-table-body');
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = item.title;
    row.appendChild(nameCell);
    tableBody.appendChild(row);
  });
}
