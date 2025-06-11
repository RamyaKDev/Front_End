let arr=[10,20,30,40];
let arr1=[100,200,300,400];

//concat()
//let newarr=arr.concat(arr1);
//let newarr=arr.concat(50,60);
let newarr=[].concat(arr1,500,600);
console.log(newarr);

//slice()
//used to extract set of values and create new array. it makes subarray
//slice method also works as concat method. when it has empty parameters slice()
// slice(statindex,lastindex) - last index exclusive
//let newarr2=arr.slice();
let subarray=newarr.slice(1,4);
//console.log(newarr2);
console.log(subarray);

//flat
let b=[1,2,3,[4,5,[6,7,8]]]
let flatarr=b.flat(Infinity);
console.log(flatarr);

//fil
let c=[1,2,3,4]
//c.fill(5)
c.fill(6,2,4)
console.log(c);