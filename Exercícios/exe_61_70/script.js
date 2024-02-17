/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// exe 061

const array = [25, 36, 64, 81];
const raizQuadrada = (array) => {
  return array.map((elementos) => Math.sqrt(elementos));
};

console.log(raizQuadrada(array));

// exe 062

const repete = (num) => {
  return 'Olá '.repeat(num);
};

console.log(repete(5));

// exe 063

const primo = (num) => {
  const primos = [];
  for (let i = 2; i <= num; i++) {
    let ePrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        ePrimo = false;
        break;
      }
    }
    if (ePrimo) {
      primos.push(i);
    }
  }
  return primos;
};

console.log(primo(50));

// exe 064

const contaPalavras = (string) => {
  return string.split(' ').length;
};

console.log(contaPalavras('Olá, mundo'));

// exe 065

const somaComCallback = (array, callback) => {
  return array.map(callback).reduce((a, b) => a + b, 0);
};

const numeros = [1, 2, 3, 4, 5];
const callback = (num) => num*2;

console.log(somaComCallback(numeros, callback));

// exe 066

const filtraPorCallback = (array, callback) => {
  return array.filter(callback1);
};

const numeros1 = [1, 2, 3, 4, 5, 6];

// Arrow function que verifica se um número é par
const callback1 = (num) => num % 2 === 0;

console.log(filtraPorCallback(numeros1, callback1));

// exe 067

const mapearArrays = (array, callback3) => {
  return array.map(callback3);
};

const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const callback2 = (arr) => arr.reduce((a, b) => a + b, 0);

console.log(mapearArrays(arrays, callback2));

// exe 068

const filtraPorCallback1 = (array, callback) => {
  return array.filter(callback);
};

const arrayN = [8, 2, 3, 6, 9, 7, 1, 0];
const callback3 = (num) => num > 3;

console.log(filtraPorCallback1(arrayN, callback3));

// exe 069

const executaCallback = (n, callback) => {
  for (let i = 0; i <= n; i++) {
    callback(i);
  }
};

const callback4 = (i) => console.log(`Execução: ${i}`);
executaCallback(5, callback4);

// exe 070

const aplicaCallback = (callback, n) => {
  return callback.map((callback) => callback(n));
};

const callback5 = [(num) => num * 2, (num) => num * num, (num) => num/2];
const valor = 4;

console.log(aplicaCallback(callback5, valor));

