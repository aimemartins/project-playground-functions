// Desafio 1
function compareTrue(ketchup, maionese) {
  if (ketchup === true && maionese === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
let frase = 'vamo que vamo';
let arrayFrase = [];
function splitSentence(frase) {
  for (index = 0; index < frase.length; index += 1) {
    if (frase[index] === '') {
      arrayFrase.push(', ');
    } else {
      arrayFrase.push(frase[index]);
    }
  }
  return arrayFrase;
}
console.log(splitSentence(frase));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
