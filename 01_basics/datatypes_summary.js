//Primitive

// 7types:String, Number,Boolean,null, undefined, Symbol, BigInt.

const score=100
const scoreValue=100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false because Symbol will give the diiiferent values

//Reference (non-primitive)
//Array , Objects , Functions.(allocates the  reference directly in the memory  )

const heros =["thar","spideran","superman"];//array

let myObj={
    name:"vamsi",
    age:24,
}

const myFunction = function(){
    console.log("hello this is vamsi")
}

console.log(typeof myFunction);//return objFunction
console.log(typeof heros);//return object


/************************************************************************************* */
    // MEMORY MANAGEMENT
  //stack (primitive) ,Heap(Non-Primitive)

  //stack(will have the original value copy)
  let myYoutubeName = "hiteshchoudharydotcom"

  let anothername = myYoutubeName

  anothername = "chaiaurcode"

  console.log(myYoutubeName)
  console.log(anothername)


  //Heap(it will have the original value reference)
    //aboe explination is in the notes

