const marvet_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const all_heros = marvet_heros.concat(dc_heros)
console.log(all_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 const all_new_heros = [...marvet_heros, ...dc_heros]
 console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
 
 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array );



 console.log (Array.isArray("Supriya")); // false
 console.log (Array.from("Supriya")); // ['S', 'u', 'p', 'r', 'i', 'y', 'a']
console.log (Array.from({name: "Supriya"})); // [] interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
