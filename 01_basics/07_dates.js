// let mydate = new Date()
// console.log(mydate.toString());

// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// // data is an object 
// console.log(typeof mydate);

//let mycreateddate = new Date(2025,0,23,4)
// let mycreateddate = new Date ("01-12-2005")
// console.log(mycreateddate.toString());

// // to cheack timestamp 
// let mytimestamp = Date.now()
// console.log(mytimestamp);


// imp to convert is seconds  
console.log(Math.floor(Date.now()/1000));

let newDate= new Date ()
console.log(newDate.getMonth());


newDate.toLocaleDateString('default ', {
    weekday:"long",
    timeZone: " "
})
