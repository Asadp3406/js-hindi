const useremail = "asad.ay"
if (useremail){
    console.log("got user email");
    
} else 
 {
  console.log("dont have user email");
    
}
// falsy values 

//false 
//0
//-0
//bigint 0n
// empty string " "
// nulll undefined NaN


//truthy 
//"0"
// "false" string me likha hai\
// " " 
//[]
// {}
//function (){} empty funciton

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// terniary oprator 
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")