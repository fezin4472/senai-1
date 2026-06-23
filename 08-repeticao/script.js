function notext(){
    document.getElementById('text').innerHTML = " "
}

let i = 0

function activities(){
    let n = 5
    for(i = 4; i >= 1; i--){
        n *= i
        document.getElementById('text').innerHTML = n
    }
}