// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((accumulator, name) => accumulator + name.split('').reduce((accumulator2, currentLetter) => {
        if (currentLetter === 'a' || currentLetter === 'A') return accumulator2 + 1;
        return accumulator2;
     }, 0), 0);
}
console.log(containsA());
