let coisas = [];

function exc1(){
    coisas = ["Dona Bete", "Junin", "Gael", "Mônika", "Gill Bates"];
    coisas.push("Capitão Ganso");
    let inclusion = coisas.includes("Mônika");
    console.log(coisas, inclusion);
}

function exc2(){
    coisas = [
        "Macrohard",
        "Hotel Téo",
        "Pizza Ruth",
        "HD Cimentos",
        "Navegano",
        "Roller Store",
        "Be a Bar",
        "Indra",
        "Acarajéssica",
        "Reciclaudio"
    ];
    coisas.shift();
    let index = coisas.indexOf("HD Cimentos");
    console.log(coisas, index);
}

function exc3(){
    coisas = ["Kowalski", "Heitor Tuga", "Bilu", "Rita Aline", "Caio Pontes", "PeBa"];
    coisas.unshift("Frei Dimão");
    coisas.pop();
    console.log(coisas);
}

function exc4(){
    coisas = [
        "Telles Transportes",
        "Rede Eco",
        "Pousada Ada",
        "Resort Orth",
        "Bergamota",
        "Amazonia",
        "Coxão do Santinho",
        "Casa de Pastel",
        "Rango Star",
        "Alibebe",
        "Ed Som",
        "Gê Estantes"
    ];
    coisas.splice(5, 1);
    let inclusion = coisas.includes("Amazonia");
    console.log(coisas, inclusion);
}

function exc5(){
    coisas = [
        "Márcia",
        "Mano Juca",
        "Lúcio Fernando",
        "Roque",
        "Yasmina",
        "Waldisney",
        "Lady Murphy"
    ];
    coisas.reverse();
    let index = coisas.indexOf("Roque");
    console.log(coisas, index);
}

function exc6(){
    coisas = [
        "Harry Plotter",
        "Albergue Berg",
        "Camping Pim",
        "Ron Bernardo Pet Shop",
        "Visionery",
        "Armando Guerra",
        "Plumas de Avalon",
        "Romero Brique",
        "Meia Meia Meia",
        "Taberna Periódica",
        "Tião Megastore",
        "Milhion Pamonharia",
        "Templo de Salmão"
    ];
    coisas.push("Banda Jota Qwert");
    coisas.unshift("Rock in Reels");
    console.log(coisas);
}

function exc7(){
    coisas = [
        "Guilherme Portões",
        "Jeferson Bezerra",
        "Pe. Ernan Buco",
        "Ron Roni",
        "Seu Bernardo",
        "Luiza",
        "Van Grogue",
        "Rosa Negra"
    ];
    coisas.splice(4, 2);
    coisas.push("Helen Sater")
    console.log(coisas);
}

function exc8(){
    coisas = [
        "Grades Cida",
        "Food Park Comidas e Clichês",
        "Churrascaria do Gaúcho",
        "Batata da Tabata Batataria",
        "Lanchonete Altas Horas",
        "Tio do Pavê Sobremesas",
        "Bolores Bolos e Flores",
        "Sanduíche-iche da Ruth",
        "Cereal Killer Cereal Bar",
        "Restaurante Contra-Filé"
    ];
    let index = coisas.indexOf("Lanchonete Altas Horas");
    coisas.splice(4, 1);
    console.log(index, coisas);
}

function exc9(){
    coisas = [
        "Alan Grande",
        "Tio Paulo",
        "Dr Auzio",
        "GENéZio",
        "Mosta",
        "Guarda Napoleão"
    ];
    let inclusion = coisas.includes("GENéZio");
    coisas.shift();
    coisas.reverse();
    console.log(inclusion, coisas);
}

function exc10(){
    coisas = [
        "Pamdiló Bolos",
        "Moçambike",
        "Decorações de Coração",
        "Clínica Frida Calos",
        "Taubaté Tábuas",
        "Vidraçaria Douglass",
        "Gil Som",
        "Paty em Ação",
        "Mi Sungas",
        "Sombransheila",
        "Esthertica",
        "Pricílios",
        "Hanna Barbearia",
        "Realisa Alisamentos"
    ];
    coisas.unshift("Floricultura Jorge Tadeu");
    coisas.splice(6, 1);
    console.log(coisas);
}

