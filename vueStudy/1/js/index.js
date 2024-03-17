
//import * as mod from './1.js';
//import {e,f,g} from './1.js';
//import './1.js'; //只引不用
//import def from "./1.js"; 



//console.log(mod.a, mod.b);


//console.log(mod.c(25));

let p = import("./1.js");



alert("Hello");

p.then(item=>console.log(item.default));


