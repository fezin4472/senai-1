let personagens = [];

// parte 1

function exc1(){
    personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.push("Gill Bates");
    console.log(personagens);
}

function exc2(){
    personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.splice(0, 0, "Dona Bete");
    console.log(personagens);
}

function exc3(){
    personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];

    personagens.pop()
    console.log(personagens);
}

function exc4(){
    personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];

    personagens.splice(0, 1)
    console.log(personagens);
}

function exc5(){
    personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates",
        "Junin"
    ];

    personagens.splice(2, 1);
    console.log(personagens);
}

function exc6() {
    personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates",
        "Junin"
    ];

    personagens.splice(3, 2);
    console.log(personagens);
}

function exc7(){
    personagens = [
        "Peba",
        "Bilu",
        "Waldisney"
    ];

    personagens.push("Padre Ernan Buco");
    console.log(personagens);
}

function exc8(){
    personagens = [
        "Peba",
        "Bilu",
        "Waldisney"
    ];

    personagens.splice(0, 0, "GENéZio", "Kowalski");
    console.log(personagens);
}

function exc9(){
    personagens = [
        "Peba",
        "Bilu",
        "Waldisney",
        "GENéZio"
    ];

    let index = personagens.indexOf("Waldisney");
    console.log(index);
}

function exc10(){
    personagens = [
        "Peba",
        "Bilu",
        "Waldisney",
        "GENéZio"
    ];

    let inclusion = personagens.includes("Heitor Tuga");
    console.log(inclusion);
}

function exc11(){
    personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];

    personagens.reverse();
    console.log(personagens);
}

function exc12(){
    personagens = [
        "Tião",
        "Junin",
        "Padre Ernan Buco"
    ];

    personagens.splice(1, 1);
    console.log(personagens);
}

function exc13(){
    personagens = [
        "Tião",
        "Junin",
        "Padre Ernan Buco"
    ];

    personagens.splice(0, 0, "Dona Bete");
    personagens.splice(2, 0, "Mônica");
    console.log(personagens);
}

function exc14(){
    personagens = [
        "Rivaldo Jesus",
        "Kowalski",
        "GENéZio",
        "Waldisney"
    ];

    personagens.pop();
    personagens.splice(0, 1);
    console.log(personagens);
}

function exc15(){
    personagens = [
        "Rivaldo Jesus",
        "Kowalski",
        "GENéZio",
        "Waldisney"
    ];

    let index = personagens.indexOf("GENéZio");
    console.log(index);
}

function exc16(){
    personagens = [
        "Rivaldo Jesus",
        "Kowalski",
        "GENéZio",
        "Waldisney"
    ];

    let inclusion = personagens.includes("Capitão Ganso");
    console.log(inclusion);
}

function exc17(){
    personagens = [
        "Bilu",
        "Mônica",
        "Gill Bates",
        "Junin",
        "Peba"
    ];

    personagens.splice(0, 2);
    console.log(personagens);
}

function exc18(){
    personagens = [
        "Bilu",
        "Mônica",
        "Gill Bates",
        "Junin",
        "Peba"
    ];

    personagens.splice(2, 3);
    console.log(personagens);
}


function exc19(){
    personagens = [
        "Capitão Ganso",
        "Heitor Tuga",
        "Dona Bete"
    ];

    personagens.splice(0, 0, "Lúcio Fernando");
    personagens.push("Gill Bates");
    console.log(personagens);
}

function exc20(){
    personagens = [
        "Capitão Ganso",
        "Heitor Tuga",
        "Dona Bete",
        "Gill Bates"
    ];

    personagens.reverse();
    console.log(personagens);
}

function exc21(){
    personagens = [
        "Padre Ernan Buco",
        "GENéZio",
        "Bilu",
        "Junin"
    ];

    let inclusion = personagens.includes("Bilu");
    let OTHERINCLUSION = personagens.includes("bilu");
    console.log(inclusion, OTHERINCLUSION);
}

function exc22(){
    personagens = [
        "Padre Ernan Buco",
        "GENéZio",
        "Bilu",
        "Junin"
    ];

    let index = personagens.indexOf("Padre Ernan Buco");
    console.log(index);
}

function exc23(){
    personagens = [
        "Lúcio Fernando",
        "Rivaldo Jesus",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates",
        "Junin"
    ];

    personagens.splice(2, 2);
    console.log(personagens);
}

function exc24(){
    personagens = [
        "Tião",
        "Peba",
        "Waldisney"
    ];

    personagens.push("Bilu");
    console.log(personagens);
    personagens.splice(0, 0, "Dona Bete");
    console.log(personagens);
    personagens.pop();
    console.log(personagens);
    personagens.reverse();
    console.log(personagens);
}

function exc25(){
    personagens = [
        "Gill Bates",
        "Kowalski",
        "GENéZio",
        "Padre Ernan Buco",
        "Heitor Tuga"
    ];

    let includes = personagens.includes("Kowalski");
    console.log(includes);
    let index = personagens.indexOf("Padre Ernan Buco");
    console.log(index);
    personagens.splice(2, 1);
    console.log(personagens);
    personagens.reverse();
    console.log(personagens);
}