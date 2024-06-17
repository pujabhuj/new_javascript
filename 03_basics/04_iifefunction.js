//******imidiately invoked function expression (iife)****************** */
//to avoid global scope pollution we used iife()
//()()

//named iife function 
(function chai(){
    console.log('DB connected')
})();

//unnamed iife function 
( (name) => {
    console.log(`DB ${name} connected`);
})('two')  