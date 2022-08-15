let selectedMeal = document.querySelector('.meal .highlight');
let selectedBeverage = document.querySelector('.beverage .highlight');
let selectedDessert = document.querySelector('.dessert .highlight');


function selectMeal(mealClass){

    const meal = document.querySelector(mealClass);
    selectedMeal = document.querySelector('.meal .highlight');
    // const checkmark = selectedMeal.querySelector('.checkmark');

    if (selectedMeal !== null){
        selectedMeal.classList.remove('highlight');
        // meal.classList.remove('greenCheckmark');
    }
    meal.classList.add('highlight');
    // checkmark.classList.add('greenCheckmark');

    console.log(selectedMeal);

}

function selectBeverage(beverageClass){

    const beverage = document.querySelector(beverageClass);
    selectedBeverage = document.querySelector('.beverage .highlight');

    if (selectedBeverage !== null){
        selectedBeverage.classList.remove('highlight');
    }
    beverage.classList.add('highlight');

    console.log(selectedBeverage);
}

function selectDessert(dessertClass){

    const dessert = document.querySelector(dessertClass);
    selectedDessert = document.querySelector('.dessert .highlight');

    if (selectedDessert !== null){
        selectedDessert.classList.remove('highlight');
    }
    dessert.classList.add('highlight');

    console.log(selectedDessert);
}


function finalOrder(){
    const greyButton = document.querySelector('.greyButton');
    const greenButton = document.querySelector('.greenButton');

    if (selectedMeal && selectedBeverage && selectedDessert !== null){
        greenButton.classList.remove('hidden')
        greyButton.classList.add('hidden');
    }
}

