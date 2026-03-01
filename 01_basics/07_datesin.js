let mydate = new Date();
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate) //object

let anotherdate = new Date(2026,0,1)  // 0 ==> january
console.log(anotherdate.toDateString())

let anotherdateone = new Date(2026,2,1,11,44)
console.log(anotherdateone.toLocaleString())

let otherdate = new Date("2026-01-22") //01==>january
console.log(otherdate.toLocaleString())

let Timestamp = Date.now()
console.log(Timestamp)
console.log(otherdate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{   //to customize the Localestring it is used 
    weekday: "long"
})