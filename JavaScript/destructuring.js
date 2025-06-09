let arr=[1,2,3,4,5]
let a=arr[0];
let b=arr[1];
let c=arr[2];
console.log(a,b,c);

let [a1,a2,,,,]=arr
console.log(a1,a2);

let [b1,...b2]=arr
console.log(b1,b2);

//object destructuring
let person={pname:"AAA",page:30};
let {pname,page}=person;
console.log(pname,page);