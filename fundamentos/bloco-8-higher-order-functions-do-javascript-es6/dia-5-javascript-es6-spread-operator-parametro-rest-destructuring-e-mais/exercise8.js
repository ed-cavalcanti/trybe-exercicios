// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

// escreva greet abaixo

const greet = (name, greeting = 'Hi') => {
  return `${greeting} ${name}`;
}

console.log(greet('Stuart'));
