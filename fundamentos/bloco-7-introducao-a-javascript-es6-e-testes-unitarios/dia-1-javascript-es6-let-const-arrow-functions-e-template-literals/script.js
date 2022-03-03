// modificar função para usar arrow functions e templte strings
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !'`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Mosttre na tela os números em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemNumerica = (array) => {
  return array.sort(function(a, b){return a - b});
}

console.log(`${ordemNumerica(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Crie uma função que receba um número e retorne seu fatorial.
const nFatorial = (n) => {
  let fatorial = 0;
  for (let index = 0; index < n; index += 1) {
    fatorial += n * index;
  }
  return fatorial;
}

console.log(nFatorial(4));
