let person={
    pname:"Johny",
    page:30
}
console.log(person);
//Object.create()
let newObj=Object.create(person);//new object is created with the person object prototype
//newObj.location="Tamilnadu"
console.log(newObj);
//output
// { pname: 'Johny', page: 30 }
// {}

//new object output we cant see it just display empty braces. To see output use __proto__
console.log(newObj.__proto__);
//we can access separate property also
console.log(newObj.page);
//we can create separate propert also for new Object

console.log(newObj);
//we can see object prototype by using getPrototypeOf()
console.log(Object.getPrototypeOf(newObj));

//Object.assign()
let person1={
    pname:"Johny",
    page:30
}
Object.assign(person1,{role:"front developer", salary:10000})
console.log(person1);
//output:{ pname: 'Johny', page: 30, role: 'front developer', salary: 10000 }

//Object.entries()
let employee={
    ename:"AAA",
    eage:"25"
}
let empmultiarray=Object.entries(employee)
//here it is converted as array and we can use array method here 
empmultiarray.push(["Name"])
//push primitive string value as array
console.log(empmultiarray)
//output:[ [ 'ename', 'AAA' ], [ 'eage', '25' ] ]
//output:[ [ 'ename', 'AAA' ], [ 'eage', '25' ], '[Name]' ]

//Object.fromEntries()
//converts array literal to object literal
let OriginalObj=Object.fromEntries(empmultiarray)
console.log(OriginalObj)
//Name does not have any value so compiler assigned undefined default value

//Object.keys()
let keysonly=Object.keys(OriginalObj);
console.log(keysonly);

//Object.values()
let valuesonly=Object.values(OriginalObj);
console.log(valuesonly);

//object.freeze()
let emp={id:1}
Object.freeze(emp);
emp.ename="BBB"
console.log(emp);
// output:
// { id: 1 }
// Here emp object is freezed so we cant modify

//object.isfrozen()
console.log(Object.isFrozen(emp));
