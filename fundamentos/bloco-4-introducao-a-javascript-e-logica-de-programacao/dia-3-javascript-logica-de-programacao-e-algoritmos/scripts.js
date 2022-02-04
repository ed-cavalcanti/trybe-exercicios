// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let soma = fatorial[0];

for (let index = 1; index < fatorial.length; index += 1) {
    soma = soma * fatorial[index];
}

console.log(soma);

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab"

let word = "tryber";
let arrayWord = Array.from(word);

let inverter = [];

for (index = arrayWord.length - 1; index >= 0; index--) {
    inverter.push(arrayWord[index]);
}

console.log(inverter);

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let menor = array[0];
let maior = "";

for (index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
        maior = array[index];
    } 
}

for (index = 0; index < array.length; index += 1) {
    if (array[index].length < menor.length) {
        menor = array[index];
    } 
}

console.log("A maior palavra é: " + maior + "e a menor palavra é: " + menor);

