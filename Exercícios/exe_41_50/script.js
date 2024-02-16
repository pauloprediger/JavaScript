/* eslint-disable linebreak-style */

// 041

let decimal = 101;
let binario = '';

do {
  binario = decimal % 2 + binario;
  decimal = Math.floor(decimal / 2);
} while (decimal > 0);

console.log(binario);

// 042

const binarioN = '1000';
let decimalN = 0;

for (let i = binarioN.length - 1, j = 0; i >=0; i--, j++) {
  decimalN += parseInt(binarioN[i]) * Math.pow(2, j);
}

console.log(decimalN);

// 043

let numero = 12321;
let numeroInvertido = 0;
const original = numero;

while (numero !== 0) {
  const digito = numero % 10;
  numeroInvertido = numeroInvertido * 10 + digito;
  numero = Math.floor(numero / 10);
}

if (numeroInvertido === original) {
  console.log('É um palindromo');
} else {
  console.log('Não é um palindromo');
}


// 044

// Exemplo de duas matrizes (assumindo que sempre têm o mesmo tamanho)
const matrizA = [
  [1, 2],
  [3, 4],
];

const matrizB = [
  [5, 6],
  [7, 8],
];

// Inicializa a matriz de resultado com zeros
const linhas = matrizA.length;
const colunas = matrizA[0].length;
const matrizResultado = [];

for (let i = 0; i < linhas; i++) {
  matrizResultado[i] = [];
  for (let j = 0; j < colunas; j++) {
    matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j];
  }
}

// Exibe o resultado
console.log('Matriz A:');
console.log(matrizA);
console.log('Matriz B:');
console.log(matrizB);
console.log('Matriz Resultado:');
console.log(matrizResultado);


// exe 045

const helloWord = () => {
  console.log('Hello, Word!');
};

helloWord();

// exe 046

const somaN = (num1, num2) => {
  return num1+num2;
};

console.log(somaN(5, 9));

// exe 047

const quadrado = (num) => {
  return num**2;
};
console.log(quadrado(9));

// exe 048

const parImpar = (num) => {
  if (num % 2 === 0) {
    return 'par';
  } else {
    return 'impar';
  }
};

console.log(parImpar(2));
console.log(parImpar(3));

// exe 049

const maiorNumero = (num1, num2, num3) => {
  if ((num1 > num2) && (num1 > num3)) {
    return num1;
  } else if ((num2 > num1) && (num2 > num3)) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maiorNumero(4, 7, 9));
console.log(maiorNumero(9, 7, 8));
console.log(maiorNumero(4, 15, 9));

// exe 050
const inverteString = (palavra) => {
  return palavra = palavra.split('').reverse().join('');
};

console.log(inverteString('Banana'));
