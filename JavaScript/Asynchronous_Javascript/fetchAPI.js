fetch("https://fakestoreapi.com/users/abcgj")
.then((response)=> 
    {
        if(!response.ok)       
         throw new Error("Data not found")        
    else        
         return response.json()
     
    })
.then((data)=>console.log(data))
.catch((error)=>console.log(error.message))

//async await
async function fetchData(){
let newresponse=await fetch("https://fakestoreapi.com/users")
if(!newresponse.ok)
    throw new Error("Data not found")
else
{
    let data= await newresponse.json()
    console.log(data);    
}
}
fetchData()