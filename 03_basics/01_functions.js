function saymyname(){
    console.log("va"),
    console.log("ms"),
    console.log("i")
}
//saymyname ->reference
// saymyname() //->excution

// function addtwonumbers(n1,n2){
//   console.log(n1+n2);
// }
// addtwonumbers(3,"4")//34
// addtwonumbers(3,"a")//3a
// addtwonumbers(3,null)//3

// const result = addtwonumbers(3,5)
//console.log("result:",result);//undefined

function addtwonumbers(n1,n2){
 let result = n1+n2 //thisresult is different from the below result 
 return result
 console.log(result)//it won't get excuted because ,after returnstatement nothing will excute.
}
const result = addtwonumbers(3,5)//this is result is different from the above result.becsuse of the scope of function.
// console.log("result:",result)

function loginuser(user){
    return `${user} has logged inthe website`
}

loginuser("vamsiatla")//nothing will print itwilljust get excuted
// console.log(loginuser("vamsiatla"))
 //console.log(loginuser())//unidentified user is loggedin

 function loginuser(user){
    if(!user){  //professional coder      //if(user===undefined){ notprofessional
        console.log("please enter username")
        return
    }
    return `${user} has logged inthe website`
}
//console.log(loginuser());

 function loginuser(user="vamsi"){
    if(!user){  //professional coder      //if(user===undefined){ notprofessional
        console.log("please enter username")
        return
    }
    return `${user} has logged inthe website`
}
console.log(loginuser("namo_Venkatesaya"));//it will override the above value