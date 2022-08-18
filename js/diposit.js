document.getElementById('btn-diposit').addEventListener('click', function(){
    const depositField = document.getElementById('diposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please provide a number');
        return;
    }
    

    const dipositTotalElement = document.getElementById('diposit-total');
    const priviousDipositTotalString = dipositTotalElement.innerText;
    const priviousDipositTotal = parseFloat(priviousDipositTotalString);
    
    const currentDipositTotal = newDepositAmount + priviousDipositTotal;
    dipositTotalElement.innerText = currentDipositTotal;
    
    
    
    
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceString = balanceTotalElement.innerText;
   const priviousBalnce = parseFloat(previousBalanceString);

   const currentBalanceTotal = priviousBalnce + newDepositAmount;
   balanceTotalElement.innerText = currentBalanceTotal;

   
})