 //******************Objects******************************************** */

 //object declaration




 //1.object literals
 const mtSymb = Symbol("key1")
 const jsuser = {
    name:"puja",
    "full name":"puja bhujbal",
    [mtSymb]:"mykey",
    age:12,
    location:"pune",
    email:"puja@gmail.com",
    isLogged:false,
    lastLogedin:["monday","tuesday"]

 }
//two types to access value of methode
 console.log(jsuser.email);
 console.log(jsuser["email"]);
 console.log(jsuser["full name"]);
 console.log(jsuser[mtSymb]);

 //change the value of the object
 jsuser.name = "puja Londhe"
 console.log(jsuser["name"]);

//lock the object 
//Object.freeze(jsuser)

//object with function 
jsuser.greetings = function (){
    console.log("Hellow js user")
}
jsuser.greetings2 = function (){
    console.log(`Hellow js user , ${this.name}`)
}
    

console.log(jsuser.greetings())
console.log(jsuser.greetings2())

 //2.singleton object 

 const tinderUser = new Object(); 

 tinderUser.id="1234abc";
 tinderUser.name = "akshay";
 tinderUser.isLogged = false;
console.log(tinderUser);

//nested bject

const regularUser = {
    email :"akshay@gmail.com",
    fullname:{
        userfullname :{
                fname:"akshay",
                lname:"londhe"
        }
    }
}
console.log(regularUser.fullname.userfullname)

//object combine
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3 ={obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//spread
const obj4 ={...obj1,...obj2}
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users =[
    {
        id:1,
        email:"akshay@gmail.com"
    },
    {},
    {},
    {}

]
//console.log(users[1].email)
console.log(tinderUser)
//keys()
console.log(Object.keys(tinderUser))
//values()
console.log(Object.values(tinderUser))
//entries()
console.log(Object.entries(tinderUser))
//hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLogged'))//true 

//de-structuring object

const course = {
    coursename :"javascript hindi",
    price :999,
    courseInstructure:"puja"

}

const {courseInstructure :inst} = course
console.log(inst)

