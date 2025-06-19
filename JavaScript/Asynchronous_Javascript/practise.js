




let newProm=new Promise((resolve,reject)=>{
    let dataRecieved=true;
    if(dataRecieved)
        resolve("Success")
    else
        reject("Failure")
})

// try{
// let message=await newProm
// console.log(message)
// }
// catch(error){
// console.log(error.message)
// }
async function fun1(){
try{
let message=await newProm
console.log(message)
}
catch(error){
console.log(error.message)
}
} 
fun1()