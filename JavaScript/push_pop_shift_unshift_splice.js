
let arr=[10,20,30,40];
//push()- add one or more elements at the end
let pushedval=arr.push(50,60,70);
console.log(pushedval);
console.log(arr);

//pop()- removes element from the end
let popedval=arr.pop();
console.log(popedval);
console.log(arr);

//shift()
arr.shift();
console.log(arr);

//unshift()
arr.unshift(1,2);
console.log(arr);

//splice(start-index,count(no of elements to delete),adds element)
//arr.splice(2);
//if we give only start index removes all elements from the index.
//arr.splice(2,2);
//it removes element from 2nd index to 2 elements
//arr.splice(2,2,"hi","hello","welcome")
arr.splice(-1,0,6)
console.log(arr);