function exc11(){
    coisas = ["Dona Bete", "Kowalski", "Capitão Ganso", "Junin", "Bilu"];
    coisas.push("Gill Bates")
    let inclusion = coisas.includes("Kowalski");
    let index = coisas.indexOf("Kowalski");
    console.log(coisas, inclusion, index);
}

function exc12(){
    coisas = [
        "Roda de Roque",
        "MilkSahakespeare",
        "Dasamassandro",
        "Tias Fofinhas",
        "Horrível Trio",
        "Pedro Chips",
        "Frutos e Fritas do Frota",
        "Taxi Aéreo Mamute Pequenino",
        "Adomicílios",
        "Abalada",
        "Ricárdio"
    ];
    coisas.pop();
    coisas.unshift("Cardiopatinha");
    console.log(coisas);
}

function exc13(){
    coisas = [
        "Heitor Tuga",
        "Frei Dimão",
        "Gael",
        "Sarumano",
        "Márcia",
        "Mônika",
        "Yasmina",
        "Lady Murphy",
        "Caio Pontes"
    ];
    coisas.reverse();
    let inclusion = coisas.includes("Sarumano");
    console.log(coisas, inclusion);
}

function exc14(){
    coisas = [
        "A Bem Suada",
        "Aspirantes Aspiradores",
        "jamanjo.com.br",
        "MA Canudos",
        "IA",
        "Pé Pequeno",
        "Trajeto Pomar",
        "Vírus da Grife",
        "Paralamas do Seu Celso",
        "Samara Poços"
    ];
    coisas.splice(8, 2);
    coisas.push("Loja de sucos Uso Fruto");
    console.log(coisas);
}

function exc15(){
    coisas = [
        "Lúcio Fernando",
        "Ron Roni",
        "Seu Bernardo",
        "Luiza",
        "Roque",
        "Rita Aline",
        "Dr Auzio"
    ];
    coisas.shift();
    coisas.pop();
    let index = coisas.indexOf("Luiza");
    console.log(coisas, index);
}

function exc16(){
    coisas = [
        "Hotel Téo",
        "Pousada Ada",
        "Resort Orth",
        "Albergue Berg",
        "Camping Pim",
        "Macrohard",
        "Bergamota",
        "Amazonia",
        "Visionery",
        "HD Cimentos",
        "Meia Meia Meia",
        "Coxão do Santinho"
    ];
    coisas.unshift("Rede eco");
    let inclusion = coisas.includes("Macrohard");
    console.log(coisas, inclusion);
}

function exc17(){
    coisas = [
        "Pe. Ernan Buco",
        "Frei Dimão",
        "Capitão Ganso",
        "Junin",
        "PeBa",
        "Mano Juca",
        "Bilu",
        "Waldisney"
    ];
    coisas.splice(4, 1);
    coisas.reverse();
    console.log(coisas);
}

function exc18(){
    coisas = [
        "Casa de Pastel",
        "Lanchonete Altas Horas",
        "Tio do Pavê Sobremesas",
        "Bolores Bolos e Flores",
        "Pizza Ruth",
        "Sanduíche-iche da Ruth",
        "Cereal Killer Cereal Bar",
        "Restaurante Contra-Filé",
        "Rango Star",
        "Acarajéssica",
        "Templo de Salmão",
        "Navegano",
        "Alibebe"
    ];
    coisas.push("Pamdiló Bolos");
    let index = coisas.indexOf("Pizza Ruth");
    console.log(coisas, index);
}

function exc19(){
    coisas = [
        "Guilherme Portões",
        "Jeferson Bezerra",
        "Heitor Tuga",
        "Gael",
        "Sarumano",
        "Márcia"
    ];
    coisas.splice(2, 2);
    let inclusion = coisas.includes("Sarumano");
    console.log(coisas, inclusion, coisas.length);
}