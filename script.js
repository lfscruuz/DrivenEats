
function selectMeal(mealClass){

    const meal = document.querySelector(mealClass);
    const selectedMeal = document.querySelector('.highlight');
    const checkmark = selectedMeal.querySelector('.greenCheckmark');

    if (selectedMeal !== null){
        selectedMeal.classList.remove('highlight');
        meal.classList.remove('greenCheckmark')
    }

    console.log(meal)
    console.log(selectedMeal)
    console.log(checkmark)


    meal.classList.add('highlight');
    checkmark.classList.add('greenCheckmark')

    

    

}