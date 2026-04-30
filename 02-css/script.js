function calculatetemperature(){
    let celsius, fahrenheit

    celsius = Number(prompt("temperature in celsius"))

    fahrenheit = celsius*9/5+32

    if(fahrenheit <= 64.4){
        alert("get a jacket")
    }else{
        alert("turn on the air conditioning system on your house or else u melt :)")
    }document.getElementById("result").innerHTML = fahrenheit
}