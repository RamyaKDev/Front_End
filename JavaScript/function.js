//Named function
function power(a){
    console.log(a**3);
}
power(3);

//Anonymounus function- does not have function name
let sum=function (a,b){
    console.log(a+b);
}
sum(5,2);

//Arrow function- doesnot have function keyword, function name
 let display=()=>console.log("I am Arrow function");
 display();

//does not have return st
 let subtraction=(a,b)=>a-b;
//  {
//     return a-b
//  }
console.log(subtraction(5,3));

//for single parameter dont need paranthesis too

let name1=name=>name;
let final=name1("abc");
console.log(final);

// Higher order,call back function

function add(sub,a,b)
{
    console.log(a+b);  
    sub(5,2) ;       
}
function sub(p,q){
    console.log(p-q);
}
add(sub,10,20);