const dinos = [
    { nome: 'T-Rex', },
    { nome: 'Velociraptor' },
    { nome: 'Triceratops' },
    { nome: 'Pterodáctilo' }
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

function spinGame(){
    if (!selected) {
    alert('Escolha um dinossauro primeiro!');
    return;
    }

    if (coins < 10) {
    alert('Você ficou sem DinoCoins!');
    return;
    }

    coins -= 10;

    const winner = dinos[Math.floor(Math.random() * dinos.length)];
    const ganhou = winner.nome === selected.nome;

    if (ganhou) {
    coins += 50;
    }

    document.getElementById('coins').innerText = coins;

    document.getElementById('result').innerHTML =
    '<h2>DINOSSAURO SORTEADO:</h2>' +
    '<div style="font-size:80px">' + winner.nome + '</div>' +
    '<h1>' + winner.nome + '</h1>' +
    (ganhou
        ? '<p style="color:lime">VOCÊ GANHOU 50 DINOCOINS WOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>'
        : '<p style="color:red">tente outra veeeeeeeeeeeeeeeeeeez</p>');
}