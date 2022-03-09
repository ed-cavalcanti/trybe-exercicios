// Crie uma HOF que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada
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

// Crie uma HOF que verifica a pontuação do aluno de acordo com acertos e erros;
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answers = (corretsAnswers, studentAnswers, callback) => {
 return callback(corretsAnswers, studentAnswers);
}

function verifyAnswers (corretsAnswers, studentAnswers) {
  let count = 0;
  for (let index = 0; index < corretsAnswers.length; index += 1) {
    if (studentAnswers[index] === corretsAnswers[index]) {
      count += 1.0;
    } else if (studentAnswers === 'N.A') {
      count = count;
    } else {
      count -= 0.5;
    };
  };
  return count;
};

console.log(answers(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));