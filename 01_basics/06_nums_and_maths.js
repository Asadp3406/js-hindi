const score = 400 ;
//console.log(score);

const balence = new Number(100)

//console.log(balence);

//console.log(balence.toString());
//console.log(balence.toFixed(3));

const othernumber =  123.8966
//console.log(othernumber.toPrecision(3));

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));


// =============Maths ===============
// console.log(Math);
// //absolute value 
// console.log(Math.abs(-4));
// //round off values 
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));

// min value 
//console.log(Math.min(2,4,3));

// random value 
// we added 1 beacuse if there is 0.2 math floor will shift it to 0 so 
console.log(Math.floor(Math.random()*10) +1);

const min = 10 
const max = 20
// remember this formula 
// range 

console.log(Math.floor(Math.random() * (max-min + 1 ))+min)
