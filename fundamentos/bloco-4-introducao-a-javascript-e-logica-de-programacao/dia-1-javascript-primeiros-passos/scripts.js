//Operações aritméticas báscias

const a = 4
const b = 6

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(12 % b)

// Retornar o maior de dois números

const num1 = 18
const num2 = 24

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2)
}

// Retornar o maior de 3 números

const num1 = 18
const num2 = 50
const num3 = 102

if (num1 > num2 && num1 > num3) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}

// Dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num = -10

if (num > 0) {
    console.log("positive")
} else if (num < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 60
const angulo2 = 60
const angulo3 = 60

if (angulo1 + angulo2 + angulo3 == 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    console.log("true");
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("erro, valor de angulo não pode ser negativo.");
} else {
    console.log("false");
}
    
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

let entrada = ("PEÃO")
let peça = entrada.toLowerCase()

switch (peça) {
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;

    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;

    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;

    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;

    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;

    case "peão":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
        break;

        case "peao":
            console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
            break;
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

let nota = -10

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota <  90) {
    console.log("B");
} else if (nota >= 70 && nota < 80) {
    console.log("C");
} else if (nota >= 60 && nota < 70) {
    console.log("D");
} else if (nota >= 50 && nota < 60) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F");
} else {
    console.log("erro, nota inválida");
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const num1 = 7
const num2 = 5
const num3 = 42

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log("true")
} else {
    console.log("false")
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const num1 = 30
const num2 = 187
const num3 = 20

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log("true")
} else {
    console.log("false")
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.


let valorCusto = 10
let valorCustoTotal = 10 * 1.2
let valorVenda = 18
let lucro = valorVenda - valorCustoTotal

if (valorCusto < 0 || valorVenda < 0) {
    console.log("erro");
} else {
    console.log(lucro * 1000)
}

// ma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 3000;
let salarioLiquido = null;

if (salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto * 0.92;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto * 0.91;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto * 0.89;
}
else if (salarioBruto > 5189.82) {
    salarioLiquido = salarioBruto - 570.88;
}

if (salarioLiquido <= 1903.98) {
    salarioLiquido = salarioLiquido
} 
else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    salarioLiquido = salarioLiquido * 0.925 + 142.80;
}
else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    salarioLiquido = salarioLiquido * 0.85 + 354.80;
}
else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    salarioLiquido = salarioLiquido * 0.775 + 636.13;

}
else if (salarioLiquido > 4664.68) {
    salarioLiquido = salarioLiquido * 0.725 + 869.36;
    
}

console.log(salarioLiquido)