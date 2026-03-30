for(let i=0; i< 10; i++){
    const element=i;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for(let i=0; i<=10;i++){
    // console.log(`outer loop ${i}`);
    for(let j=0; j<=10; j++){
        // console.log(`inner loop ${j}`);
        // console.log( i+'*'+j+'='+i*j)
    }
    }
const myarray=['flash','batan','superman']
// console.log(myarray.length)
    for(let i=0; i < myarray.length; i++){
        const element = myarray[i]
        // console.log(element);
    }



// Break and Continue

    for(let i=1; i<20; i++){
        if(i==5){
            // console.log( `deteceted 5`);
            break
        }
        // console.log(`value of i is ${i}`);  
    }


    for(let i=1; i<20; i++){
        if(i==5){
            console.log( `deteceted 5`);
            continue //skip that particular instance or iteration 
        }
        console.log(`value of i is ${i}`);
        
    }