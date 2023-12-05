document.getElementById('sugestaoSim').onclick = responseSim

document.getElementById("sugestaoNao").onclick = responseNao

function responseSim(){
    document.getElementById("feedbeck").style.display = 'block';
}

function responseNao(){
    document.getElementById("feedbeck").style.display = "none";
}