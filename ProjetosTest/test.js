// calculadora de test para aprender JS usando o console 

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return a / b;
}


function calcular(a, b, operacao) {
    switch (operacao) {
        case "+" : 
             return soma(a, b);
        case "-" :
             return subtracao(a, b);
        case "*" :
             return multiplicacao(a, b);
        case "/" :
             return divisao(a, b);
        default:
             return "Operação inválidaa!";
    }
}

// tela de resultados no console

function mostrarResultado(a, b, operacao) {
    console.clear();
    const resultado = calcular(a, b, operacao);
    console.log("=== Calculadora ===");
    console.log("Operacao: ${a} ${operacao} ${b}");
    console.log("Resultado: " + resultado);
}

// e entao voce chama mostrarResultado com valores desejados

mostrarResultado(150, 10, "/");