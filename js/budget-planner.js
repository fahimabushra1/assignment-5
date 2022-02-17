function updateTotalField() {

    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;

    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);


    const total = document.getElementById('total-expenses');
    total.innerText = totalExpenses;

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    updateTotalField();
});
