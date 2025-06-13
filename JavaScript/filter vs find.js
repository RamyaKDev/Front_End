let a=[2,4,1,3,5]
//filter
let even=a.filter(num=>num%2==0).fill(8)
console.log("even "+even);

//find()
let firstodd=a.find(n=>n%2!=0).fill(0);
console.log(firstodd);
