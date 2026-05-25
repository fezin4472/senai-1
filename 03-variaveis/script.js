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

<<<<<<< HEAD
let roll, result
let totalrolls

=======
>>>>>>> 5b092bb2bd48b0d9aaebf4c884918de7822ce056
function resetrolls(){
    document.getElementById('p-rolls').innerHTML = "total rolls: 0"
}

<<<<<<< HEAD
function tetradice(){
    roll = Math.floor(Math.random() * 4) + 1;
    result = document.getElementById('p-random')
    result.innerHTML = 'last roll: ' + roll
}

function traddice(){
    roll = Math.floor(Math.random() * 6) + 1;
    result = document.getElementById('p-random')
    result.innerHTML = 'last roll: ' + roll
}

function octadice(){
    roll = Math.floor(Math.random() * 8) + 1;
    result = document.getElementById('p-random')
    result.innerHTML = 'last roll: ' + roll
}

function pentadice(){
    roll = Math.floor(Math.random() * 10) + 1;
    result = document.getElementById('p-random')
    result.innerHTML = 'last roll: ' + roll
}

function dodecadice(){
    roll = Math.floor(Math.random() * 12) + 1;
    result = document.getElementById('p-random')
    result.innerHTML = 'last roll: ' + roll
}

function icosadice(){
    roll = Math.floor(Math.random() * 20) + 1;
    result = document.getElementById('p-random')
    result.innerHTML = 'last roll: ' + roll
=======
const min = 1
let max

function tetradice(min, max){
    max = 4
    return Math.floor(Math.random() * (max - min + 1))
}

function tetradice(min, max){
    max = 4
    return Math.floor(Math.random() * (max - min + 1))
}

function tetradice(min, max){
    max = 4
    return Math.floor(Math.random() * (max - min + 1))
}

function tetradice(min, max){
    max = 4
    return Math.floor(Math.random() * (max - min + 1))
}

function tetradice(min, max){
    max = 4
    return Math.floor(Math.random() * (max - min + 1))
}

function tetradice(min, max){
    max = 4
    return Math.floor(Math.random() * (max - min + 1))
>>>>>>> 5b092bb2bd48b0d9aaebf4c884918de7822ce056
}