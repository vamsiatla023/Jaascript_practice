 //Array
 const myarray = [0,11,2,3,4,5]

 const myheros=["thar","superman","spiderman"]

//  const myarray2= new Array(1,2,3,4,5)

//  console.log(myarray[1])

 //Array Methods

 myarray.push(6)
myarray.push(7)
// console.log(myarray)

// console.log(myarray.pop())
// console.log(myarray)

// myarray.unshift(9) // it is used to add a digit at thestart of the array but it is not optimized

// myarray.shift() // it is used to remove the starting digit of the array 

const newarray = myarray.join() // will gie the array normally like 1,2,3,4,5 instead of [1,2,3,4,5]

// console.log(myarray)
  console.log(newarray)


 // slice //splice

 console.log("A", myarray)

 const myn1 = myarray.slice(1,3)
 console.log(myn1)

 console.log("B",myarray)

 const myn2 = myarray.splice(1,3)
 console.log("C",myarray)
 console.log(myn2)

 // DIfference between the slice and the splice is  ,In splice original array will get manipulated 
//  whereas in slice original array won't get manipulated //run it to  know. 