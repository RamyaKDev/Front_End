
//self invoke or iife
(function sample(a){
    console.log("self invoke "+a);
})(10)

//closure
function outer(){
    let outer_var="I am outer varaiable";
    function inner(){
        console.log(outer_var);        
    }
    return inner;
}
let result=outer();
result();
