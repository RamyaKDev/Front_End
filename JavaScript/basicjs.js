let a=10;
console.log(a);
function display(){
    console.log("hi");
}
display();
let result=sum(10,20);
console.log(`Count of two numbers = ${result}`);

function sum(a,b){
let c=a+b;
return c;
}
 let employeeId;
 let newEmp=employeeId || "PQR56678";
 console.log(newEmp);

 //block scope
 function block(){
    if(true){
        var c="i am var";
        let a="i am let";
        const b="i am const";
        console.log(a,b);
        
    }
    console.log(c);
 }
 
 block();
    var c1="i am var1";
    let a1="i am let1";
    const b1="i am const1";
console.log(window.c1);
console.log(window.a1);
console.log(window.b1);
