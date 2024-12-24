const marvel_hearos = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_hearos.push(dc_heros);

// console.log(marvel_hearos);
// console.log(marvel_hearos[3][1]);

const allheros = marvel_hearos.concat(dc_heros);
console.log(allheros);

const allnewheros = [...marvel_hearos, ...dc_heros]
// console.log(allnewheros);

const anotherarray = [1, 2, 3, [4, 5, 6], [6, 7,[4, 5]]]
const realanotherarray = anotherarray.flat(Infinity)
console.log(realanotherarray);

console.log(Array.isArray("khushi"));
console.log(Array.from("khushi"));
console.log(Array.from({name:"khushi"}));// interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));