document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-input');
    const depositeAmountString = depositeField.value;
    const depositeAmount = parseFloat(depositeAmountString);

    depositeField.value = '';

    if (isNaN(depositeAmount)) {
        alert('Plase input a valid number');
        return;
    }

    // deposite balance
    const currentDepositeTotal = document.getElementById('current-deposite');
    const previousDepositeTotalString = currentDepositeTotal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    currentDepositeTotal.innerText = previousDepositeTotal + depositeAmount;

    // balance total after deposite
    const currentBalanceTotal = document.getElementById('current-balance');
    const previousBalanceTotalString = currentBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    currentBalanceTotal.innerText = previousBalanceTotal + depositeAmount;


    
})


document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    withdrawField.value = '';

    if (isNaN(withdrawAmount)) {
        alert('Plase input a valid number');
        return;
    }

    // balance total after deposite
    const currentBalanceTotal = document.getElementById('current-balance');
    const previousBalanceTotalString = currentBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (withdrawAmount > previousBalanceTotal) {
        alert ('Your balance is low')
        return;
    }

    

    // withdraw balance
    const currentWithdrawTotal = document.getElementById('current-withdraw');
    const previousWithdrawTotalString = currentWithdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    currentWithdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    


    currentBalanceTotal.innerText = previousBalanceTotal - withdrawAmount;


})