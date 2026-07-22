/*
C = create
R = read
U = update
D = delete
*/

let i = 0

let carros = [];

function savedata(){
    localStorage.setItem('carros', JSON.stringify(carros))

    /* let text = JSON.stringify(dinos)
    localStorage.setItem('carros', text)*/
}

function loaddata(){
    carros = JSON.parse(localStorage.getItem('carros'))
    console.log(carros);
}

function register(){
    loaddata()

    const newcar = {
        id: Date.now(),
        carro: (document.getElementById('input-carro').value),
        potencia: Number(document.getElementById('input-potencia').value),
        cor: (document.getElementById('input-cor').value),
        ano: Number(document.getElementById('input-ano').value),
        fipe: Number(document.getElementById('input-fipe').value)
    }
    carros.push(newcar);

    console.log(carros);
    
    clearform()
    show()
}

function clearform(){
    document.getElementById('input-carro').value = ""
    document.getElementById('input-potencia').value = ""
    document.getElementById('input-cor').value = ""
    document.getElementById('input-ano').value = ""
    document.getElementById('input-fipe').value = ""
    document.getElementById('input-id').value = ""

    document.getElementById('input-carro').focus()
}

function show(){
    for(i = 0; i < carros.length; i++){
        document.getElementById('panel').innerHTML +=
        `<div class="card-carros">
            <h2>${carros[i].carro}</h2>
            <p>potência: ${carros[i].potencia}</p>
            <p>cor: ${carros[i].cor}</p>
            <p>ano: ${carros[i].ano}</p>
            <p>fipe: ${carros[i].fipe}</p>
            <p>id: ${carros[i].id}</p>
        </div>
        `
    }
}

function search(){
    let procurado = document.getElementById('input-carro').value

    for(i = 0; i < carros.length; i++){
        if(procurado == carros[i].carro){
            console.log(carros[i]);
            document.getElementById('input-potencia').value = carros[i].potencia
            document.getElementById('input-cor').value = carros[i].cor
            document.getElementById('input-ano').value = carros[i].ano
            document.getElementById('input-fipe').value = carros[i].fipe
            document.getElementById('input-id').value = carros[i].id
            console.log(i);
        }
    }
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

function del(){
    let id = Number(document.getElementById('input-id').value)

    for(i = 0; i < carros.length; i++){
        if(id == carros[i].id){
            console.log(carros[i]);
            carros.splice(i, 1);
            console.log(i);
        }
    }
    show()
    clearform()
}

function test(){

    loaddata()

    localStorage.setItem('teste', 45)

    let readtest = localStorage.getItem('teste');

    console.log(readtest);

    carros = [
        {
            id: 1718324500001,
            carro: "VW Polo Sed. COMFORT. 1.6 Mi Tot. flex 8v",
            potencia: 101,
            cor: "preto",
            ano: 2008,
            fipe: 34200
        },
        {
            id: 1718324500002,
            carro: "Chevrolet Corsa Hat. Premium 1.4 8V ECONOFLEX 5p",
            potencia: 105,
            cor: "prata",
            ano: 2009,
            fipe: 29875
        },
        {
            id: 1718324500003,
            carro: "Fiat Palio 1.0 Economy Fire Flex 8V 2P",
            potencia: 73,
            cor: "Vermelho",
            ano: 2010,
            fipe: 23021
        },
        {
            id: 1718324500004,
            carro: "Toyota Corolla Cross XRE 2.0 16v Flex AUT",
            potencia: 169,
            cor: "Cinza",
            ano: 2023,
            fipe: 136469
        },
        {
            id: 1718324500005,
            carro: "BMW X1 Sdrive 20I 2.0/2.0 TB Acti.Flex Aut.",
            potencia: 192,
            cor: "Branca",
            ano: 2018,
            fipe: 115224
        },

    ];

    console.log(carros);

}