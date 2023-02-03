"use strict";
// Objects in typescript
exports.__esModule = true;
var user = {
    name: "advait",
    laptop: "dell",
    age: 20
};
console.log(user);
// taking object as function parameter
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return {
        msg: "New user added, ".concat(string)
    };
}
// :object      or      :{}         or      :{propertyName:propertyType}
// function createUser1({name:string, isPaid:boolean}):{}{ 
//     return {
//         myProperty : "This is my property"
//     }
// }
var newUser = createUser({ name: "advait", isPaid: true });
console.log(newUser);
// return object from the function
function createCourse(name, price) {
    return { name: name, price: price };
}
var course1 = createCourse("NodeJs", 3000);
var course2 = createCourse("ReactJs", 2000);
var course3 = createCourse("VueJs", 2000);
console.log(course1);
console.log(course2);
console.log(course3);
