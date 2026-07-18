/*
C = create
R = read
U = update
D = delete
*/

let i = 0

const carros = [];

function register(){
    const newcar = {
        carro: (document.getElementById('input-carro').value),
        potencia: Number(document.getElementById('input-potencia').value),
        cor: (document.getElementById('input-cor').value),
        ano: Number(document.getElementById('input-ano').value),
        fipe: Number(document.getElementById('input-fipe').value)
    }

    carros.push(newcar);

    console.log(carros);
    
    clearform()
}

function clearform(){
    document.getElementById('input-carro').value = ""
    document.getElementById('input-potencia').value = ""
    document.getElementById('input-cor').value = ""
    document.getElementById('input-ano').value = ""
    document.getElementById('input-fipe').value = ""
    document.getElementById('input-id').value = ""
}

function show(){
    for(i = 0; i < carros.length; i++){
        document.getElementById('panel').innerHTML += `<p class="card-carros">${carros[i].carro}</p>`
    }
}

function search(){
    let procurado = document
}

function save(){
    let id = Number(document.getElementById('input-id').value)

    for(i = 0; i < carros.length; i++){
        if(id == carros[i].id){
            console.log(carros[i]);
            carros[i].potencia = document.getElementById('input-potencia').value
            carros[i].cor = document.getElementById('input-cor').value
            carros[i].ano = document.getElementById('input-ano').value
            carros[i].fipe = document.getElementById('input-fipe').value
            carros[i].id = document.getElementById('input-id').value
            console.log(i);
        }
    }
    show();
    clearform();
}