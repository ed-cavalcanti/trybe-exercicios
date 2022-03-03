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

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (frase) => {
  let maior = '';
  frase.split(" ").forEach(palavra => {
    if (palavra.trim().length > maior.length) {
      maior = palavra.trim();
    }
  })
  return maior;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
let contador = 0;
let p = document.querySelector('#contador')

const button = document.querySelector('#click');
button.addEventListener('click', () => {
  contador += 1;
  p.innerHTML = contador;
});
