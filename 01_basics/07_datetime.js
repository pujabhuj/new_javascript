//****************************Dates & Time ***************************/
let myDate = new Date()
console.log(myDate.toString());//Fri Mar 29 2024 07:18:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Fri Mar 29 2024
console.log(myDate.toISOString());//2024-03-29T07:20:12.117Z
console.log(myDate.toLocaleDateString());//3/29/2024
console.log(myDate.toJSON());//2024-03-29T07:22:49.956Z
console.log(myDate.toLocaleString());//3/29/2024, 7:23:41 AM
console.log(myDate.toTimeString());//07:24:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());//Fri, 29 Mar 2024 07:25:20 GMT
console.log(myDate.getTimezoneOffset(4));//0
console.log(typeof(myDate));//object
  
let mycreatedDate = new Date(2023 ,0, 23,5,2)
console.log(mycreatedDate.toDateString())//Mon Jan 23 2023


let mytimeStamp = Date.now();
console.log(mytimeStamp);//1711698013897
console.log(mycreatedDate.getTime()) //1674450120000

console.log(Math.floor(Date.now()/1000)); //1711698013

let newDate = new Date();
console.log(newDate)//2024-03-29T07:41:36.120Z
console.log(newDate.getMonth()+1)//4
console.log(newDate.getFullYear())//2024
console.log(newDate.getDay())//5


console.log(newDate.toLocaleString('default',{
    weekday:"long",

}))//Friday