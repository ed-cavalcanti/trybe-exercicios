let corpo = document.querySelector('body');

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body 
let titulo = document.createElement('h1');
let texto = document.createTextNode('Exercício 5.2 - JavaScript DOM');
titulo.appendChild(texto);
corpo.appendChild(titulo);

// Adicione a tag main com a classe main-content como filho da tag body ;

let principal = document.createElement('main');
principal.classList.add('main-content');
corpo.appendChild(principal);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let secao = document.createElement('section');
secao.classList.add('center-content');
document.querySelector('.main-content').appendChild(secao);