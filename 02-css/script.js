function calculatethings(){
    let number, week

    number = Number(prompt("number 1-7"))

    if(number == 1){
        week = "sunday"
    }else if(number == 2){
        week = "monday"
    }else if(number == 3){
        week = "thursday"
    }else if(number == 4){
        week = "wednesday"
    }else if(number == 5){
        week = "thursday"
    }else if(number == 6){
        week = "friday"
    }else if(number == 7){
        week = "saturday"
    }else{
        week = "????????????????????"
    }

    document.getElementById("result").innerHTML = week
}