//**************Strings Methode*******************/

const stringName = new String('puja-bhujbal')
console.log(stringName)

//anchor() deprecated due to imcopatibiliti with browser
console.log(stringName.anchor())//<a name="undefined">puja-bhujbal</a>

//at() it takes index and return value of index position
let index = 2;
console.log(`An index of ${index} returns ${stringName.at(index)}`);
//An index of 2 returns j

//big() Deprecated: This feature is no longer recommended
console.log(stringName.big())//<big>puja-bhujbal</big>

//blink() Deprecated: This feature is no longer recommended
console.log(stringName.blink())//<blink>puja-bhujbal</blink>

//bold() Deprecated: This feature is no longer recommended
console.log(stringName.bold())//<b>puja-bhujbal</b>

//charAt()  return character at given index position
console.log(stringName.charAt(3))//a

//charCodeAt()  return character at given index position
console.log(stringName.charCodeAt(3))//a 







