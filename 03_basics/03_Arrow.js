
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

console.log(this) //{} empty obj but it aries inthe browser because of the browser oni is window but here node(standalone) so it is showing empty obj