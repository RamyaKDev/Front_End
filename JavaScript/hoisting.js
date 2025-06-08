
//var a
//let b;
//const c;
//let and const are in temporal dead zone so cant use before initaialization.
//  console.log(a);
// var a=10;

//  console.log(b);
//  let b=15;

//ReferenceError: Cannot access 'b' before initialization

// console.log(c);
// const c=15;

//ReferenceError: Cannot access 'c' before initialization

//Function hoisting
//goes top declaration hoisting{}
// hoisting();
// function hoisting(){
//     console.log("fun");
    
// }

// //function hoisting will not work for 
// //anonymous function and arrow function
// //let fun1; instead of function variable is hoisted
// fun1();
// var fun1=function (){
//     console.log("funh1");
    
// }
// //ReferenceError: Cannot access 'fun1' before initialization

var a=10;
// let a=10;
// SyntaxError: Identifier 'a' has already been declared