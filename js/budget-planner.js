function updateTotalField() {

    // update on the html
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;

    // calculate total expenses
    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);

    const total = document.getElementById('total-expenses');
    total.innerText = totalExpenses;

    // calculate total balance
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);

    const totalBalance = incomeInput - totalExpenses;
    const totalSave = totalBalance * 20 / 100;
    const remainSave = totalBalance - totalSave;
    const balance = document.getElementById('total-balance');
    balance.innerText = totalBalance;
    const savingAmount = document.getElementById('saving-amount');
    const balanceRemain = document.getElementById('balance-remain');
    savingAmount.innerText = totalSave;
    balanceRemain.innerText = remainSave;

    if (foodInput != 'number' ||
        rentInput != 'number' ||
        clothInput != 'number' ||
        foodInput > 0 ||
        rentInput > 0 ||
        clothInput > 0
    ) {
        console.log('please enter number')
    } return;

}

document.getElementById('calculate-btn').addEventListener('click', function () {
    updateTotalField();
});




