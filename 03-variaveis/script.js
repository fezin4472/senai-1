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

function resetrolls(){
    document.getElementById('p-rolls').innerHTML = "total rolls: 0"
}

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
}