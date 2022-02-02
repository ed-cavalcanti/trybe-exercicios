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

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("true");
} else {
    console.log("false");
}
    
