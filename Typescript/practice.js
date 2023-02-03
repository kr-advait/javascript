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
// here speak becomes of type any by inference as hello() can return anything passed to it
function hello(value) {
    return value;
}
var speak = hello("hello there");
console.log("speak = hello(\"".concat(speak, "\") -> returned ").concat(typeof speak));
speak = hello(1122);
console.log("speak = hello(".concat(speak, ") -> returned ").concat(typeof speak));
speak = hello(11 < 22);
console.log("speak = hello(".concat(speak, ") -> returned ").concat(typeof speak));
// functions 
function addTwo(a) {
    return (a + 2);
}
// here parameter a and plusTwo both are of type any which is not good for any functions
var plusTwo = addTwo(2);
console.log("plusTwo = addTwo(2) -> returns ".concat(plusTwo, ", type - ").concat(typeof plusTwo));
plusTwo = addTwo("2");
console.log("plusTwo = addTwo(\"2\") -> returns ".concat(plusTwo, ", type - ").concat(typeof plusTwo));
// function with static typed parameters
function signUpUser(name, password, isSubcribed) {
    if (isSubcribed === void 0) { isSubcribed = false; }
    return { name: name, password: password, isSubcribed: isSubcribed };
}
var newUser = signUpUser("advait", "myPassword1", true);
console.log(newUser);
var newUser2 = signUpUser("parth", "parth18");
console.log(newUser2);
// function with static typed return value
function wishMorning() {
    return ("Good Morning");
}
console.log("wishMorning():string returns ".concat(wishMorning()));
function addNumbers(a, b) {
    return a + b;
}
console.log("addNumbers(2,3):number returns ".concat(addNumbers(2, 3)));
var heroes = ["ironman", "thor", "hulk", "black panther", "captain america"];
var myHeroes = heroes.map(function (hero) {
    return "My hero is ".concat(hero);
});
console.log(myHeroes);
console.log(heroes);
var heroCount = heroes.reduce(function (a, b, c) {
    return "".concat(c + 1);
});
console.log("heros count = ".concat(heroCount));
// void
function showError(error) {
    console.log("This is an error", error);
}
showError("404: Page not found");
// never
function handleError(error) {
    throw new Error("Error: ".concat(error));
}
// handleError("program crashed");          it will stop the program execution
