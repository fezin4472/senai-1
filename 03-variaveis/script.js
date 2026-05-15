let global = 'tusen takk'
function function1(){
    let local = 'det finnes ikke dårlig vær bare dårlig klær'
    console.log(local);
    console.log(global);
}

function function2(){
    console.log(global);
    // console.log(local);
}

let number = 0

function counter(){
    number = number + 1
    document.getElementById('p-count').innerHTML = number
}
function retnuoc(){
    number = number - 1
    document.getElementById('p-count').innerHTML = number
}


























// function1()
// function2()