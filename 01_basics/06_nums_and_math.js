//******************** Numbers ********************


const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreads = 1000000
console.log(hundreads.toLocaleString()); // 1,000,000
console.log(hundreads.toLocaleString('en-IN')); // 10,00,000 (Indian number system)


//******************** Maths ********************

console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.min(4, 3, 6, 8)); // 8

console.log(Math.random()); // 0.9659353393598147
console.log((Math.random()*10) + 1); // 4.249430590713997
console.log(Math.floor(Math.random()*10) + 1); // 7

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min); // 15
