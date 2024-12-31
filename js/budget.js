
// calculate player expense

document.getElementById('calculate-player-expenses').addEventListener("click", function () {

    const perPlayerExpense = getInputValueByUsingId('budget-per-player');

    let playerInList = document.getElementById('player-list').childElementCount;
    const newPlayerExpenses = perPlayerExpense * playerInList;

    if (isNaN(newPlayerExpenses)) {
        return;
    }

    const previousPlayerExpensesElement = document.getElementById('player-expense');

    previousPlayerExpensesElement.innerText = newPlayerExpenses;

});

// calculate total expenses 
document.getElementById('calculate-total-expense').addEventListener("click", function () {

    const previousPlayerExpensesElement = document.getElementById('player-expense');
    const previousPlayerExpensesString = previousPlayerExpensesElement.innerText;
    const PlayerExpenses = parseFloat(previousPlayerExpensesString);

    const managerExpense = getInputValueByUsingId('manager-expanse');

    const coachExpense = getInputValueByUsingId('coach-expense');

    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        return;
    }


    const newTotalExpenses = PlayerExpenses + managerExpense + coachExpense;

    const previousTotalExpensesElement = document.getElementById('total-expense');

    previousTotalExpensesElement.innerText = newTotalExpenses;

});