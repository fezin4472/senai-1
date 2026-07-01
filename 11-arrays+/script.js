let i = 0

let produtos = ['óleo 5W40', 'mochila', 'powerade', 'cabo usb-c'];
let precos = [95, 50, 8, 12];

function produtoseprecos(){
    document.getElementById('text').innerHTML = ''
    for(i = 0; i < produtos.length; i++){
        let j = i + 1
        document.getElementById('text').innerHTML +=
        "<p>" +
        j + "°: " + produtos[i] + " R$ " + 
        precos[i].toFixed(2).replace('.', ',')
        +
        "</p>"
    }
}

function addproduto(){
    let produto, preco
    do{
        produto = prompt("adicione um produto")
    }while(produto == '')
    
    do{
        preco = Number(prompt("bota o preço do produto"))
    }while(preco <= 0)

    produtos.push(produto)
    precos.push(preco)

    produtoseprecos()
}

const exercicioi = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
const exercicioiii = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo', 'feriado'];
const exercicioiv = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const exerciciov = [2, 4, 6, 8, 1, 0, 12, 14, 16, 18, 20];
const exerciciovi = [2, 4, 12, 8, 1, 0, 12, 14, 16, 18, 20];
const exerciciovii = ['banana', 'maçã', 'uva', 'morango'];
const exercicioviii = ['banana', 'uva', 'morango'];
const exercicioix = ['jeff', 'jeni', 'ph'];
const exerciciox = ['jeff', 'jeni', 'ph', 'polacos', 'olavo', 'conte'];
const exercicioxi = [33, 19, 15, 18, 18, 18];
let exercicioxii = 54
let exercicioxiii = 20.1666
const exercicioxiv = ['cacetinho', 'powerade', 'arroz'];
const exercicioxv = ['cacetinho', 'powerade', 'arroz', 'pasta de dente', 'desodorante'];
const exercicioxvi = ['cacetinho', 'powerade', 'pasta de dente', 'desodorante'];
const exercicioxvii = false
const exercicioxviii = [3, 15, 29, 45, 31];
const exercicioxix = [6, 30, 58, 90, 62];
const exercicioxx = ['gramado', 'oslo', 'wolfsburg', 'tóquio', 'florianópolis'];

function funcoes(){
    for(i = 0; i < exercicioi.length; i++){
        document.getElementById('textoi').innerHTML += exercicioi[i] + "<br>"
    }

    for(i = 6; i > exercicioi.length; i--){
        document.getElementById('textoii').innerHTML += exercicioi[i] + "<br>"
    }

    for(i = 0; i < exercicioiii.length; i++){
        document.getElementById('textoiii').innerHTML += exercicioiii[i] + "<br>"
    }

    for(i = 0; i < exercicioi.length; i++){
        document.getElementById('textoiv').innerHTML += exercicioi[i] + "<br>"
    }

    document.getElementById('textoxx').innerHTML = "Eu não sei porque, mas eu gosto de frio, e cidades que podem ficar frias (especialmente no inverno) são " + exercicioxix[0] + 
    " no estado do rio grande do sul (adoro essa cidade) e " + exercicioxix[1] + " na noruega. Se eu poderia morar em um outro lugar além de " + 
    exercicioxix[4] + " e " + exercicioxix[0] + 
    " seria esse, porque eu ouvi dizer que quando você sai, é calmo e quieto, e também tem o sol da meia noite e as luzes do norte (também chamado de aurora boreal) e que eu gosto do frio. E também estou aprendendo a falar alemão, eu gostaria de ir para a alemanha e visitar " + 
    exercicioxix[2] + " que é onde a fabrica da volkswagen na alemanha é, e também gostaria ir para " + 
    exercicioxix[3] + " no japão porque eu gosto de carros, e japão e a alemanha são os paises que tem as minhas marcas favoritas"
}

