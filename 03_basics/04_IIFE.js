//Immediately invoked function expressions
(function chai(){     //named IIFE 
    console.log(`DB IS CONNECTED`)
})(); //this semicolon is mandatory 

(() => { //arrow function IIfe  or Unnamed IIFE
    console.log(`DB conneted two`)
})();

((name) => { //arrow function IIfe or Unnamed IIFE
    console.log(`DB conneted two ${name}`);
})("vamsi");