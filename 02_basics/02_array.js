const marv_heros = [ "thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marv_heros.push(dc_heros)
// console.log(marv_heros);

// console.log(marv_heros[1,1]);

// let newheros = marv_heros.concat(dc_heros)
// console.log(newheros);

//spread 
const allnewheros = [...marv_heros,...dc_heros]
console.log(allnewheros);


const anotherarray = [1,2,3,[3,4,2],4,[4,2,4]]
const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array);


//from interesting 
console.log(Array.from("Asad"));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
