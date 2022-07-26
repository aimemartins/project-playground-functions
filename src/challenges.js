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
// Pesquisa realizada na página https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitSentence(frase) {
  let separador = " ";
  let arrayFrase = frase.split(separador);
  return arrayFrase;
}

// Desafio 4

function concatName(arrayFrase) {
  let primeiro = arrayFrase[0];
  let ultimo = arrayFrase[arrayFrase.length - 1];
  let frase = ultimo + ', ' + primeiro;
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties;
  let campeonato = pontosWins + pontosTies;
  return campeonato;
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
