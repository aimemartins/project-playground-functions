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
function highestCount(array) {
  let maiorNumero = Number.NEGATIVE_INFINITY;
  let maiorRepetido = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      maiorRepetido.push(maiorNumero);
    }
  }
  return maiorRepetido.length;
}

// Desafio 7
// Pesquisa relizada no site https://www.youtube.com/watch?v=F26OCFOvMPU
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);

  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } if (distMouseCat1 > distMouseCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(num) {
  let arrayNum = [];
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] % 3 === 0 && num[i] % 5 !== 0) {
      arrayNum.push('fizz');
    } if (num[i] % 5 === 0 && num[i] % 3 !== 0) {
      arrayNum.push('buzz');
    } if (num[i] % 5 === 0 && num[i] % 3 === 0) {
      arrayNum.push('fizzBuzz');
    } if (num[i] % 5 !== 0 && num[i] % 3 !== 0) {
      arrayNum.push('bug!');
    };
  };
  return arrayNum;
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
