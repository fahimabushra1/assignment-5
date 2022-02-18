function updateTotalField() {

    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;

    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);


    const total = document.getElementById('total-expenses');
    total.innerText = totalExpenses;


    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);

    const totalBalance = incomeInput - totalExpenses;
    const balance = document.getElementById('total-balance');
    balance.innerText = totalBalance;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    updateTotalField();



});




