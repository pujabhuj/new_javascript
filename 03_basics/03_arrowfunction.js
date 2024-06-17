const user ={
    username:"puja",
    price:199,
    WelcomeMessage:function(){
        console.log(`Welcome ${this.username}, to website`)
        console.log(this)
    }

}
user.WelcomeMessage()
user.username ="devashree";
user.WelcomeMessage()
//console.log(this)//empty objectin node enviroment

////***********Arrow function************************************* */
//1
function chai(){
    username ="akshay";
    //console.log(this)//undefined this only access valu in object

    console.log(this)
}
//chai()

///2.
const chaii = () => { 
   let  username ="akshay";
    console.log(this.username)
}
chaii()

//3. bsic arrow function syntax
const addtwo = (num1,num2) => {
    return num1+num2;
}
console.log(addtwo(2,5))

//5 implicit return used in react
const addTwo = (num1,num2) => num1+num2;
console.log(addTwo(2,5))


//difference between function arrow function 
//1.we can not call arrow function before declaaration 
//2.no argument object
//3.no prototype object for the arrow function 
//4.can not invoked with a new keyword // can not have constructer
//5.it can not be used as generic function 
//6.duplicate named parameter can not be used 

