function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// Exercicio 01

//   O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 

//   Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day .

//   Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday .

//   Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday .

function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthdaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayListItem = document.createElement('li');
        dayListItem.innerHTML = day;
        dayListItem.classList.add('day');
        
        if (day == 24 || day == 25 || day == 31) {
            dayListItem.classList.add('holiday');
        };
        if (day == 4 || day == 11 || day == 18 || day == 25) {
            dayListItem.classList.add('friday');
        };

        monthdaysList.appendChild(dayListItem);
    };
};

createDaysOfMonth();

// Exercicio 02

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };
  
  createHolidayButton('Feriados');

//Exercicio 03

//   Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//   É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'lightgreen';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();
