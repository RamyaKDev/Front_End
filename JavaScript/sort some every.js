let a=[2,4,1,-3,5]
//ascending order
//a-b = positive = swapping
//a-b = negative = no swapping
let ares=a.sort((a,b)=>{
    return a-b});
    console.log(ares);
    
//Descending order
//b-a = positive = swapping
//b-a = negative = no swapping
    let dres=a.sort((a,b)=>{
    return b-a});
    console.log(dres);

    //some
    let neg=a.some(num=>num<0);
    console.log(neg);
    
    //every
     let pos=a.every(num=>num>0);
    console.log(pos);

    