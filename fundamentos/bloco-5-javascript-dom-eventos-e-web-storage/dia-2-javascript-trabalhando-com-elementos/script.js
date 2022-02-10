let corpo = document.querySelector('body');

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body 
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
corpo.appendChild(titulo);

// Adicione a tag main com a classe main-content como filho da tag body ;

let principal = document.createElement('main');
principal.classList.add('main-content');
corpo.appendChild(principal);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let secao = document.createElement('section');
secao.classList.add('center-content');
document.querySelector('.main-content').appendChild(secao);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragrafo = document.createElement('p');
paragrafo.innerText = 'Algum Texto.'
document.querySelector('.center-content').appendChild(paragrafo);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let leftSection = document.createElement('section');
leftSection.classList.add('left-content');
document.querySelector('.main-content').appendChild(leftSection);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let rightSection = document.createElement('section');
rightSection.classList.add('right-content');
document.querySelector('.main-content').appendChild(rightSection);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200');
image.classList.add('small-image');
document.querySelector('.left-content').appendChild(image);