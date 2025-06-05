//uncurrying function

function add(a,b,c){
    console.log(a+b+c);
    
}
add(1,2,3);

//currying function

function add(a){
    return function (b){
        return function (c){
           console.log( a+b+c);
           
        }
    }
}

// we can pass values in 2 ways

add(10)(20)(30);

let add1=add(100);
let add2=add1(200);
add2(300);