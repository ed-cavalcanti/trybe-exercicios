// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);

console.log(sum(1, 10, 15, 25, 36, 2));
