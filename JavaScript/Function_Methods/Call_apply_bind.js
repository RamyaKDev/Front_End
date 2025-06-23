//anonymous function->current object
// let employee={
//     ename:"AAA",
//     eage:30,
//     walk:function(){
//         console.log(this.ename+" Go for walk");    

//     }
// }
// console.log(employee.ename);
// employee.walk();

// //arrow function->global object
// ename="cccc";
// var eage="40";
// let employee1={
//     ename:"BBB",
//     eage:35,
//    eat:()=>{
//         console.log(this.ename+" eating "+this.eage);  
//     //here this.ename - undefined because refers global object
//     }
// }
// console.log(employee1.ename);
// employee1.eat();

//call()
let person = {
  fullName: function(city, country) {
console.log( this.firstName + " " + this.lastName + ", " + city + ", " + country);
  }
}
let person1 = {
  firstName: "John",
  lastName: "Doe"
}
let person2 = {
  firstName: "Jane",
  lastName: "Smith"
}
// Using call() to invoke the fullName method with different this values and arguments
person.fullName.call(person1, "New York", "USA"); // Output: John Doe, New York, USA
person.fullName.call(person2, "London", "UK"); // Output: Jane Smith, London, UK

//apply()
person.fullName.apply(person2, ["London", "UK"]);
let bindfun=person.fullName.bind(person2, "London", "UK"); 
console.log(bindfun)
bindfun()