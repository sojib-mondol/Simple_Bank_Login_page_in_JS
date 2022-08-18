document.getElementById('btn-withdrow').addEventListener('click', function(){
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);

    withdrowField.value = '';
    if(isNaN(newWithdrowAmount)) {
        alert("Pleas provide a valid number.")
        return;

    }

    const previousWithdrowElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = previousWithdrowElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);

    const balanceField = document.getElementById('balance-total');
    const previousBalanceString = balanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    
    if(previousBalance < newWithdrowAmount) {
        alert('Bap er taka nai');
        return;
    }

    const currentWithdrowAmount = newWithdrowAmount + previousWithdrowTotal;
    previousWithdrowElement.innerText = currentWithdrowAmount;

    const newBalance = previousBalance - newWithdrowAmount;
    balanceField.innerText = newBalance;

    
})