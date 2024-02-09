// npx eslint --fix script.js

// Exe 001
const age = 24;
const weight = 76;

// Exe 002
const pi = 3.14159;

// Exe 003
const numeroMax = Number.MAX_VALUE;

// Exe 004
const Fname = 'Paulo';
const lastName = 'Prediger';
const fullName = Fname +' '+lastName;

// Exe 005
const num1 = 5;
const num2 = 5;
const res = num1 + num2;

// Exe 006
const bool1 = true;
const bool2 = false;

// Exe 007
const var1 = 10;
const var2 = 20;
const var3 = 30;

// Exe 008
let num = 0;
num++;

console.log(`Idade:${age}
Peso:${weight}
PI:${pi}
Número Máximo:${numeroMax}
Nome completo: ${fullName}
Soma: ${res}
`);

console.log('AND: ', bool1 && bool2);
console.log('OR: ', bool1 || bool2);
console.log('NOT: ', !bool1);

console.log('num1 < num2: ', var1 < var2);
console.log('num2 > num3: ', var2 > var3);
console.log('num1 == num3: ', var1 == var3);

console.log(num);

