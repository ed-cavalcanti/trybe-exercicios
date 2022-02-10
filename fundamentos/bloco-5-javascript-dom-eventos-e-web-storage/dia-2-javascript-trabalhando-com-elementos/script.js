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

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listItem = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

let list = document.createElement('ul');
document.querySelector('.right-content').appendChild(list);

let rightContent = document.querySelector('.right-content');

for (let index = 0; index < listItem.length; index += 1) {
    let listLi = document.createElement('li');
    listLi.innerText = listItem[index];
    rightContent.appendChild(listLi);
}

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (index2 = 0; index2 < 3; index2 += 1) {
    let titulo3 = document.createElement('h3');
    titulo3.innerText = 'Subtítulo';
    document.querySelector('.main-content').appendChild(titulo3);
}

//



