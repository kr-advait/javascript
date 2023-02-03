// Learn TypeScript
/*
Types present in TypeScript
-> number, string, boolean, object, null, undefined, array
some new types -> any, void, never, unknown
*/
// Syntax:- let variableName:type = value;
// string
var myStr = "hello";
myStr += " world";
console.log("myStr:string - ".concat(myStr));
myStr = 5; //indicates - type 'number' is not assignable to type 'string' but it won't stop us from assigning it
console.log("myStr:string - ".concat(myStr));
// number
var a = 12.23;
console.log(a);
var userId = 880342;
console.log("userId - ".concat(userId, ", type - ").concat(typeof userId));
console.log("userId.toString() - ".concat(userId, ", type - ").concat(typeof userId.toString()));
// boolean
var myBool;
myBool = 5 > 3;
console.log("myBool = 5 > 3 = ".concat(myBool));
/*
Type inference - means no need to define types of variables for obvious things. typescript is smart enough to figure it out

let num: number = 45;       (obviously it is number)
let str: string;
str = "my string is str";   (we know immediately after declaring that it is string)
*/
// "any" keyword - is a get away for type checking and will accept any type of values to be assigned
var anyType = "new type any";
console.log("anyType:any = ".concat(anyType));
anyType = 12;
console.log("anyType:any = ".concat(anyType));
function hello() {
    return "Hello, there";
}
var speak = hello();
console.log(speak);
