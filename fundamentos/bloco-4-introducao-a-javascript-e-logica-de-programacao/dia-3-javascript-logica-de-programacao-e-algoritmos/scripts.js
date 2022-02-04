// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let soma = fatorial[0];

for (let index = 1; index < fatorial.length; index += 1) {
    soma = soma * fatorial[index];
}

console.log(soma);

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab"