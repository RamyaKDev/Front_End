// let handler=document.getElementById("button1");
// handler.onclick=function(){
//     console.log("first  handler");    
// }
// handler.onclick=function(){
//     console.log("second  handler");    
// }
// let listener=document.getElementById("button2");
// listener.addEventListener("click",function(){
//     console.log("First listener");
    
// })
// listener.addEventListener("click",function(){
//     console.log("Second listener");
    
// })
// listener.addEventListener("click",function(){
//     console.log("Third listener");
    
// })
let image=document.querySelector("img");
let para=document.querySelector("p");
image.addEventListener("mouseover",function(){
    image.src="./Tiger.jpg"
    para.innerText="I am a Tiger"
})
image.addEventListener("mouseout",function(){
    image.src="./Strawberry.jpg"
    para.innerText="I am Strawberry "
})