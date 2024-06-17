//var c=300;
let a=300
if(true){
    let a=1;
    const b=20;
console.log("Inner:" ,a)     
}

console.log(a)
//console.log(b)
//console.log(c)


//*******************nested scope********************* */
function one(){
    const username ="puja"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one() 

//***************intersting concept********************* */
function addone(num){
    return num+1;
}
console.log(addone(5))


//addtwo(5) cannot access before initialition
const addtwo = function(num){
    return num+2;

}
console.log(addtwo(5)) 



