
//****************Number************************************************** 

const score = 400
console.log(score)//400

const balance = new Number(1000);
console.log(balance)//[Number: 1000]

//toString
console.log(balance.toString().length);//4
//toFixed
console.log(balance.toFixed(2));//1000.00

const otherNum = 23.0251
console.log(otherNum.toPrecision(4));//23.03

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//*************************MATH********************************************
//by default libarary attached to javascript

console.log(Math);
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.8));//4
console.log(Math.min(4,8,6,4.5,6));//4
console.log(Math.max(4,5,7,1,2,3));//7

console.log(Math.random());//range between 0 to 1
console.log((Math.random()*10)+1);//range greater than 1

const min = 10
const max = 20 
console.log(Math.floor(Math.random()*(max-min+1))+min)



