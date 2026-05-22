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

const numbers = ["en", "to", "tre", "fire", "fem", "seks", "syv", "åtte", "ni", "ti"]

function forloop(){
    for (let i = 0; i < numbers.length; i++)
        document.getElementById('thing').innerHTML += numbers[i] + '<br>'
}

let roll

function tetradice(){
    roll = Math.floor(Math.random() * 4) + 1
    document.getElementById('p-lastroll').innerHTML = 'last roll: ' + roll
}

function traddice(){
    roll = Math.floor(Math.random() * 6) + 1
    document.getElementById('p-lastroll').innerHTML = 'last roll: ' + roll
}

function octadice(){
    roll = Math.floor(Math.random() * 8) + 1
    document.getElementById('p-lastroll').innerHTML = 'last roll: ' + roll
}

function decadice(){
    roll = Math.floor(Math.random() * 10) + 1
    document.getElementById('p-lastroll').innerHTML = 'last roll: ' + roll
}

function dodecadice(){
    roll = Math.floor(Math.random() * 12) + 1
    document.getElementById('p-lastroll').innerHTML = 'last roll: ' + roll
}

function icosadice(){
    roll = Math.floor(Math.random() * 20) + 1
    document.getElementById('p-lastroll').innerHTML = 'last roll: ' + roll
}