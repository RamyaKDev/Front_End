// import { user as users } from "./login.mjs";
// import  employeedetails  from "./signup.mjs";

import {id, userfn} from "./login.mjs"
import signupfn from "./signup.mjs"

function funname(){
    // console.log(users);
    // console.log(employeedetails);  

    console.log(id);      
    userfn();
    signupfn();
}
funname()