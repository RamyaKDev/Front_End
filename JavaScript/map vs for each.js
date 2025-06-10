let a=[15,10,2,25,5]
//foreach()-It does not return any value so used log st in callback fn itself.

//let val=a.forEach(num=>num*num);
//console.log(val);//output:undefined

a.forEach(num=>console.log(num*num));
// output:225
// 100
// 4
// 625
// 25

//chaining method not possible
//a.forEach(num=>console.log(num*num)).sort();
//get type error bcoz it returns undefined which is one of the primitive data type
//tries to sort so got typeerror

//map()
//Transforms an array by appliying call back fn for each element.returns new array 
//chaning method is possible
let res=a.map(num=>num*num).sort();
console.log(res);
//output:[ 100, 225, 25, 4, 625 ] sorts based on ASCII value