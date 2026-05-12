function calculatethings(){
    let seconds, minutes, hours, days, distance
    const velocity = 300000

    seconds = Number(prompt("time in seconds"))

    distance = velocity * seconds
    minutes = seconds / 60
    hours = minutes / 60
    days = hours / 24

    result.innerHTML = distance
    alert(minutes)
    alert(hours)
    alert(days)
    console.log("jeg liker tog")
}