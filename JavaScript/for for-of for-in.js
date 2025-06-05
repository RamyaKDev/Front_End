//for loop
let a=[10,100,1000];
for(let i=0;i<a.length;i++){
    console.log(a[i]);       
}

let str="Javascript";
for(let i=0;i<str.length;i++){
    console.log(str[i]);       
}

//for-of loop
let b=[101,1001,10001];
for(let val of b){
    console.log(val);
}
function* newgen(){
    yield "one";
    yield "two";
    yield "three";
}
let val=newgen();
for(let gen of val){
    console.log(gen);
    
}
//for-in
// to iterate objects using for-in
let person={
    pname:"AAA",
    age:11,
    sibling:["BB","CC"],
    hobby(){
        console.log("Watching movie");        
    },
    pcolor:{
        hair:"black",
        eye:"blue"
    }
}
for(let key in person ){
    console.log(person[key]);
    
}
// to iterate array using for-in
let arr=["a",'b',"c"];
for(let key in arr){
 console.log(arr[key]);
}
// to iterate string using for-in
let st="Hello";
for(let key in st){
 console.log(st[key]);
}