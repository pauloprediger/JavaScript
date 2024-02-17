/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */


// Exe 009
function verificaNumero(num) {
  if (num < 0) {
    console.log('Negativo');
  } else if (num > 0) {
    console.log('Positivo');
  } else {
    console.log('Zero');
  }
}

console.log(verificaNumero(10));
console.log(verificaNumero(-5));
console.log(verificaNumero(0));

// Exe 010

function mediaAlunos(nota1, nota2) {
  const med = (nota1 + nota2) / 2;
    med < 7 ? console.log(`Aluno reprovado com média: ${med}`) :
        console.log(`Aluno aprovado com média: ${med}`);
}

mediaAlunos(2, 7);
mediaAlunos(4, 5);
mediaAlunos(5, 6);
mediaAlunos(6, 7);
mediaAlunos(8, 8);
mediaAlunos(10, 9);


// Exe 011

function idade(age) {
  if (age < 16) {
    console.log('Você não vota: ', age);
  } else if ((age >= 16 && age < 18) || age >= 70) {
    console.log('Voto Facultativo: ', age);
  } else {
    console.log('Voto obrigatório: ', age);
  }
}

idade(25);
idade(18);
idade(16);
idade(15);
idade(65);
idade(85);
idade(70);

// Exe 012

function situacaoAlunos(nota) {
  if (nota < 5) {
    console.log('Aluno reprovado: ', nota);
  } else if (nota >= 5 && nota <= 7) {
    console.log('Aluno de recuperação: ', nota);
  } else {
    console.log('Aluno Aprovado: ', nota);
  }
}
situacaoAlunos(7);
situacaoAlunos(5);
situacaoAlunos(6);
situacaoAlunos(7);
situacaoAlunos(8);
situacaoAlunos(4);


// Exe 013

function calculaIMC(peso, altura) {
  const imc = peso / (altura ** 2);
  if (imc < 18.5) {
    console.log('Abaixo do Peso');
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
  } else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
  } else {
    console.log('Obesidade');
  }
}

calculaIMC(60, 1.7);
calculaIMC(80, 1.7);
calculaIMC(90, 1.7);


// Exe 014

function verificaBissexto(ano) {
  if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
    console.log(ano + ' é Bissexto');
  } else {
    console.log(ano + ' Não é Bissexto');
  }
}


verificaBissexto(2000);
verificaBissexto(2001);
verificaBissexto(2100);

// Exe 015

function verificaPalindromo(palavra) {
  palavra = palavra.toLowerCase();
  const palavraInvertida = palavra.split('').reverse().join('');
  if (palavraInvertida === palavra) {
    console.log(`${palavra} é um palíndromo`);
  } else {
    console.log(`${palavra} não é um Palíndromo`);
  }
}

verificaPalindromo('arara');
verificaPalindromo('Paulo');

// Exe 016

function maiorNumero(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1 + ' é o maior');
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2 + ' é o maior');
  } else {
    console.log(n3 + ' é o maior');
  }
}

maiorNumero(1, 2, 3);
maiorNumero(7, 9, 10);
maiorNumero(12, 9, 10);
maiorNumero(10, 29, 10);

// Exe 017

function parOuImpar(num) {
  if (num % 2 == 0) {
    console.log(num + ' é Par');
  } else {
    console.log(num + ' é Impar');
  }
}

parOuImpar(1);
parOuImpar(2);
parOuImpar(3);
parOuImpar(4);
parOuImpar(5);
parOuImpar(6);

// Exe 018

function podeDirigir(idade) {
  idade >= 18 ? console.log('Pode dirigir') : console.log('Não pode dirigir');
}

podeDirigir(20);
podeDirigir(17);
podeDirigir(18);


// Exe 019

function dentroDoIntervalo(num, limiteInferior, limiteSuperior) {
  if (limiteInferior > limiteSuperior) {
    console.log('Impossível calcular, limite inferior maior que superior');
  } else if (num >= limiteInferior && num <= limiteSuperior) {
    console.log('O número está dentro do intervalo');
  } else {
    console.log('O número não está dentro do intervalo');
  }
}

dentroDoIntervalo(0, 1, 10);
dentroDoIntervalo(-2, 1, 10);
dentroDoIntervalo(20, 1, 10);
dentroDoIntervalo(-1, 1, 10);
dentroDoIntervalo(5, 10, 2);

// Exe 020

function classificaAluno(nota) {
  if (nota >= 90) {
    console.log('A');
  } else if (nota >= 80) {
    console.log('B');
  } else if (nota >= 70) {
    console.log('C');
  } else if (nota >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

classificaAluno(10);
classificaAluno(20);
classificaAluno(30);
classificaAluno(40);
classificaAluno(50);
classificaAluno(60);
classificaAluno(70);
classificaAluno(80);
classificaAluno(90);


// Ece 021

function defineEstacao(num) {
  if (num < 3 || num === 12) {
    console.log('Verão');
  } else if (num < 6) {
    console.log('Outono');
  } else if (num < 9) {
    console.log('Inverno');
  } else {
    console.log('Primavera');
  }
}

defineEstacao(1);
defineEstacao(2);
defineEstacao(3);
defineEstacao(4);
defineEstacao(5);
defineEstacao(6);
defineEstacao(7);
defineEstacao(8);
defineEstacao(9);
defineEstacao(10);
defineEstacao(11);
defineEstacao(12);

// Exe 022

const quantidadeDiasMes = (mes) => {
  switch (mes) {
    case 2:
      return '28 ou 29 dias';
    case 4:
    case 6:
    case 9:
    case 11:
      return '30 dias';
    default:
      return '31 dias';
  }
};

console.log(quantidadeDiasMes(2));
console.log(quantidadeDiasMes(5));
console.log(quantidadeDiasMes(6));
console.log(quantidadeDiasMes(10));

// Exe 023

function verificaCor(cor) {
  cor = cor.toLowerCase();
  switch (cor) {
    case 'verde':
      console.log('Avance, Sinal Aberto');
      break;
    case 'vermelho':
      console.log('Pare, sinal fechado');
      break;
    case 'amarelo':
      console.log('Alerta, reduza a velocidade');
      break;
    default:
      console.log(`${cor} não é uma cor validada`);
  }
}

verificaCor('verde');
verificaCor('vermelho');
verificaCor('amarelo');
verificaCor('azul');
verificaCor('Púrpura');

// Exe 024 

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exe 025

let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
}

// Exe 026

i = 0;
do {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);

// Exe 027

for (let i = 0; i <= 10; i++) {
  console.log('5 x ' + i + ': '+ i * 5);
}

// Exe 028
let a = 1;
let soma = 0;

while (a <= 100) {
  soma+=a;
  a++;
}
console.log('A soma dos valores entre 1 e 100 é: ' + soma);

// Exe 029

let c = 1;
do {
  if (c % 2 == 0) {
    console.log(c);
  }
  c++;
} while (c <= 100);

// Exe 030

function isPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function imprimirNumerosPrimos() {
  for (let i = 2; i <= 100; i++) {
    if (isPrimo(i)) {
      console.log(i);
    }
  }
}

imprimirNumerosPrimos();
