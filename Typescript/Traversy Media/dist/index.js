"use strict";
// TypeScript - (traversy media)
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
x = 12;
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = ['hello', 3.14, true, [1, 2, 3]];
// Tuple
let person = [1, 'Advait', true];
// Tuple Array
let employee;
employee = [
    [1, 'Advait'],
    [2, 'Parth'],
    [3, 'Karan'],
    [4, 'Meet'],
    [5, 'Manav']
];
console.log(employee);
// employee = [1, 'a']      ( will give error because it is of type [number, string] not [number, string][] )
// Unions
let productId = 22;
console.log(productId);
productId = "Value of productId can be string or number";
console.log(productId);
// Enum - enumerated types
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
console.log(Directions);
var Directions2;
(function (Directions2) {
    Directions2[Directions2["Up"] = 2] = "Up";
    Directions2[Directions2["Down"] = 3] = "Down";
    Directions2[Directions2["Left"] = 4] = "Left";
    Directions2[Directions2["Right"] = 5] = "Right"; // 5
})(Directions2 || (Directions2 = {}));
console.log(Directions2);
var Fruits;
(function (Fruits) {
    Fruits["Apple"] = "apple";
    Fruits["Banana"] = "banana";
    Fruits["Pear"] = "pear";
    Fruits["Mango"] = "mango";
})(Fruits || (Fruits = {}));
console.log(Fruits.Apple);
// Objects
const user = {
    id: 0,
    name: 'John'
};
console.log(user);
const user1 = {
    id: 1,
    name: 'Robin'
};
console.log(user1);
// Type Assertion - {2 ways}    (1 - <number>variableName)      (2 - variableName as number)
let cid = 1;
let customerId = cid;
// customerId = '2';            (will give error because type is changed from any to number)
console.log(customerId);
console.log(typeof customerId);
// or
let customerId2 = cid;
console.log(customerId);
console.log(typeof customerId);
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
function log(msg) {
    console.log(msg);
}
log(1);
log("hello guys");
let newUser = {
    id: 122,
    name: 'Robert'
};
// read only properties
newUser.id = 5; // will give error because id in UserInterface is readonly
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(2, 33));
console.log(sub(33, 2));
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const advait = new Person(1, "advait");
const karan = new Person(2, "karan");
console.log(advait);
console.log(karan);
class Laptop {
    constructor(laptopName, isNew) {
        this.isChargable = false; // should only be accessed from class (default value = false)
        this.laptopName = laptopName;
        this.isNew = isNew;
    }
    showInfo() {
        return `${this.laptopName} is chargable and not new laptop`;
    }
    getIsChargable() {
        return this.isChargable;
    }
    setIsChargable(isChargable) {
        this.isChargable = isChargable;
    }
}
let advaitLaptop = new Laptop('Dell', true);
let parthLaptop = new Laptop('Macbook', true);
advaitLaptop.setIsChargable(true);
console.log('getIsChargable -', advaitLaptop.getIsChargable());
// console.log(advaitLaptop.isNew);                    // protected    (gives error - can only be accessed from class or subclass)
console.log(advaitLaptop.showInfo());
console.log(parthLaptop.showInfo());
class laptopColor extends Laptop {
    constructor(isNew, name, laptopName, color) {
        super(laptopName, isNew);
        this.name = name;
        this.color = color;
        console.log(`Name-${this.name}, color-${this.color}, laptop-${laptopName}, isNew-${isNew}`);
    }
}
let advaitLaptopColor = new laptopColor(true, 'advait', 'dell', 'black');
console.log("from sub class", advaitLaptopColor.showInfo());
// Generics - placeHolder for temporary type definition <T>
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(['ad', 'af', 'fd']);
console.log(numArray);
console.log(strArray);
