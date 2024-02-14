/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// exe 031

let minN = 1;
let maxN = 100;
let chute = Math.floor((maxN + minN) / 2);
const numeroPensado = 58;

while (chute !== numeroPensado) {
  if (chute > numeroPensado) {
    maxN = chute;
  } else {
    minN = chute;
  }
  chute = Math.floor((maxN + minN) / 2);
}

console.log('O número pensado é ' + chute);


// Exe 032

const escolhaUsuario = 'pedra';
let escolhaComputador;
let resultado;

do {
  aleatorio = Math.floor(Math.random() * 3);
  switch (aleatorio) {
    case 0:
      escolhaComputador = 'pedra';
      break;
    case 1:
      escolhaComputador = 'papel';
      break;
    default:
      escolhaComputador = 'tesoura';
  }
  if ((escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') || (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') || (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')) {
    resultado = 'jogador venceu';
  } else if (escolhaUsuario === escolhaComputador) {
    resultado = 'empate';
  } else {
    resultado = 'computador venceu';
  }
} while (resultado === 'empate');
console.log(` Usuário: ${escolhaUsuario}, Computador: ${escolhaComputador}, resultado ${resultado}`);

// exe 033

let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

for (let i = 0; i < 8; i++) {
  const nextNum = num1 + num2;
  console.log(nextNum);
  num1 = num2;
  num2 = nextNum;
}

// exe 034

let j = 1;
while (j <= 100) {
  if ((j % 3 == 0) && (j % 5 == 0)) {
    console.log('BuzzFizz');
  } else if (j % 3 == 0) {
    console.log('Buzz');
  } else if ((j % 5 == 0)) {
    console.log('Fizz');
  } else {
    console.log(j);
  }
  j++;
}

// exe 035


for (let a = 1; a <= 10; a++) {
  const numeroTriangular = (a * (a + 1)) / 2;
  console.log(numeroTriangular);
}

// exe 036

for (let b = 1; b <= 50000; b++) {
  let soma = 0;
  for (let c = 1; c < b; c++) {
    if (b % c == 0) {
      soma += c;
    }
  }
  if (soma === b) {
    console.log(b);
  }
}

// exe 037

let d = 1;
soma = 0;

do {
  soma += d**d;
  console.log(soma);
  d++;
} while (d <= 10);

// exe 038

let e = 1;
somaN = 0;

do {
  somaN += e**3;
  console.log(somaN);
  e++;
} while (e <= 10);

// exe 039

let fatorial = 1;
for (let f = 4; f >= 2; f--) {
  fatorial *= f;
}
console.log(fatorial);

// exe 040

const originalString = 'paralelepipedo';
let invertedString = '';

let index = originalString.length - 1;

while ( index >= 0 ) {
  invertedString += originalString[index];
  index--;
}
console.log(invertedString);
