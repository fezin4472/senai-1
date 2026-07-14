

const produtos = [
    "Notebook",
    "Mouse",
    "Teclado",
    "Monitor",
    "Headset",
    "Webcam",
    "Impressora",
    "Cadeira Gamer",
    "Mesa de Escritório",
    "HD Externo",
    "SSD",
    "Pendrive",
    "Roteador",
    "Smartphone",
    "Tablet",
    "Smartwatch",
    "Carregador",
    "Cabo USB",
    "Caixa de Som",
    "Microfone",
    "Controle de Videogame",
    "Console",
    "TV 4K",
    "Projetor",
    "Ventilador",
    "Ar Condicionado",
    "Geladeira",
    "Micro-ondas",
    "Liquidificador",
    "Cafeteira",
    "Air Fryer",
    "Fogão",
    "Panela Elétrica",
    "Aspirador de Pó",
    "Furadeira",
    "Parafusadeira",
    "Lanterna",
    "Mochila",
    "Relógio",
    "Óculos de Sol",
    "Tênis",
    "Jaqueta",
    "Camiseta",
    "Calça Jeans",
    "Boné",
    "Garrafa Térmica",
    "Livro",
    "Caderno",
    "Caneta",
    "Mala de Viagem"
];

const max = [];
const min = [];

function generatetemperatures(){
    for(i = 0; i < 30; i++){
        let minimum = Math.floor(Math.random() * 35) * 1
        min.push(minimum)
        if(minimum < 12){
            min.pop()
            break
        }
        console.log(minimum);
    }
}

function umapdestrings(){
    for(i = 0; i < produtos.length; i++){
        document.getElementById('lista-precos').innerHTML += produtos[i] + "<br>"
    }
}