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

function licenseandregistration(){
    let thing = Number(document.getElementById('inputsell').value)

    alert(thing)
}