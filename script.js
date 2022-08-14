
function selectMeal(mealClass){

    const meal = document.querySelector(mealClass);
    const selectedMeal = document.querySelector('.meal .highlight');
    // const checkmark = selectedMeal.querySelector('.checkmark');

    if (selectedMeal !== null){
        selectedMeal.classList.remove('highlight');
        // meal.classList.remove('greenCheckmark')
    }
    meal.classList.add('highlight');
    // checkmark.classList.add('greenCheckmark')
}

function selectBeverage(beverageClass){

    const beverage = document.querySelector(beverageClass);
    const selectedBeverage = document.querySelector('.beverage .highlight');

    if (selectedBeverage !== null){
        selectedBeverage.classList.remove('highlight');
    }
    beverage.classList.add('highlight');
}

function selectDessert(dessertClass){

    const dessert = document.querySelector(dessertClass);
    const selectedDessert = document.querySelector('.dessert .highlight');

    if (selectedDessert !== null){
        selectedDessert.classList.remove('highlight');
    }
    dessert.classList.add('highlight');
}