let number = 0

function addition(){
    number += 1
    document.getElementById('p-count').innerHTML = number
}
function substraction(){
    number -= 1
    document.getElementById('p-count').innerHTML = number
}
function multiplication(){
    number *= 2
    document.getElementById('p-count').innerHTML = number
}
function division(){
    number /= 2
    document.getElementById('p-count').innerHTML = number
}

let total = 0
function licenseandregistration(){
    let thing = Number(document.getElementById('inputsell').value)
    
    total = total + thing

    document.getElementById('list').innerHTML += 'R$' + thing.toFixed(2) + '<br>'
    document.getElementById('p-total').innerHTML = 'R$' + total.toFixed(2)
    document.getElementById('inputsell').value = ''
}

const numbers = ["en", "to", "tre", "fire", "fem", "seks", "syv", "åtte", "ni", "ti"]

function forloop(){
    for (let i = 0; i < numbers.length; i++)
        document.getElementById('thing').innerHTML += numbers[i] + '<br>'
}

function removetext(){
    document.getElementById('thing').innerHTML = " "
}

function resetrolls(){
    document.getElementById('p-rolls').innerHTML = 'total rolls: 0'
}

let roll, result

function dicerolls(number){
    roll = Math.floor(Math.random() * number) + 1;
    result = document.getElementById('p-random')
    result.innerHTML = 'last roll: ' + roll
}

var english = document.getElementById("en"),
    german = document.getElementById("de"),
    bulgarian = document.getElementById("bu"),
    norwegian = document.getElementById("no"),
    change_text = document.getElementById("translate");

english.addEventListener("click", function(){
        change(english, german, bulgarian, norwegian);
    }, false
);

german.addEventListener("click", function(){
        change(german, english, bulgarian, norwegian);
    }, false
);

bulgarian.addEventListener("click", function(){ 
        change(bulgarian, english, german, norwegian);
    }, false
);

norwegian.addEventListener("click", function(){
        change(norwegian, english, german, bulgarian)
    }, false
);

function change(lang_on, lang_off1, lang_off2, lang_off3){
    if(!lang_on.classList.contains("current_lang")){
        lang_on.classList.add("current_lang");
        lang_off1.classList.remove("current_lang");
        lang_off2.classList.remove("current_lang");
        lang_off3.classList.remove("current_lang");
    }

    if(lang_on.innerHTML == "EN"){
        change_text.classList.add("english");
        change_text.classList.remove("german");
        change_text.classList.remove("bulgarian");
        change_text.classList.remove("norwegian");
        change_text.innerHTML = "the text is now in english";
    }

    else if(lang_on.innerHTML == "DE"){
        change_text.classList.add("german");
        change_text.classList.remove("english");
        change_text.classList.remove("bulgarian");
        change_text.classList.remove("norwegian");
        change_text.innerHTML = "Dieser Text ist jetzt auf Deutsch."
    }

    else if(lang_on.innerHTML == "BU"){
        change_text.classList.add("bulgarian");
        change_text.classList.remove("english");
        change_text.classList.remove("german");
        change_text.classList.remove("norwegian");
        change_text.innerHTML = "Този текст вече е на български"
    }

    else if(lang_on.innerHTML == "NO"){
        change_text.classList.add("norwegian");
        change_text.classList.remove("english");
        change_text.classList.remove("german");
        change_text.classList.remove("bulgarian");
        change_text.innerHTML = "denne teksten er nå på norsk"
    }
}