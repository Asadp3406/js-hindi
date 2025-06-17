// for of 
// this loops are array specefic 

const arr=[1,2,3,4,5]

for (const val of arr) {
    console.log(val);  
}




// maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key,value] of map) {
   // console.log(key, '-', value);  
}

