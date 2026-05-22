let totalkept = 0

function complicatedmath(){
    let receive = Number(document.getElementById('recebido').value)
    
    totalkept = receive * 0.1

    document.getElementById('rest').innerHTML = 'R$' + totalkept.toFixed(2)
    document.getElementById('list').innerHTML += 'R$' + totalkept.toFixed(2) + '<br>'
    document.getElementsByTagName('input').value = ''
}