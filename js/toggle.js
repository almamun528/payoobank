// ! button switching 
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById("add-money-section").classList.add('hidden')
    document.getElementById('cashOut-Section').classList.remove('hidden')
})

document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById("add-money-section").classList.remove('hidden')
    document.getElementById('cashOut-Section').classList.add('hidden')
})