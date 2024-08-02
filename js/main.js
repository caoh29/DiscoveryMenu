const API_BASE_URL = "https://api.apilayer.com/spoonacular";
const API_KEY = "Y9tDaJwWiHJEDuIWpWlbBGlGZneygjcH";

document.getElementById('add-filter-button').addEventListener('click', function () {
    const container = document.getElementById('filters-container');
    const filterGroup = document.createElement('div');
    filterGroup.className = 'filter-group';

    const select = document.createElement('select');
    const option1 = document.createElement('option');
    option1.value = 'ingredient';
    option1.text = 'Ingredient';
    const option2 = document.createElement('option');
    option2.value = 'time';
    option2.text = 'Cooking Time';
    const option3 = document.createElement('option');
    option3.value = 'difficulty';
    option3.text = 'Difficulty';
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter value';

    filterGroup.appendChild(select);
    filterGroup.appendChild(input);

    container.appendChild(filterGroup);
});


document.getElementById('query-button').addEventListener('click', async function () {
    const query = document.getElementById('query-input').value;

    const filters = document.getElementById('filters-container').children;

    if (filters.length == 0 && query.length > 0) {
        const response = await fetch(`${API_BASE_URL}/recipes/complexSearch?query=${query}`, {
            headers: {
                "Content-Type": "application/json",
                "apikey": API_KEY
            }
        });
        const data = await response.json();
        console.log(data);
        return;
    }

    let url = `${API_BASE_URL}/recipes/complexSearch?query=${query}`;

    Array.from(filters).forEach(filter => {
        const filterType = filter.children[0].value;
        const filterValue = filter.children[1].value;
        url += `&${filterType}=${filterValue}`;
    });
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "apikey": API_KEY
        }
    });
    const data = await response.json();
    console.log(data);
})