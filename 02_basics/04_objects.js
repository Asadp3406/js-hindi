 const tinderuser = new Object()
tinderuser.id= "asad"
 tinderuser.name= "adad"


// console.log(tinderuser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = Object.assign( {},obj1,obj2,obj4)
// console.log(obj3);

const obj3= {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email;
//keys are in form of array
console.log(Object.keys(tinderuser));


const course = {
     "name": "hitesh",
     "coursename": "js in hindi",
     "price": "free"
}

//destrucher
//course.coursename
const{coursename:cou}= course
console.log(cou);

