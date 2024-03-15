// primitive

    // 7 tyapes of peimitive datatype
    // String,Number,Null,Undefined,Boolean,bigInt,Symbol

    const score = 100//number
    const scoreval = 100.00//number

    const isLogged = false//boolean

    const outsidetemp = null

    let useremail = undefined ;let usersemail ;

    const id = symbol("123")// uniq value

    const anotherid = symbol("123")// uniq value

    console.log(id ===anotherid)//false

    const bigNumber = 265254445555n




//Non - Primitive or Reference type

    //Array, Objects, Function 

    const heros =["a","b","d"];//array
   let obj = {
        scire:2,
        name:"puja",
        age:3
    }//object


    const myfunction = function (){
        console.log("hello world")
    }

    console.log(typeof(bignumber))//knoe the datatype of value

    typeof(null)//object
    typeof(undefined)//undefined
    typeof(Number)//Number
    typeof(String)//String
    typeof(Boolean)//Boolean 
    typeof(Symbol)//Symbol
    typeof(Object)//object if native does not implement call
    typeof(Object)//function if native or host does  implement call
    //typeof(function())//function
 

  

//***javasript is dynamically typed language
