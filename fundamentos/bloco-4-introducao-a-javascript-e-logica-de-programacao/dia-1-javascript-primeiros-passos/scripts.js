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