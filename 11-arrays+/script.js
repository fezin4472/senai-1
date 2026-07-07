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

let exercicioi = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
const exercicioii = ['domingo', 'sábado', 'sexta', 'quinta', 'quarta', 'terça', 'segunda']
const exercicioiii = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo', 'feriado'];
const exercicioiv = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
let exerciciov = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const exerciciovi = [2, 4, 12, 8, 10, 12, 14, 16, 18, 20];
let exerciciovii = ['banana', 'maçã', 'uva'];
const exercicioviii = ['banana', 'uva', 'morango'];
const exercicioix = ['jeferson', 'jeni', 'ph'];
const exerciciox = ['jeferson', 'jeni', 'ph', 'polacos', 'olavo', 'conte'];
const exercicioxi = [33, 19, 15, 18, 18, 18];
let exercicioxii = 52
let exercicioxiii = 20.1666
const exercicioxiv = ['cacetinho', 'powerade', 'arroz'];
const exercicioxv = ['cacetinho', 'powerade', 'arroz', 'pasta de dente', 'desodorante'];
const exercicioxvi = ['cacetinho', 'powerade', 'pasta de dente', 'desodorante'];
const exercicioxvii = false
const exercicioxviii = [3, 15, 29, 45, 31];
let impares = [];
const exercicioxix = [180, 4, 90, 69, ];
let numeros = [90, 2, 45]
const exercicioxx = ['gramado', 'oslo', 'wolfsburg', 'nagoia', 'florianópolis', 'hell'];

function removetext(){
    document.getElementById('textoi').innerHTML = ""
    document.getElementById('textoii').innerHTML = ""
    document.getElementById('textoiii').innerHTML = ""
    document.getElementById('textoiv').innerHTML = ""
    document.getElementById('textov').innerHTML = ""
    document.getElementById('textovi').innerHTML = ""
    document.getElementById('textovii').innerHTML = ""
    document.getElementById('textoviii').innerHTML = ""
    document.getElementById('textoix').innerHTML = ""
    document.getElementById('textox').innerHTML = ""
    document.getElementById('textoxi').innerHTML = ""
    document.getElementById('textoxii').innerHTML = ""
    document.getElementById('textoxiii').innerHTML = ""
    document.getElementById('textoxiv').innerHTML = ""
    document.getElementById('textoxv').innerHTML = ""
    document.getElementById('textoxvi').innerHTML = ""
    document.getElementById('textoxvii').innerHTML = ""
    document.getElementById('textoxviii').innerHTML = ""
    document.getElementById('textoxix').innerHTML = ""
    document.getElementById('textoxx').innerHTML = ""
}

