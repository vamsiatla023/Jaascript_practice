const myObject = {
    'js':'javascript',
    'cpp':'cplusplus',
    'r':'ruby'
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const progrm = ['js','cpp','r','python']
for(const key in progrm){
    // console.log(key); 0,1,2,3 because array have index as 0,1,2,3.....
    console.log(progrm[key])
}

// for map

const map = new Map()
map.set('In',"India" )
map.set('USA',"United states of america" )
map.set('Fr',"France");
map.set('In',"India" ) //dulicates are not allowed only unique values will be printer or allowed

for(const key in map){
    // console.log(key)won't get any output because map is not iteratable 
}