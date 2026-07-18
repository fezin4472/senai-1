let i = 0

let esportes = [];
function inicio(){
    return [
        "Tênis",
        "Beisebol",
        "Boliche",
        "Golfe",
        "Boxe"
    ];
}

function mostrarlista(){
    const lista = document.getElementById('lista');
    lista.innerHTML = ' ';
    esportes.forEach(esporte => {
        const div = document.createElement('div');
            div.className = 'array-item';
            div.textContent = esporte;
            lista.appendChild()
    });
}

function mostrarresultado(){
    document.getElementById('resultado-texto').textContent = texto
}

function step1(){
    const encontrado = personagens.includes("Beisebol");
    mostrarresultado('includes("Beisebol") -> ' + encontrado);
}

function step2(){
    const indice = personagens.indexOf("Golfe");
    mostrarresultado('indexOf("Golfe") -> ' + indice);
}

function step3(){
    const indice = esportes.indexOf("Boliche");
    esportes.splice(indice, 1);
    mostrarresultado('splice(' + indice + ', 1) -> removido "Boliche"');
    mostrarlista();
}

function step4(){
    esportes.reverse();
    mostrarresultado('reverse() -> [' + esportes.join(', ') + ']');
    mostrarlista();
}

function reset(){
    esportes = estadoInicial();
    renderLista();
    mostrarresultado('demonstração reiniciada');
}

reset();