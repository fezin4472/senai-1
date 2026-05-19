let number = 0

function addition(){
    number += 1
    document.getElementById('p-count').innerHTML = number
}
function substraction(){
    number -= 1
    document.getElementById('p-count').innerHTML = number
}
function multiplication(){
    number *= 2
    document.getElementById('p-count').innerHTML = number
}
function division(){
    number /= 2
    document.getElementById('p-count').innerHTML = number
}

let total = 0
function licenseandregistration(){
    let thing = Number(document.getElementById('inputsell').value)
    
    total = total + thing

    document.getElementById('list').innerHTML += 'R$' + thing.toFixed(2) + '<br>'

    document.getElementById('p-total').innerHTML = 'R$' + total.toFixed(2)
    document.getElementById('inputsell').value = ''
}