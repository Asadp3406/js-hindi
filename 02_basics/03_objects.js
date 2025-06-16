// singlton 
 

//object litral 
const mysysm = Symbol("key")


const jsuser = {
    name : "asad",
    age :"10",
    email : "asad@gmail.com",
    isloggin: false,
    // to use symbol 
    [mysysm] : " asad "
}
// console.log(jsuser.email)

// or 

// console.log(jsuser["email"]);
// console.log(jsuser[mysysm]);


// to change value 
jsuser.email = "pathan@gmail.com"


// console.log(jsuser["email"]);

jsuser.greeting = function() {
    console.log(" hello js user ");
}

console.log(jsuser.greeting());


const greattingtwo =  function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(greattingtwo());
