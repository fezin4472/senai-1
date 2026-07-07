function notext(){
    document.getElementById('text').innerHTML = " "
}

let i = 0

function exerciseone(){
    let square
    for(i = 1; i <= 10; i++){
        square = i * i
        document.getElementById('text').innerHTML += square + "<br>"
    }
}

function exercisetwo(){
    for(i = 10; i >= 1; i--){
        document.getElementById('text').innerHTML += i + "<br>"
    }
}

function exercisethree(){
    let total
    for(i = 1; i <= 100; i++){
        total += i
        document.getElementById('text').innerHTML = total
    }
}

function exercisefour(){
    let five
    for(i = 1; i <= 10; i++){
        five = i * 5
        document.getElementById('text').innerHTML += five + "<br>"
    }
}

function exercisefourmod(){
    let given = Number(prompt("bote um numero"))
    let tabuada
    for(i = 1; i <= 10; i++){
        tabuada = i * given
        document.getElementById('text').innerHTML += tabuada + "<br>"
    }
}

function exercisesix(){
    let impar
    for(i = 0.5; i < 10; i++){
        impar = i * 2
        document.getElementById('text').innerHTML += impar + "<br>"
    }
}

function exerciseseven(){
    for(i = 1; i <= 10; i++){}
}

function exerciseeight(){
    let fatorial = Number(prompt("digite um numero"))
    let resultado = 1
    for(i = 1; i <= fatorial; i++){
        resultado *= i
        document.getElementById('text').innerHTML = resultado
    }
}

function exercisenine(){
    for(i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            document.getElementById('text').innerHTML += "FizzBuzz"
        }else if(i % 3 === 0){
            document.getElementById('text').innerHTML += "Fizz"
        }else if(i % 5 === 0){
            document.getElementById('text').innerHTML += "Buzz"
        }
        document.getElementById('text').innerHTML += i + "<br>"
    }
}

function exerciseten(){
    for(i = 1; i <= 10; i++){
    }
}

function exerciseeleven(){
    let serie
    for(i = 1; i <= 10; i++){
        serie = 1 / i
        document.getElementById('text').innerHTML = serie + "<br>"
    }
}

function exercisetwelve(){
    const numbah = [];
    alert("antes de você dar uma lista de numeros, vai no google e digite 'random number generator' para ver quantos numeros você vai dar")
    let lista = Number(prompt("quantos numeros vai ter nessa lista?"))
    do{
        let numero = Number(prompt("digite um numero"))
        numbah.push(numero)
        i++
    }while(i < lista)
    for(i = 0; i < numbah.length; i++){
        document.getElementById('text').innerHTML += numbah[i] + "<br>"
    }
}