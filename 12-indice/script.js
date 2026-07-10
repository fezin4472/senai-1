const produtosesportivos = [
    "Bola de Futebol",
    "Bola de Basquete",
    "Raquete de Tênis",
    "Luva de Goleiro",
    "Capacete de Ciclismo",
    "Corda de Pular",
    "Halter de 5kg",
    "Colchonete de Yoga",
    "Garrafa Térmica Esportiva",
    "Tênis de Corrida",
    "Faixa Elástica de Resistência",
    "Kimono de Judô",
    "Óculos de Natação",
    "Skate",
    "Prancha de Surf",
    "Esqui",
    "Sunga",
    "Trampolim de Ginástica",
    "Taco de Golfe",
    "Bandana"
];

const lista = document.getElementById("lista");
const seletor = document.getElementById("seletor");
const namm = document.getElementById("namm");

function botarlista(){
    lista.innerHTML = "";
    seletor.innerHTML = "";

    for(i = 0; i < produtosesportivos.length; i++){
        const produtos = produtosesportivos[i];

        const celula = document.createElement("div");
        celula.className = "celula";
        celula.id = "item" + i;
        celula.innerHTML = `<span class="valor">${produtos}</span><class="idx">[${i}]</span>`
        lista.appendChild(celula);

        const opt = document.createElement("option");
        opt.value = produtos;
        opt.textContent = produtos;
        seletor.appendChild(opt);
    }
}

function adicionar(){
    const produto = namm.value.trim();

    if (produto === ""){
        return;
    }

    produtosesportivos.push(produto)
    namm.value = "";

    botarlista()
}

function buscarIndice(){
    const celulas = document.querySelectorAll(".celula");
    for(i = 0; i < celulas.length; i++){
        celulas[i].classList.remove("destaque");
    }

    const produtoescolhido = seletor.value;
    
    let indice = -1;
    while(i < produtosesportivos.length){
        if(produtosesportivos[i] === produtoescolhido){
            indice = i
            break
        }
        i++
    }

    document.getElementById('resultado').innerHTML = `"${produtoescolhido}" está no indice ${indice}`;

    if(indice !== -1){
        document.getElementById('item-' + indice).classList.add("destaque")
    }
}