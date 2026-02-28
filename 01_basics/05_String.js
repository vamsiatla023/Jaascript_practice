const name="Vamsi" 
const repCount = 40

console.log(name + repCount + "Value")  //outdated

console.log(`This is my name ${name} and my repocount is ${repCount}`) //backticks,this method of using the string is string interpolation

const Anothermethod = new String('vamsiatla')//another methd to declare the string in js.

console.log(Anothermethod[0]);
console.log(Anothermethod.__Proto__);

console.log(Anothermethod.length)

console.log(Anothermethod.toUpperCase());
console.log(Anothermethod.charAt(2));
console.log(Anothermethod.indexOf('t'))

const newString = Anothermethod.substring(0,4)//-ve values are not allowed
console.log(newString)

const anotherstring = Anothermethod.slice(-8,4) //we can use the -ve values in this slice method
console.log(anotherstring)

const newStringOne = "  vamsiatla  "
console.log(newStringOne)
console.log(newStringOne.trim()) //trim will remove the extra space(as mentioned as *) in the string "**vamsi**"

const url = "https://vamsi.com/vamsi%20atla"

console.log(url.replace('%20', "-"))
console.log(url.includes('atla')) //checks the atla is in the url or not  return true or false

const newStringTwo = "vamsi-atla-goud"
console.log(newStringTwo.split('-'));