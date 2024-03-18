console.log("puja")

const name ="puja"//declaratio of string
const repocnt = 50
//console.log(name+repocnt+"value")  not good for production line
//morden methode to write
console.log(`hello my name is ${name} and my repo count ${repocnt}`)

const gameName = new String("ludo-ll")//declaration of string as object
console.log(gameName)
console.log(gameName[0]) 
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('u'))
const newString = gameName.substring(0 ,3)
console.log(newString) 
const anotherString = gameName.slice(-6 ,1)
console.log(anotherString)

const str1 = "  puja -"
console.log(str1)
console.log(str1.trim())
const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('-'))
console.log(gameName.split('-'))




