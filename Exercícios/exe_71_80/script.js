/* eslint-disable linebreak-style */
// exe 071

const executaDepois = (callback, tempo) => {
  setTimeout(callback, tempo);
};
const callback = () => console.log('Executado');
executaDepois(callback, 2000);

// exe 072

const applyCallbackNtimes = (n, callback, valorInicial) => {
  let valor = valorInicial;
  for (let i = 0; i < n; i++) {
    callback.forEach((callback) => {
      valor = callback(valor);
    });
  }
  return valor;
};

const callback1 = [(num) => num * 2, (num) => num + 1];
const valorInicial = 1;

console.log(applyCallbackNtimes(2, callback1, valorInicial));

// exe 073

const aplicaCallbaksComIntervalo = (num, arrayDeCallback, valorInicial) => {
  let valor = valorInicial;
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < arrayDeCallback.length) {
      valor = arrayDeCallback[i](valor);
      i++;
    } else {
      clearInterval(intervalId);
      console.log(valor);
    }
  }, num);
};

const arrayDeCallback = [(num) => num * 2, (num) => num + 1];
const valorInicial1 = 1;

aplicaCallbaksComIntervalo(2000, arrayDeCallback, valorInicial1);

// exe 074

const mapearSemAlterar = (array, callback) => {
  return array.map(callback);
};

const numeros = [1, 2, 3, 4, 5];
const callback2 = (num) => num * 2;

console.log(mapearSemAlterar(numeros, callback2));
console.log(numeros);

// exe 075

const aplicarCallbacksInversamente = (callback, valor) => {
  return callback.reverse().map((callback) => callback(valor));
};

const arrayDeCallback1 = [(num) => num*2, (num) => num * num, (num) => num/2];
const valor = 4;

console.log(aplicarCallbacksInversamente(arrayDeCallback1, valor));

// exe 076

const obj = {};

obj.numero = 10;
obj.text = 'Olá, mundo';
obj.booleano = true;

console.log(obj);

// exe 077

const livro = {
  titulo: 'O Hobbit',
  autor: 'J.R.R Tolkien',
  numeroPaginas: 310,
  descricao: function() {
    // eslint-disable-next-line max-len
    console.log(`O livro ${this.titulo}, escrito por ${this.autor}, tem: ${this.numeroPaginas} páginas`);
  },
};

livro.descricao();

// exe 078

const cachorro = {
  raca: 'Pincher',
  nome: 'Mika',
  idade: '8',
  idadeEmAnosHumanos: function() {
    return this.idade*7;
  },
};

console.log(cachorro.idadeEmAnosHumanos());

// exe 079

const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
  ano: 1969,
  velidadeAtual: 0,
  aceletar: function() {
    this.velidadeAtual +=10;
  },
  frear: function() {
    this.velidadeAtual-=10;
    if (this.velidadeAtual < 0) {
      this.velidadeAtual = 0;
    }
  },
  obterVelocidade: function() {
    return this.velidadeAtual;
  },
};


carro.aceletar();
console.log(carro.obterVelocidade());
carro.frear();
console.log(carro.obterVelocidade());

// exe 080

const aluno = {
  nome: 'Paulo Prediger',
  notas: [10, 2, 8, 9],

  calculaMedia: function() {
    const soma = this.notas.reduce((a, b) => a + b, 0);
    const media = soma/this.notas.length;
    return media;
  },
};

console.log(aluno.calculaMedia());
