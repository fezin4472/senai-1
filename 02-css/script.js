function calculatethings(){
    let idade

    idade = Number(prompt("idade"))

    if (idade <= 17){
        alert("nein")
    }else{
        alert("ja")
    }
    document.getElementById("result").innerHTML = idade
}