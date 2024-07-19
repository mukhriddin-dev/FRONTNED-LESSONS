// import userObj , {numbers , style } from "./mock.js"
// import {$$ , $} from "./utils.js";
// const {name, age}=userObj;

import * as mocks from "./mock.js";

const {default:{name, age}, numbers , style , app}=mocks; 

console.log(numbers , style);
console.log(age , name , app);



