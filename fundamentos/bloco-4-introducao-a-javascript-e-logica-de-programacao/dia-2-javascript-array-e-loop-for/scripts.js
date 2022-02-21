// percorrer o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indice = 0; indice < numbers.length; indice += 1) {
    console.log(numbers[indice]);
}

// some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indice = 0; indice < numbers.length; indice += 1) {
    soma += numbers[indice];
}

console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indice = 0; indice < numbers.length; indice += 1) {
    soma += numbers[indice];
}

let media = soma / numbers.length;

console.log(media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indice = 0; indice < numbers.length; indice += 1) {
    soma += numbers[indice];
}

let media = soma / numbers.length;

if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

console.log(media);

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    } else {
        maior = maior;
    }
}

console.log(maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impar += 1;
    } else {
        impar = impar;
    }
}

console.log(impar);

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [10, 9, 3, 19, 70, 8, 100, 20, 35, 27];

let menor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menor && numbers[index] != 0) {
        menor = numbers[index];
    } else {
        menor = menor;
    }
}

console.log(menor);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

for (let contador = 1; contador <= 25; contador += 1) {
    console.log(contador);
}

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let contador = 1; contador <= 25; contador += 1) {
    console.log(contador / 2);
}