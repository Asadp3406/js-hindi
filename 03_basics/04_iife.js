// immediately invoked function expression 
// used to remove global scope pollutin

// immeditate execution 
(function chai(){

    //named iife 
    console.log("db connected");
    
})();

// ; have to use semicolan 

( (name) => {
console.log(`db is connected to ${name}`);

}

)("Asad")
    