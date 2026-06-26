function notext(){
    document.getElementById('text').innerHTML = " "
}

let i = 0

function exerciseone(){
    let total = 0
    for(i = 1; i <= 10; i++){
        total += i
        document.getElementById('text').innerHTML = total
    }
}

function exercisetwo(){
    for(i = 1; i <= 10; i++){
        let five = i * 5
        document.getElementById('text').innerHTML += five + "<br>"
    }
}

function exercisethree(){
    for(i = 1; i <= 10; i++){
        let square = i * i
        document.getElementById('text').innerHTML += square + "<br>"
    }
}

function exercisefour(){
    const javascript = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
    for(i = 0; i < javascript.length; i++){
        document.getElementById('text').innerHTML += javascript[i] + "<br>"
    }
}

function exercisefive(){
    for(i = 1; i <= 10; i++){
        let three = i * 3
        document.getElementById('text').innerHTML += three + "<br>"
    }
}

function exercisesix(){
    const beep = "*"
    for(i = 0; i < 10; i++){
        document.getElementById('text').innerHTML += beep
    }
}

function exerciseseven(){
    let plus = 0
    for(i = 2; i <= 20; i++){
        let even = i * 2
        plus = even + i
        document.getElementById('text').innerHTML += plus + "<br>"
    }
}

function exerciseeight(){
    for(i = 0; i <= 10; i++){
        let funf = i * 5
        document.getElementById('text').innerHTML += funf + "<br>"
    }
}

function exercisenine(){
    const hello = "Olá"
    for(i = 0; i < 8; i++){
        document.getElementById('text').innerHTML += hello + "<br>"
    }
}

function exerciseten(){
    for(i = 0.5; i <= 7.5; i++){
        let odd = i * 2
        document.getElementById('text').innerHTML += odd + "<br>"
    }
}

function exerciseeleven(){
    const sequence = ["1", "12", "123", "1234", "12345"]
    for(i = 0; i < sequence.length; i++){
        document.getElementById('text').innerHTML += sequence[i] + "<br>"
    }
}

function exercisetwelve(){
    let factor = 5
    for(i = 4; i >= 1; i--){
        let result = factor *= i
        document.getElementById('text').innerHTML = result
    }
}

function exercisethirteen(){
    let word = String(prompt("digite uma palavra"))
    for(i = 0; i < word.length; i++){
    }
}