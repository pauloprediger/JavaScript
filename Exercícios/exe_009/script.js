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

// Exe 18

function podeDirigir(idade) {
  idade >= 18 ? console.log('Pode dirigir') : console.log('Não pode dirigir');
}

podeDirigir(20);
podeDirigir(17);
podeDirigir(18);


