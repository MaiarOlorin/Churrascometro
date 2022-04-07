let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inputadultos.value
    let criancas = inputcriancas.value
    let duracao = inputduracao.value
    let TotQtdCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let TotQtdCerveja = cerveja(duracao) * adultos;
    let TotQtdbebida =  bebida(duracao) * adultos + (bebida(duracao)/2 * criancas);
    resultado.innerHTML = `<p>${TotQtdCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(TotQtdCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(TotQtdbebida/2000)} Garrafas de 2L Bebida</p>`

}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    }else{
        return 400;
    }
}

function cerveja(duracao){
    if (duracao >= 6) {
        return 1500;
    }else{
        return 1000;
    }
}

function bebida(duracao){
    if (duracao >= 6) {
        return 1500;
    }else{
        return 1000;
    }
}