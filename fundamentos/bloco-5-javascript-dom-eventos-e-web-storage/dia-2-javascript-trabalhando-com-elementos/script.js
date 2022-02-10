// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body 
let titulo = document.createElement('h1');
let texto = document.createTextNode('Exercício 5.2 - JavaScript DOM');
titulo.appendChild(texto);
document.body.appendChild(titulo);

