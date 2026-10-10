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


let primeiroLugar = [];
let segundoLugar = [];
let terceiroLugar = [];
for(let indice = 0; indice < projetos.length; indice++) {
    if (indice === 0) {
        primeiroLugar = projetos[indice]; 
        segundoLugar = projetos[indice];
        terceiroLugar = projetos[indice];
    } else {
        if (projetos[indice][2] > primeiroLugar[2]) {
            terceiroLugar = segundoLugar;
            segundoLugar = primeiroLugar;
            primeiroLugar = projetos[indice]; 
        } else if (projetos[indice][2] > segundoLugar[2]) {
            terceiroLugar = segundoLugar;
            segundoLugar = projetos[indice];
        } else if (projetos[indice][2] > terceiroLugar[2]) {
            terceiroLugar = projetos[indice];
        }
    }
};
document.querySelector("#primeiroLugar").textContent = primeiroLugar[1]
document.querySelector("#segundoLugar").textContent = segundoLugar[1]
document.querySelector("#terceiroLugar").textContent = terceiroLugar[1]


for(let indice = 0; indice < projetos.length; indice++) {
    document.querySelector(`#${projetos[indice][0]}`).textContent = `Projeto: ${projetos[indice][1]}`;
    document.querySelector(`#pontuacao-${projetos[indice][0]}`).textContent = `Pontuação: ${projetos[indice][2]}`;
}

for(let indice = 0; indice < projetos.length; indice++) {
    document.querySelector(`#diagnostico-${projetos[indice][0]}`).textContent = `Resultado Geral: ${calcularDiagnostico(projetos[indice][2])}`;
};

document.querySelector("#media").textContent = `Média das notas: ${calcularMedia(projetos)}`;

document.querySelector("#total").textContent = `Total: ${calcularTotal(projetos)}`

let nProjetosAcimaDaMedia = 0;
for(let indice = 0; indice < projetos.length; indice++) {
    if (projetos[indice][2] > calcularMedia(projetos)) {
        nProjetosAcimaDaMedia += 1;
    };
};
document.querySelector("#projetosAcimaDaMedia").textContent = `Número de projetos acima da média: ${nProjetosAcimaDaMedia}`;