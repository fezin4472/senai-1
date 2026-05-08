function calculatethings(){
    let win, draw, points

    win = Number(prompt("wins"))
    draw = Number(prompt("draws"))

    win = win + 3
    draw = draw + 1
    points = win + draw

    result.innerHTML = points
}