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

// Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Nome x aqui!"
// Parâmetro: "Samuel"
// Retorno: "Nome Samuel aqui!"

const findX = (string, nome) => {
  let text = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== 'x') {
      text += string[index];
    } else {
      text += nome;
    }
  }
  return text;
}

// console.log(findX('Nome x aqui', 'Samuel'));

//Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

let skills = ['GitHub', 'Linux', 'HTML', 'CSS', 'JavaScript'];

// Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Nome x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...".

const skillsShare = (frase1, skills1) => {
  console.log(`${frase1}! Minhas cinco principais habilidades são: `);
  for (let index = 0; index < skills1.length; index += 1) {
    console.log(skills1[index]);
  }
}

skillsShare(findX('Nome x aqui', 'Samuel'), skills);
