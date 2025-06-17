// //Shallow copy
// let employee={
//     ename:"AAA",
//     eRole:"Developer",
//     courses:{
//         online:"Java",
//         Inperson:"Python"
//     }
// }
// let newemployee={ ...employee };
// employee.eRole="Tester"
// employee.courses.Inperson="SQL"
// console.log(employee);
// console.log(newemployee);

//Deep Copy

let employee1={
    ename:"AAA",
    eRole:"Developer",
    courses:{
        online:"Java",
        Inperson:"Python"
    }
}
let newemployee1= JSON.parse(JSON.stringify(employee1)) ;
employee1.eRole="Tester"
employee1.courses.Inperson="SQL"
console.log(employee1);
console.log(newemployee1);


// //Deep Copy

// let a = 10;
// let b = a;

// a = 20;

// console.log( a,b );

// let obj1 = {
//     name1 : "AAAA",
//     roloe : "Developer"
// }

// let obj2 = { ...obj1 }

// obj2.name1 = "BBBB"

// console.log( obj1, obj2 );

//Object - Shallow Copy

// let person = {
//     name1 : "Johny",
//     role : "Youtuber",
//     hobbies : {
//         cricket : "t20 player",
//         football : "60 mins"
//     }
// }

//Deep Copy
// let person2 = { ...person, hobbies : { ...person.hobbies }  }

// // let person3 = JSON.stringify( person )

// let newObj = JSON.parse( JSON.stringify( person ) )

// person.role = "Video Creator"

// person.hobbies.cricket = "ODI Player"

// console.log( person, person2 );


// console.log( newObj );

//Array - Shallow Copy

// let arr = [1,2,3,[4,5,6]]

// let arr1 = [ ...arr  ]

// //Deep Copy
// let newArr = JSON.parse (JSON.stringify( arr  ))

// arr[0] = "One"
// arr[3][0] = "Four"

// newArr[3][1] = "Five"

// console.log( arr, arr1 );
// console.log(  newArr );