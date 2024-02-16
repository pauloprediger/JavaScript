/* eslint-disable linebreak-style */

// exe 051

const fatorial = (num) => {
  let fat = 1;
  for (let i = num; i >= 1; i--) {
    fat *= i;
  }
  return fat;
};

console.log(fatorial(10));

// exe 052

const fibonacci = (n) => {
  let a = 0; let b=1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

console.log(fibonacci(15));

// exe 053

const primo = (num) => {
  let divisores = 0;
  for (i = 1; i < num; i++) {
    if (num % i === 0 ) {
      divisores++;
    }
  }
  if (divisores === 1) {
    return 'primo';
  } else {
    return 'não é primo';
  }
};

console.log(primo(11));

// exe 054

const array = [5, 2, 8, 1, 3];

const ordenaDrecescente = (array) => {
  return array.sort((a, b) => b - a);
};

console.log(ordenaDrecescente(array));

// exe 055

const menor = (array) => {
  return Math.min(...array);
};

console.log(menor(array));

// exe 056

const maior = (array) => {
  return Math.max(...array);
};

console.log(maior(array));

// exe 057

const somaImpares = (array) => {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      soma+=array[i];
    }
  }
  return soma;
};

console.log(somaImpares(array));


// exe 058

const somaPares = (array) => {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      soma+=array[i];
    }
  }
  return soma;
};

console.log(somaPares(array));

// exe 059

const dobra = (array) => {
  return array.map((num) => num*2);
};

console.log(dobra(array));

// exe 060

const quadrado = (array) => {
  return array.map((num) => num**2);
};

console.log(quadrado(array));
