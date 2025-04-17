let code1;

code1 = 7 + 3;
console.log(code1);

const code2 = 100 / 2 - 10;
console.log(code2);

const code3 = (12 % 5) + 37;
console.log(code3);

const message = "The vault has been secured. The combination is:";

const codeA = code1 + "-" + code2 + "-" + code3;
console.log(typeof codeA);

const codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

console.log(message, codeA, codeB);
