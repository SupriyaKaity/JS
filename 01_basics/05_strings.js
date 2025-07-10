const name = "Supriya"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('fre,eFi,re')

console.log(gameName[0]); // b
console.log(gameName.__proto__);

console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // BGMI
console.log(gameName.charAt(2)); // e
console.log(gameName.indexOf('e')); // 2

const newString = gameName.substring(0, 4)
console.log(newString); // free

const anotherString = gameName.slice(-7, 7)
console.log(anotherString); // ree

const newStringOne = "   Supriya   "
console.log(newStringOne); //    Supriya
console.log(newStringOne.trim()); // Supriya

const url = "https://supriya.com/supriya%22kaity"
console.log(url.replace('%22', '_'));
console.log(url.includes('supriya')); // true

console.log(gameName.split(','));



