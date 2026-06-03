const dinos = [
    { nome: 'T-Rex', },
    { nome: 'Velociraptor' },
    { nome: 'Triceratops' },
    { nome: 'Pterodáctilo' },
    { nome: 'Brontosaurus' },
    { nome: 'Argentinosaurus' }
];

let selected = null;
let coins = 100;

function selectDino(nome){
    selected = { nome };

    document.getElementById('result').innerHTML =
    'Você escolheu: <br><br>' +
    '<span style="font-size:60px">' + '</span><br>' +
    '<b>' + nome + '</b>';
}

let total

function spinGame(){
    let bet = Number(document.getElementById('i-bet').value)
    total += bet
    
    if (!selected) {
        alert('escolher dinossauro');
    return;
    }

    if (coins < 10) {
        alert('dale ctrl + r ce perdeu tudo mermao');
    }

    const winner = dinos[Math.floor(Math.random() * dinos.length)];
    const ganhou = winner.nome === selected.nome;
    const perdeu = winner.nome

    if(perdeu){
        coins -= bet
    }

    if (ganhou){
        coins = bet *= 2;
    }

    document.getElementById('coins').innerText = 'D$' + coins;

    document.getElementById('result').innerHTML =
    '<h2>DINOSSAURO SORTEADO:</h2>' +
    '<div style="font-size:80px">' + winner.nome + '</div>' +
    '<h1>' + winner.nome + '</h1>' +
    (ganhou
        ? '<p style="color:lime">VOCÊ GANHOU WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOGUIDSHGSFFBSJFJK</p>'
        : '<p style="color:red">tente outra veeeeeeeeeeeeeeeeeeez</p>');
}