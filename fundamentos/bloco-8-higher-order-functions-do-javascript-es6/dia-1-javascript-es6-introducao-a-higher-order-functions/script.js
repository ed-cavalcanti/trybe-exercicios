// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada
function newEmployer(name) {
  const employer = {
    nome: name,
    email: `${name.toLowerCase().replace(/ /g, "")}@trybe.com`
  }
  return employer;
} 

const newEmployees = () => {
  const employees = {
    id1: newEmployer('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newEmployer('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newEmployer('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());