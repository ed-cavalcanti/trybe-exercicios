// percorrer o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indice = 0; indice < numbers.length; indice += 1) {
    console.log(numbers[indice])
}

// some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indice = 0; indice < numbers.length; indice += 1) {
    soma += numbers[indice]
}

console.log(soma)