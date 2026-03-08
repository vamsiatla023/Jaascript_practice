
const user= {
    username:"vamsi",
    password:"vamsi123",
  welcomemessage/*method*/:function(){
  console.log(`this is the ${this.username},welcome to the website`)
  console.log(this);
}
}

// user.welcomemessage()
// user.username = "atla"
// user.welcomemessage()

// console.log(this) //{} empty obj but it aries inthe browser because of the browser oni is window but here node(standalone) so it is showing empty obj



/*************Arrow functio**************************************** */

// const addtwonum = (num1,num2) =>{
//   return num1+num2    //explicity return
// }

// const addtwonum = (num1,num2) => num1+num2 //implicity return

// const addtwonum = (num1,num2) => (num1+num2)

const addtwonum = (num1,num2) => ({username:"vamsi"}) //to return the obj it isthe syntax

console.log(addtwonum(7,1))

// const myArray = [1,3,2,5,8,0]
// myArray.forEach()