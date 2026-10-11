const projetos = [
    ["projeto1","Energia Solar", 7.0],
    ["projeto2","Robótica  Sustentável", 8.5],
    ["projeto3", "Filtro de Água", 6.0],
    ["projeto4", "Horta Inteligente", 4.5],
    ["projeto5", "Reciclagem Eletrónica", 9.0],
    ["projeto6", "Automação Residencial",  6.5]
];

function calcularDiagnostico(pontuacao) {
    let resultadoGeral;
    if (pontuacao >= 7 && pontuacao <= 10) {
        resultadoGeral = "Destaque";
    } else if (pontuacao >= 5 && pontuacao < 7) {
        resultadoGeral = "Bom desempenho";
    } else {
        resultadoGeral = "Em desenvolvimento";
    };
    return resultadoGeral;
};

function calcularTotal(lista) {
    let soma = 0;
    for(let indice = 0; indice < lista.length; indice++) {
        soma += lista[indice][2];
    };
    return soma
};

function calcularMedia(lista) {
    return calcularTotal(lista)/lista.length;
};


let projetosEmOrdemDeNota = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
for(let a = 0; a < projetos.length; a++) {
    for(let b = 0; b < projetos.length; b++) {
        if (projetos[a][2] >= projetosEmOrdemDeNota[b][2]) {
            for(let c = projetosEmOrdemDeNota.length-2-b; c > -1; c -= 1) {
                projetosEmOrdemDeNota[b+c+1] = projetosEmOrdemDeNota[b+c];
            }
            projetosEmOrdemDeNota[b] = projetos[a];
            break;
        }
    }
}
document.querySelector("#primeiroLugar").textContent = projetosEmOrdemDeNota[0][1];
document.querySelector("#segundoLugar").textContent = projetosEmOrdemDeNota[1][1];
document.querySelector("#terceiroLugar").textContent = projetosEmOrdemDeNota[2][1];
console.log(projetosEmOrdemDeNota)

for(let indice = 0; indice < projetos.length; indice++) {
    document.querySelector(`#${projetos[indice][0]}`).textContent = `Projeto: ${projetos[indice][1]}`;
    document.querySelector(`#pontuacao-${projetos[indice][0]}`).textContent = `Pontuação: ${projetos[indice][2]}`;
}

for(let indice = 0; indice < projetos.length; indice++) {
    document.querySelector(`#diagnostico-${projetos[indice][0]}`).textContent = `Resultado Geral: ${calcularDiagnostico(projetos[indice][2])}`;
}

document.querySelector("#media").textContent = `Média das notas: ${calcularMedia(projetos)}`;

document.querySelector("#total").textContent = `Total: ${calcularTotal(projetos)}`

let nProjetosAcimaDaMedia = 0;
for(let indice = 0; indice < projetos.length; indice++) {
    if (projetos[indice][2] > calcularMedia(projetos)) {
        nProjetosAcimaDaMedia += 1;
    };
};
document.querySelector("#projetosAcimaDaMedia").textContent = `Número de projetos acima da média: ${nProjetosAcimaDaMedia}`;