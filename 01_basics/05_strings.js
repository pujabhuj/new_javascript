//**************Strings Methode*******************/
//reference  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr#try_it
 
 
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


// 22. match() //The match() method of String values retrieves the result of matching this string against a regular expression.
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// ["T", "I"]

// 23. matchAll() //The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

const regexp = /foo[a-z]*/g;
const str5 = "table football, foosball";
const matches = str5.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.

// matches iterator is exhausted after the for...of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]
 
     
//23. normalize() //The normalize() method of String values returns the Unicode Normalization Form of this string.

let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFD");
string2 = string2.normalize("NFD");

console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2

// 24. padEnd()  //The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

console.log("abc".padEnd(10)) // "abc       "
console.log("abc".padEnd(10, "foo"))// "abcfoofoof"
console.log("abc".padEnd(6, "123456")) // "abc123" 
console.log("abc".padEnd(1))// "abc"

// 25. padStart() //The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

console.log("abc".padStart(10)) // "       abc"
console.log("abc".padStart(10, "foo")) // "foofoofabc"
console.log("abc".padStart(6, "123465")) // "123abc"
console.log("abc".padStart(8, "0"))  // "00000abc"
console.log("abc".padStart(4)) // "abc"

// 26.  raw()//It's used to get the raw string form of template literals — that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.

// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

// 27. repeat()// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together

//console.log("abc".repeat(-1))// RangeError
console.log("abc".repeat(0))// ''
console.log("abc".repeat(1)) // 'abc'
console.log("abc".repeat(2)) // 'abcabc'
console.log("abc".repeat(3.5)) // 'abcabcabc' (count will be converted to integer)
//console.log("abc".repeat(1 / 0)) // RangeError


// 28. replace() //
//The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph2.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex2 = /Dog/i;
console.log(paragraph.replace(regex2, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

// 29. replaceAll() 
//Unlike replace(), this method would replace all occurrences of a string, not just the first one. This is especially useful if the string is not statically known, as calling the RegExp() constructor without escaping special characters may unintentionally change its semantics.

const paragraph3 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph3.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex3 = /Dog/gi;
console.log(paragraph.replaceAll(regex3, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

// 30. search() //The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

const str6 = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str6.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str6.search(reDot)); // returns -1 cannot find '.' dot punctuation


// 31. slice //The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

const str7 = "The morning is upon us."; // The length of str1 is 23.
const str8 = str7.slice(1, 8);
const str9 = str7.slice(4, -2);
const str10 = str7.slice(12);
const str11 = str7.slice(30);
console.log(str8); // he morn
console.log(str9); // morning is upon u
console.log(str10); // is upon us.
console.log(str11); // ""

// 32. small() //Deprecated: 
//The small() method of String values creates a string that embeds this string in a <small> element (<small>str</small>), which causes this string to be displayed in a small font.

const contentString4 = "Hello, world";
console.log( contentString4.small())//<small>Hello, world</small>


// 33. split //The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str13 = 'The quick brown fox jumps over the lazy dog.';

const words = str13.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str13.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str13.split();
console.log(strCopy); 
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


// 34.startsWith() // The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

const str14 = "To be, or not to be, that is the question.";

console.log(str14.startsWith("To be")); // true   
console.log(str14.startsWith("not to be")); // false
console.log(str14.startsWith("not to be", 10)); // true

// 35. strike() //Deprecated: 
//The strike() method of String values creates a string that embeds this string in a <strike> element (<strike>str</strike>), which causes this string to be displayed as struck-out text.

const contentString6 = "Hello, world";

console.log(contentString6.strike()) //<strike>Hello, world</strike>

// 36. sub //Deprecated: The sub() method of String values creates a string that embeds this string in a <sub> element (<sub>str</sub>), which causes this string to be displayed as subscript.

const contentString7 = "Hello, world";
console.log(contentString7.sub()) //<sub>Hello, world</sub>

// 37. substr() //Deprecated: 
//The substr() method of String values returns a portion of this string, starting at the specified index and extending for a given number of characters afterwards.

const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''


// 38.substring() // The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); // "M"
console.log(anyString.substring(1, 0)); // "M"

console.log(anyString.substring(0, 6)); // "Mozill"

console.log(anyString.substring(4)); // "lla"
console.log(anyString.substring(4, 7)); // "lla"
console.log(anyString.substring(7, 4)); // "lla"

console.log(anyString.substring(0, 7)); // "Mozilla"
console.log(anyString.substring(0, 10)); // "Mozilla"

/*  The difference between substring() and substr()
There are subtle differences between the substring() and substr() methods, so you should be careful not to get them confused.

The two parameters of substr() are start and length, while for substring(), they are start and end.
substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.
Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.*/

/*Differences between substring() and slice()
The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.*/


//39. sup //Deprecated:
//The sup() method of String values creates a string that embeds this string in a <sup> element (<sup>str</sup>), which causes this string to be displayed as superscript.
const contentString5 = "Hello, world";

console.log(contentString5.sup())//<sup>Hello, world</sup>


// 40.toLocaleLowerCase() // The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

console.log("ALPHABET".toLocaleLowerCase()) // 'alphabet'

console.log("\u0130".toLocaleLowerCase("tr") === "i")// true
console.log("\u0130".toLocaleLowerCase("en-US") === "i") // false
  
const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
console.log("\u0130".toLocaleLowerCase(locales) === "i")// true

// 41. toLocaleUpperCase()       //The toLocaleUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.


console.log("alphabet".toLocaleUpperCase()) // 'ALPHABET'

console.log("Gesäß".toLocaleUpperCase()) // 'GESÄSS'

console.log("i\u0307".toLocaleUpperCase("lt-LT")) // 'I'

const locales1 = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
console.log("i\u0307".toLocaleUpperCase(locales1)) // 'I'
  
//42 .toLowerCase() // The toLowerCase() method of String values returns this string converted to lower case.

console.log("ALPHABET".toLowerCase()); // 'alphabet'

//43 .toUpperCase()   //The toUpperCase() method of String values returns this string converted to uppercase.

console.log("alphabet".toUpperCase()); // 'ALPHABET'

// 44. toString()  //The toString() method of String values returns this string value

const x = new String("Hello world");

console.log(x.toString()); // "Hello world"


// 45 . toWellFormed()  //The toWellFormed() method of String values returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.

// 46 .trim() // The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const str15 = "   foo  ";
console.log(str15.trim()); // 'foo'

// 47 .trimEnd() // The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

let str16 = "   foo  ";

console.log(str16.length); // 8

str17 = str16.trimEnd();
console.log(str17.length); // 6
console.log(str17); // '   foo'


// 48.trimStart() // The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

let str18 = "   foo  ";

console.log(str18.length); // 8

str19 = str18.trimStart();
console.log(str19.length); // 5
console.log(str19); // 'foo  '

// 49.valueOf() // The valueOf() method of String values returns this string value
//This method is usually called internally by JavaScript and not explicitly in code.  

const x1 = new String("Hello world");
console.log(x1.valueOf()); // 'Hello world'
