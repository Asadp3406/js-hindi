// const user = {
//     username : "asad",
//     logincount : 3 , 
//     signedin : true 

// }
// console.log(user());


function user (username,logincount,isloggedin){
   this.username = username
   this.logincount=logincount
   this.isloggedin=isloggedin
 
  // return this 
}
const userone = new user("Asad",34,true)
console.log(userone);

