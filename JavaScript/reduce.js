//reduce - accumulates all array elements into a single value based on the call back fn.
let a=[2,4,1,3,5]
//iterate through for loop and storing into a single value
let sum=0;
for(let i=0;i<a.length;i++){
    sum=sum+a[i];
}
console.log(sum);

// using reduce method
let res=a.reduce((acc,num)=>acc+num,0)
console.log(res);
//
let employeelist=[
    {empName:"AAA",empSalary:10000},
    {empName:"BBB",empSalary:20000},
    {empName:"CCC",empSalary:30000}
]
let totalsalary=employeelist.reduce((acc,val)=>acc+val.empSalary,0)
console.log(totalsalary);
