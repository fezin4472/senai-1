let i = 0

function tarefas(){
    let totalcon = 0
    let totalncon = 0
    let days = Number(prompt("quantos dia tem a sprint?"))
    for(i = 1; i <= days; i++){
        let fintasks = Number(prompt("quantas tarefas foram feitas no dia " + i + "?"))
        let unfintasks = Number(prompt("quantas tarefas não foram feitas no dia " + i + "?"))
        totalcon += fintasks
        totalncon += unfintasks
        document.getElementById('tekst').innerHTML += "DIA " + i + ": " + fintasks + " TAREFA(S) CONCLUIDA(S)" + " | " + unfintasks + " TAREFA(S) NAO CONCLUIDA(S)" + "<br>"
        document.getElementById('tsket').innerHTML = "TOTAL DE TAREFAS CONCLUIDAS: " + totalcon + "<br>" + "TOTAL DE TAREFAS NAO CONCLUIDAS: " + totalncon
    }
}

function notext(){
    document.getElementById('tekst').innerHTML = " "
    document.getElementById('tsket').innerHTML = " "
    document.getElementById('texto').innerHTML = " "
    document.getElementById('otxet').innerHTML = " "
}

function bugs(){
    let totalb = 0
    let dias = Number(prompt("quantos dia tem a sprint?"))
    const array = []
    for(i = 1; i <= dias; i++){
        let bugs = Number(prompt("quantos bugs foram encontrados no dia " + i + "?"))
        totalb += bugs
        let media = totalb / dias
        array[i] = bugs
        document.getElementById('tekst').innerHTML += "DIA " + i + ": " + bugs + "<br>"
        document.getElementById('tsket').innerHTML = "TOTAL DE BUGS: " + totalb + "<br>" + "MEDIA DE BUGS: " + media
        document.getElementById('texto').innerHTML = "MAIOR QUANTIDADE DE BUGS: " + bugs + "<br>" + "DIA COM MAIS BUGS: " + dias
        document.getElementById('otxet').innerHTML = "MENOR QUANTIDADE DE BUGS: " + bugs + "<br>" + "DIA COM MENOS BUGS: " + dias
    }
}