function funcoes(){

    for(i = 0; i < exercicioi.length; i++){
        document.getElementById('textoi').innerHTML += exercicioi[i] + "<br>"
    }

    exercicioi.reverse()

    for(i = 0; i < exercicioi.length; i++){
        document.getElementById('textoii').innerHTML += exercicioi[i] + "<br>"
    }

    exercicioi.reverse()

    exercicioi.push('feriado')

    for(i = 0; i < exercicioi.length; i++){
        document.getElementById('textoiii').innerHTML += exercicioi[i] + "<br>"
    }

    exercicioi.pop()

    exercicioi.pop()

    for(i = 0; i < exercicioi.length; i++){
        document.getElementById('textoiv').innerHTML += exercicioi[i] + "<br>"
    }

    for(i = 0; i < exerciciov.length; i++){
        document.getElementById('textov').innerHTML += exerciciov[i] + "<br>"
    }

    exerciciov[2] = 12

    for(i = 0; i < exerciciov.length; i++){
        document.getElementById('textovi').innerHTML += exerciciov[i] + "<br>"
    }

    exerciciovii.push('morango')

    for(i = 0; i < exerciciovii.length; i++){
        document.getElementById('textovii').innerHTML += exerciciovii[i] + "<br>"
    }

    exerciciovii.pop()

    exerciciovii[1] = "uva"

    exerciciovii[2] = "morango"

    for(i = 0; i < exerciciovii.length; i++){
        document.getElementById('textoviii').innerHTML += exerciciovii[i] + "<br>"
    }

    for(i = 0; i < exercicioix.length; i++){
        document.getElementById('textoix').innerHTML += exercicioix[i] + "<br>"
    }

    exercicioix.push('polacos', 'olavo', 'conte')

    for(i = 0; i < exercicioix.length; i++){
        document.getElementById('textox').innerHTML += exercicioix[i] + "<br>"
    }

    for(i = 0; i < exercicioxi.length; i++){
        document.getElementById('textoxi').innerHTML += exercicioxi[i] + "<br>"
    }

    let soma = exercicioxi[0] + exercicioxi[1]

    document.getElementById('textoxii').innerHTML = soma

    let media = (soma + exercicioxi[2] + exercicioxi[3] + exercicioxi[4] + exercicioxi[5]) / 6

    document.getElementById('textoxiii').innerHTML = media

    for(i = 0; i < exercicioxiv.length; i++){
        document.getElementById('textoxiv').innerHTML += exercicioxiv[i] + "<br>"
    }

    exercicioxiv.push('pasta de dente', 'desodorante')

    for(i = 0; i < exercicioxiv.length; i++){
        document.getElementById('textoxv').innerHTML += exercicioxiv[i] + "<br>"
    }

    exercicioxiv.pop()

    exercicioxiv[2] = 'pasta de dente'

    exercicioxiv[3] = 'desodorante'

    for(i = 0; i < exercicioxiv.length; i++){
        document.getElementById('textoxvi').innerHTML += exercicioxiv[i] + "<br>"
    }

    let check = exercicioxiv.includes('pão')

    document.getElementById('textoxvii').innerHTML = check

    impares.push(15,)
    for(i = 0; i < exercicioxviii.length; i++){
        document.getElementById('textoxviii').innerHTML += exercicioxviii[i] + "<br>"
    }

    let multiplier

    for(i = 0; i < exercicioxviii.length; i++){
        multiplier = exercicioxviii[i] * 2
        document.getElementById('textoxix').innerHTML += multiplier + "<br>"
    }

    document.getElementById('textoxx').innerHTML = "Eu não sei porque, mas eu gosto de frio, e cidades que podem ficar frias (especialmente no inverno) são " + exercicioxx[0] + 
    " no estado do rio grande do sul (adoro essa cidade) e " + exercicioxx[1] + " na noruega. Se eu poderia morar em um outro lugar além de " + 
    exercicioxx[4] + " e " + exercicioxx[0] + 
    " seria esse, porque eu ouvi dizer que quando você sai, é calmo e quieto, e também tem o sol da meia noite e as luzes do norte (também chamado de aurora boreal) e que eu gosto do frio. Tem também uma cidade chamado de " + 
    exercicioxx[5] + " que é bem longe de " + exercicioxx[1] + ". Tem até um circuito de rallycross chamado de 'Lånkebanen' que sedia o campeonato Europeu de rallycross desde 2011 e o mundial de rallycross de 2014 a 2025 quando o campeonato foi substituído com o europeu (um dia eu vou para " 
    + exercicioxx[5] + " e ver uma corrida de rallycross confia em mim eu vou ser top 50 no beach e fazer isso hhehehehehhehehe). E também estou aprendendo a falar alemão, eu gostaria de ir para a alemanha e visitar " + 
    exercicioxx[2] + " que é onde a fabrica da volkswagen na alemanha é, e também gostaria ir para " + 
    exercicioxx[3] + " no japão (capital da província de aichi), 25 kilometros nordeste da fabrica da toyota. É onde o museu da toyota e um museu de trens da Central Japan Railway Company (JR Central) ficam, e tem até restaurante brasileiro em " + 
    exercicioxx[3] + " chamado Ossu Brasil"
}

