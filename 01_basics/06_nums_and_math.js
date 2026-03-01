const score=400  //Numbers
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2)) //100.00

const othernuber = 123.8986443
console.log(othernuber.toPrecision(4))//123.9

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

//*******************************Maths************************************ */

// Math is a library in the JS   //by using this Math library  we can use the sin,tan,squareroot etc. 
console.log(Math); //console this in the browser and will know the all properties
console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.floor(4.9)) //4
console.log(Math.ceil(4.2)) //5
console.log(Math.min(4,1,6,8,9)) //1
console.log(Math.max(9,6,4,2,1)) //9

console.log(Math.random())  //random will generate a value between 0 and 1
console.log((Math.random()*10 )+ 1);// +1 is because Value can be 0.0323434 so to avoid this.
console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max= 20;

console.log(Math.floor(Math.random(max-min)*10 +1) + min);