//array
//declaration of array
const myarray = [ 0,1,2,3,4,8,5];

const myheros =["puja","akshay","devashree"];

const myarray2 = new Array(1,2,3,4);

console.log(myarray[2]);//2

//**********ArrayMethod*************************************************//

//1. push() //The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array. 
myarray2.push(5);
console.log(myarray2)//[ 1, 2, 3, 4, 5 ]

//2.pop() // remove last value from array by changing length of an array
myarray2.pop();
console.log(myarray2)//[ 1, 2, 3, 4]

//3.unshift() //insert value at 0 index by shifting value 
myarray2.unshift(0);
console.log(myarray2)//[ 0, 1, 2, 3, 4 ]

//4.shift() //remove value at 0 index by shifting other element
myarray2.shift();
console.log(myarray2)//[ 0, 1, 2, 3, 4 ]

//5.includes() // check weather the given element present in array or not 
console.log(myarray2.includes(3))//true

//6.indexOf() //return index of the given value present in array
console.log(myarray2.indexOf(9))//-1
console.log(myarray2.indexOf(2))//1

//7.join() //bind array and convert new array into string seperated by comma
const newArray = myarray2.join()
console.log(myarray2)//[ 1, 2, 3, 4 ]
console.log(newArray)//1,2,3,4
console.log(typeof newArray)//string 

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

 

//8.slice() //The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


console.log("A",myarray2);//A [ 1, 2, 3, 4 ]
const mynewarray = myarray2.slice(1 , 3);
console.log(mynewarray);//[ 2, 3 ]
console.log("B",myarray2);//B [ 1, 2, 3, 4 ]

//9.splice() //The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const mynewarray2 = myarray2.splice(1 , 3);
console.log(mynewarray2);//[ 2, 3, 4 ]
console.log("C",myarray2);//C [ 1 ]

//10.concat()  //The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const myheros2 =["puja","akshay","devashree"];

const dcheros2 =["superman","batman","flash"];

//myheros2.push(dcheros2)
//console.log(myheros2)//[ 'puja', 'akshay', 'devashree', [ 'superman', 'batman', 'flash' ] ]
const newarray3 = myheros2.concat(dcheros2)
console.log(newarray3) //[ 'puja', 'akshay', 'devashree', 'superman', 'batman', 'flash' ]  

//11. spred() //same as concat
const all_new_he = [...myheros2 ,...dcheros2 ]
console.log(all_new_he)

//12. flat() //seperation of recursive array
const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(2)
    console.log(real_another_array)

//13.isArray() //check weather the containt is array or not return true or false value
console.log(Array.isArray(real_another_array))//true


// 14. Array.from() //convert the given value into array
console.log(Array.from("puja"))//[ 'p', 'u', 'j', 'a' ]
console.log(Array.from({name:"puja"}))//[]

let score1=100
let score2=200
let score3=300

// 15.Array.of() //
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]

 // 16. at()  //The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array. 
// Our array with items
const cart = ["apple", "banana", "pear"];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Add an item to our 'cart' array
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'


// 17.copyWithin() /// The copyWithin() method of Array instances allow copies part of this array to another location in the same array and returns this array without modifying its length.

console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]


// 17.entries() // The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'

// 18. every()  //The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
  console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
  
// 19.fill() //The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// 20.filter() //The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//21. find() //The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }, 
];
const result = inventory.find(({ name }) => name === "cherries");
console.log(result); // { name: 'cherries', quantity: 5 }

// 22.findIndex()  //The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

//23. findLast()  // The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

const array12 = [5, 12, 50, 130, 44];

const found = array12.findLast((element) => element > 45);

console.log(found);
// Expected output: 130

// 24.findLastIndex() //The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array13 = [5, 12, 50, 130, 44];

const isLargeNumber1 = (element) => element > 45;

console.log(array13.findLastIndex(isLargeNumber1));
// Expected output: 3
// Index of element with value: 130

// 25.flat() //The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//The flat() method removes empty slots in arrays:
const arr14 = [0, 1, 2, [3, 4]];

console.log(arr14.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

//26.forEach()// The forEach() method of Array instances executes a provided function once for each array element.
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}
console.log(copyItems)

// after
items.forEach((item) => {
  copyItems.push(item);
});
console.log(copyItems)


//27.from()// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
Array.from("foo");
// [ "f", "o", "o" ]
//array from set
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

//28.Array.fromAsync() // The Array.fromAsync() static method creates a new, shallow-copied Array instance from an async iterable, iterable, or array-like object.


//29.keys() //The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
const array15 = ['a', 'b', 'c'];
const iterator = array15.keys();

for (const key of iterator) {
  console.log(key);//0 1 2
}

//30. lastIndexOf() // The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
const numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2)); // 3
console.log(numbers.lastIndexOf(7)); // -1
console.log(numbers.lastIndexOf(2, 3)); // 3
console.log(numbers.lastIndexOf(2, 2)); // 0
console.log(numbers.lastIndexOf(2, -2)); // 0
console.log(numbers.lastIndexOf(2, -1)); // 3
console.log([1, , 3].lastIndexOf(undefined)); // -1


//31.map() //The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers1 = [1, 4, 9];
const roots = numbers1.map((num) => Math.sqrt(num));
console.log(roots)
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

//32.Array.of() // The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(undefined)); // [undefined]


//33.reverse()//elements order in the array will be turned towards the direction opposite to that previously stated.
const items3 = [1, 2, 3];
console.log(items3); // [1, 2, 3]

items3.reverse();
console.log(items3); // [3, 2, 1]

//34.some() //The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log([2, 5, 8, 1, 4].some(isBiggerThan10)); // false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true

//35.sort()  //The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array16 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array16);
// Expected output: Array [1, 100000, 21, 30, 4]

// 36.toLocaleString  //The toLocaleString() method of Array instances returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").

const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"

// 37.toReversed()  //The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.
const items22 = [1, 2, 3];
console.log(items22); // [1, 2, 3]

//const reversedItems = items.toReversed();
//console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

//38.toSorted()  //The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.


//39. toSpliced()  //The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.

//40.toString() //The toString() method of Array instances returns a string representing the specified array and its elements.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9

//41.values() //The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.

const array123 = ['a', 'b', 'c'];
const iterator3 = array123.values();

for (const value of iterator3) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


//42.with() //The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]
  