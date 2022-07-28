// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC))
      if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB))
      return true
  }
  return false;
}
console.log(triangleCheck(40, 30, 50));
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
