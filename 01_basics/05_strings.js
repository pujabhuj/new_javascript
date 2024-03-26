//**************Strings Methode*******************/

const stringName = new String('puja-bhujbal')
console.log(stringName)

// 1. anchor() deprecated due to imcopatibiliti with browser
console.log(stringName.anchor())//<a name="undefined">puja-bhujbal</a>

// 2. at() it takes index and return value of index position
let index = 2;
console.log(`An index of ${index} returns ${stringName.at(index)}`);
//An index of 2 returns j

// 3. big() Deprecated: This feature is no longer recommended
console.log(stringName.big())//<big>puja-bhujbal</big>

// 4. blink() Deprecated: This feature is no longer recommended
console.log(stringName.blink())//<blink>puja-bhujbal</blink>

// 5. bold() Deprecated: This feature is no longer recommended
console.log(stringName.bold())//<b>puja-bhujbal</b>

// 6. charAt()  return character at given index position
console.log(stringName.charAt(3))//a

// 7. charCodeAt()  return character at given index position
console.log(stringName.charCodeAt(3))//a 

// 8. codePointAt() A non-negative integer representing the code point value of the character at the given index.

//If index is out of the range of 0 – str.length - 1, codePointAt() returns undefined.
//If the element at index is a UTF-16 leading surrogate, returns the code point of the surrogate pair.
//If the element at index is a UTF-16 trailing surrogate, returns only the trailing surrogate code unit.

console.log("ABC".codePointAt(0))// 65
console.log("😍".codePointAt(0)) // 128525

// 9. concat()  return a new string containing the combined text of the strings provided.
const str1 = "Hello, ";
console.log(str1.concat("Kevin", ". Have a nice day."));// Hello, Kevin. Have a nice day.

// 10. constructure()
class Polygon {
    constructor() {
      this.name = 'Polygon';
    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  // Expected output: "Polygon"
  

// 11. endsWith() true if the given characters are found at the end of the string, including when searchString is an empty string; otherwise, false.
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

// 12. fixed() Deprecated: This feature is no longer recommended. 
//A string beginning with a <tt> start tag, then the text str, and then a </tt> end tag , which causes this string to be displayed in a fixed-width font.
const str2 = "hello"
console.log(str2.fixed()); // <tt>hello</tt>


// 13. fontcolor() //Deprecated:
// fontcolor() creates a string that embeds this string in a <font> element (<font color="...">str</font>), which causes this string to be displayed in the specified font color.
const contentString = "Hello, world";

console.log(contentString.fontcolor("red"))//<font color="red">Hello, world</font>

// 14. fontsize()  //Deprecated:
//The fontsize() method of String values creates a string that embeds this string in a <font> element (<font size="...">str</font>), which causes this string to be displayed in the specified font size.

const contentString1 = "Hello, world";

console.log(contentString1.fontsize(7))//<font size="7">Hello, world</font>



// 15. includes() //return true if the case-sensitive search string is found anywhere within the given string, including when searchString is an empty string; otherwise, false.

console.log("Blue Whale".includes("blue"))//false

// 16. indexOf() //The index of the first occurrence of searchString found, or -1 if not found.(case sensitive)
console.log("Blue Whale".indexOf("Blue")) // returns  0
console.log("Blue Whale".indexOf("Blute")) // returns -1
console.log("Blue Whale".indexOf("Whale", 0)) // returns  5

// 17. isWellFormed() //Returns true if this string does not contain any lone surrogates, false otherwise.

// 18. italics() //Deprecated: 
//The italics() method of String values creates a string that embeds this string in an <i> element (<i>str</i>), which causes this string to be displayed as italic.
const contentString2 = "Hello, world";
console.log(contentString2.italics())//<i>Hello, world</i>


// 19. lastIndexOf() //The index of the last occurrence of searchString found, or -1 if not found.(case sensitive)
  
console.log("canal".lastIndexOf("a"))// returns 3
console.log("canal".lastIndexOf("a", 2)) // returns 1
console.log("canal".lastIndexOf("a", 0)) // returns -1
console.log("canal".lastIndexOf("x")) // returns -1

// 20. link() //Deprecated: 
//he link() method of String values creates a string that embeds this string in an <a> element (<a href="...">str</a>), to be used as a hypertext link to another URL.

const contentString3 = "MDN Web Docs";

console.log(contentString3.link("https://developer.mozilla.org/"))
//<a href="https://developer.mozilla.org/">MDN Web Docs</a>

// 21. localeCompare() 
//A negative number if referenceStr occurs before compareString; positive if the referenceStr occurs after compareString; 0 if they are equivalent.
//In implementations with Intl.Collator, this is equivalent to new Intl.Collator(locales, options).compare(referenceStr, compareString).

// The letter "a" is before "c" yielding a negative value
console.log("a".localeCompare("c")) // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
console.log("check".localeCompare("against")) // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
console.log("a".localeCompare("a")) // 0






     



