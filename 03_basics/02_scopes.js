if(true){
    const a=100;
    let b=200;
    var c=300;
}
// console.log(a);
// console.log(b);
// console.log(c); //const,let values not able to print here.because a and b are inside theloop or scope 
                 //so not able to use outside the loop or scope but var can be usable so this is why var is not used.

let a=40;
 if(true){
    const a=100;
    let b=200;
    var c=300;
    // console.log("Inner:", a)
}
// console.log(a);  //as you can see in the above loop these are block scope and global scope (example a alue in the loop and outside the loop)

//even in the thefor loop i isblock scope.


// video-21
function One(){
    let nameis = "vamsi"
    function Two(){
        let surname = 'atla'
        // console.log(nameis) //nameis is accessable because of the it is in the parent scope
    }
    // console.log(surname); surname is not accessable because it is inside the Two function scope.
     Two();
}
//conclusion is parent variables are accessable by the child but child variable are not accessable by the parent as inthe above function
One()

///////this is new
if(true){
    let username = "sureshy"
    if(username="sureshy"){
        let website="amazonprime"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username);

//*****************************Interesting/*****************************//////////////

console.log(addOne(5))
function addOne(num1){
    return num1+1
}

// addTwo(5)  //it isnot allowed to call here becsuse inthe second function declaration is holding in a variable in the below so we can't call it before the definition
const addTwo = function(num1){ //so after function definition we can call as in the below
    return num1+2
}
console.log(addTwo(5))