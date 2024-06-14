//*****************Functions******************************** */
function addTwoNumbers(num1,num2){
    console.log(res=num1+num2);
}
addTwoNumbers()//NaN
addTwoNumbers(12,41)//53
addTwoNumbers(12,"41")//1241
addTwoNumbers(12,null)//12
//addTwoNumbers(12,a)//error


//return value
function addTwoNumbers(num1,num2){
    let res=num1+num2;
    //return res;
    return num1+num2;
}
 const result = addTwoNumbers(1,2)
console.log(result)

/////

function loginUserMessage(username){
    if(!username){
        console.log("please enter username")
    }else{
        return `${username} just logged in`
    }
}
console.log(loginUserMessage("Puja"))//Puja just logged in
console.log(loginUserMessage())//please enter username


//spread or rest operator 

function calculateCardPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCardPrice(200,300,400,5000))//[400,5000]

//handling object with function
const user ={
    username:"puja",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username:"puja",
    price:199
})

//handling array with function
const nweArray=[200,400,100,300];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(nweArray)) 