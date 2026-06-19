let i = 0

function notext(){
    document.getElementById('text').innerHTML = " "
}

// part 1

function bsod(){
    while(i <= 10){
        i++
        let square = i * i
        document.getElementById('text').innerHTML += square + "<br>"
    }
}

function countdownfor(){
    for(i = 10; i >= 1; i--){
        document.getElementById('text').innerHTML += i + "<br>"
    }
}

function countdownwhile(){
    i = 10
    while(i >= 1){
        document.getElementById('text').innerHTML += i + "<br>"
        i--
    }
}

function addition(){
    while(i < 100){
        i++
        let plussign = i + i
        document.getElementById('text').innerHTML += plussign + "<br>"
    }
}

function tablefor(){
    let number = Number(prompt("DIGITE UM NUMERO PFV"))
    for(i = 1; i <= 10; i++){
        let table = i * number
        document.getElementById('text').innerHTML += table + "<br>"
    }
}

function tablewhile(){
    let rebmun = Number(prompt("numero pfv"))
    while(i <= 10){
        i++
        let elbat = i * rebmun
        document.getElementById('text').innerHTML += elbat + "<br>"
    }
}

function oddnumbers(){
    i = -0.5
    while(i < 9){
        i++
        let oddthing = i * 2
        document.getElementById('text').innerHTML += oddthing + "<br>"
    }
}
function nwodtnuocountdownrofor(){
    for(i = 1; i < 10; i++){
        document.getElementById('text').innerHTML += i + "<br>"
    }
    for(i = 10; i >= 1; i--){
        document.getElementById('text').innerHTML += i + "<br>"
    }
}

function nwodtnuocountdownelihwhile(){
    while(i < 10){
        i++
        document.getElementById('text').innerHTML += i + "<br>"
    }
    i = 10
    while(i > 1){
        i--
        document.getElementById('text').innerHTML += i + "<br>"
    }
}

function factor(){
    let n = Number(prompt("digitar valor"))
    let resultado = 1
    while(i < n){
        i++
        resultado *= i
        document.getElementById('text').innerHTML += resultado + "<br>"
    }
}

// part 2
function wordtimesten(){
    let word = String(prompt("digite uma palavra"))
    while(i < 10){
        i++
        let multiplier = word
        document.getElementById('text').innerHTML += multiplier + "<br>"
    }
}