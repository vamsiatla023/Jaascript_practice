//Higher order arrays

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

const greetings ="Hello vamsiatla"

for(const greet of greetings){
    // console.log(greet);
}


//Map
const map = new Map()
map.set('In',"India" )
map.set('USA',"United states of america" )
map.set('Fr',"France");
map.set('In',"India" ) //dulicates are not allowed only unique values will be printer or allowed

console.log(map)

for(const [key,value] of map){
    // console.log(key, ':-', value)
}

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman',

}

for(const [key,value]of myObject){
    // console.log(key,':-',value);  objects are not iterable by this method ,there is another method to iterate the oobjects in four.js
} 