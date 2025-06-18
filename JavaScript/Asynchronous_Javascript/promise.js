let newPromise=new Promise((resolve,reject)=>
    {
        let number=4;
        if(number%2===0)
            console.log("Even number");
        else
        console.log("Odd number");
    });
    newPromise
    .then((message)=>message)
    .catch((error)=>error)
    .finally(() => console.log("Cleanup completed"));