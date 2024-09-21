//! home Page js

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault()
   const inputValue = parseFloat(document.getElementById('input-add-money').value)
    const inputPinValue = document.getElementById('input-pin-number').value
   console.log(inputValue , inputPinValue)
})