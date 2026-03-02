const marvel_heros = ["thor","superman","spiderman"]

const dc_heros=["superman","flash","batman"]

//Push Method
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//Concat method
//  const all_heros = marvel_heros.concat(dc_heros);  //for concat 2arrays should be stroed inthe 3rd array
//  console.log(all_heros)


//spread operator
const all_newheros =[...marvel_heros,...dc_heros] // concat and spread alost same but preferes spread because
                                                    // [here we can use many by using ,] but in concat [only one]
// console.log(all_newheros); 


//flat method
const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherarray.flat(Infinity)
// console.log(real_another_array)

//from method
console.log(Array.isArray("amsiatla"))
console.log(Array.from("vamsiatla"))
console.log(Array.from({name:"vamsiatla"}))  // intersting for interviews


//OF method
const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3))

