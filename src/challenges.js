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
    }
  }
  return arrayNum;
}

// Desafio 9
let text = 'How are you today?';
function encode(text) {
  let textEncode = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === 'a') {
      textEncode.push(1);
    } if (text[i] === 'e') {
      textEncode.push(2);
    } if (text[i] === 'i') {
      textEncode.push(3);
    } if (text[i] === 'o') {
      textEncode.push(4);
    } if (text[i] === 'u') {
      textEncode.push(5);
    } if (text[i] !== 'a' && text[i] !== 'e' && text[i] !== 'i' && text[i] !== 'o' && text[i] !== 'u') {
      textEncode.push(text[i]);
    }
  }
  return textEncode.join('');
}
let text2 = 'H4w 1r2 y45 t4d1y?';
function decode(text2) {
  let textDecode = [];
  for (let i = 0; i < text2.length; i += 1) {
    if (text2[i] === '1') {
      textDecode.push('a');
    } if (text2[i] === '2') {
      textDecode.push('e');
    } if (text2[i] === '3') {
      textDecode.push('i');
    } if (text2[i] === '4') {
      textDecode.push('o');
    } if (text2[i] === '5') {
      textDecode.push('u');
    } if (text2[i] !== '1' && text2[i] !== '2' && text2[i] !== '3' && text2[i] !== '4' && text[i] !== '5') {
      textDecode.push(text2[i]);
    }
  }
  return textDecode.join('');
}
console.log(encode(text));
console.log(decode(text2));
// Desafio 10
function techList(arrayTech, name) {
  let objeto = {};
  let arrayDeObjetos = [];
  for (let i = 0; i < arrayTech.length; i += 1) {
    objeto.tech = arrayTech[i];
    objeto.name = name;
  }
  arrayDeObjetos.push(objeto);
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return arrayDeObjetos;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
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
