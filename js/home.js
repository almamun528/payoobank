//! home Page js

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault()
   const inputValue = parseFloat(document.getElementById('input-add-money').value)
    const inputPinValue = document.getElementById('input-pin-number').value

   if(inputPinValue === '1234'){
        let myBalanceIsNow = parseFloat(document.getElementById('balanceAmount').innerText)
        let newBalanceIs = inputValue + myBalanceIsNow
        document.getElementById('balanceAmount').innerText = newBalanceIs
   }else{
    alert('Something went wrong ')
   }
});

