// for each loop
const program =['cpp','js','cpp','python']

 program.forEach(function(item){
//     console.log(item);
 })

program.forEach( (val)=>{
    // console.log(val)
})

function printe(item){
    // console.log(item);
}
program.forEach(printe)

program.forEach( (item, index, arr)=>{
//  console.log(item, index, arr)
})

//[{},{},{}]objects inside the objects

const myProgram=[
    {
        language : "jaascript",
        languageFilename:"js"
    },
     {
        language : "java",
        languageFilename:"jv"
    },
     {
        language : "python",
        languageFilename:"py"
    }
]

myProgram.forEach((item)=>{
    console.log(item.languageFilename)
})