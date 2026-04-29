function calculatetemperature(){
    let celsius, fahrenheit

    celsius = Number(prompt("temperature in celsius"))

    fahrenheit = celsius*9/5+32

    document.getElementById("result").innerHTML = fahrenheit
}