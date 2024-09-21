// ! cash Out Functionalities 

document.getElementById('cash-out').addEventListener('click', function(e){
    e.preventDefault()
    const myBalance = parseFloat(document.getElementById('balanceAmount').innerText)
    const inputCashOutValue = document.getElementById('input-cash-out').value 
    const inputCashoutPin = document.getElementById('input-cashout-pin').value 


    if(inputCashoutPin ==='1234'){
        let currentBalance = myBalance - inputCashOutValue
        document.getElementById('balanceAmount').innerText = currentBalance
    }else{
        alert('something went Wrong!')
    }

})