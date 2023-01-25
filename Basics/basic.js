// Started learning basics of JavaScript - (25-1-23)

console.log("Hello World");





// Variables

// var (function scope)
var firstName = "Advait";
var lastName = "Trivedi";
console.log(firstName, lastName);

firstName = "Aadii";
console.log(firstName);

/*
Naming conventions

1 - cannot start with number
2 - we can use underscore _ or dollar $
3 - can't use spaces
4 - firstName (camelCase)
*/

// let (block scope)
let a = 1;
console.log(a);

// const (can't be changed afterwards)
const pi = 3.14;
console.log(pi);





// Strings

let first = "advait";
console.log(first);                     // "advait"
console.log(first[2]);                  // "v"      (string indexing)
console.log(first.length);              //  6       (length of string)
console.log(first[first.length-1]);     // "t"      (negative indexing of string)

first = "    Advait     ";
let newStr = first.trim();              // trim() returns a new string removing spaces from front & back
console.log(newStr);                    // "Advait"

first = newStr.toUpperCase();           // toUpperCase() reurns a new string making every character capital
console.log(first);                     // "ADVAIT"

first = first.toLowerCase();            // toLowerCase() returns a new string and makes every character small
console.log(first);                     // "ADVAIT"

console.log(newStr.slice(0,4));         // "Adva"       slice(start,end)-(returns substring from start to end-1)

console.log(typeof first);              // string       typeof keyword shows type of variable

// convert number to string
let age = 20;
console.log(typeof age);                // number
age = age + "";
console.log(typeof (age));              // string  (add empty string to number)     OR      String(num)


// convert string to number
age = +age;
console.log(typeof age);                // number   (add + before string)           OR      Number(str)

let str1 = "he";
let str2 = "llo";
console.log(str1+str2);                 // "hello"  (string concatenation with +)

firstName = "Advait";
console.log(`My name is ${firstName} and age is ${age}`);       // "My name is Advait and age is 20"        (template literals)


// type - undefined
let hello;
console.log(typeof hello);              // undefined
hello = "hello there";
console.log(typeof hello);              // string


// type - null
hello = null;
console.log(typeof hello, hello);       // object, null
// Note:- any variable assigned null will have its value as null and datatype as object so this is a bug.

// BigInt
let bigNum = BigInt(120912817258123123789342934826349);
let bigA = BigInt(123);                 // OR   123n        (Both will create BigInt)


// boolean (true/false)
console.log(1>2);                       // false
console.log(45<=01);                    // false
console.log(1==1);                      // true
console.log("1"==1)                     // true
console.log(1==="1")                    // false

// (==) checks only value
// (===) checks value plus datatype

console.log(1!=2);                      // true
console.log(1!=="1")                    // true
console.log(1!="1")                     // false








// Conditional statements
age = 15;
if(age < 18){
    console.log("You are under 18");
}
else if(age == 18){
    console.log("You are 18");
}
else{
    console.log("You are above 18")
}

// Odd - Even

let num = 24;
if(num%2==0){
    console.log("Even number");
}
else{
    console.log("Odd number");
}

// ternary operator
age = 5;
let drink = age < 8 ? "milk" : "coffee";        // let drink = "milk" if age is less than 8 else let drink = "coffee"
console.log(age, drink);                // 5 milk

age = 20;




// and , or operator    (and - &&     or - ||)
if(age===20 && firstName==="Advait"){
    // age is 20 and firstName is Advait
    console.log("You are authorized");
}
else{
    console.log("You are not able to access the system");
}


if(age===21 || firstName==="Advait"){
    // age is 21 or firstName is Advait
    console.log("You are either authorized or unauthorized");
}
else{
    console.log("Invalid entry");
}


// Switch statement
let day = 3;
switch(day){
    case 0 :
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid entry");
        break;
}





// Loops
// while loop
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

// Sum of first n natural numbers   (3 = 1+2+3 = 6)
let n = 10;
i = 1;
let ans = 0;
while(i<=n){
    ans += i;
    i++;
}
console.log(`Sum of first ${n} natural numbers is ${ans}`);


// for loop
for(let i=0;i<10;i++){
    if(i==4){
        continue;
    }
    if(i==8){
        break;
    }
    console.log(i);
}


// do-while loop
i = 10;
do{
    console.log(i);
    i++;
}while(i<5);






// Arrays
let fruits = ['Apple','Mango','Banana','Grapes'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
fruits[0] = "Watermelon";
console.log(fruits);
fruits.push("Apple");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);

let arr = [1,2,3.14];
console.log(Array.isArray(arr));
console.log(arr.length);
console.log(arr.splice(0,2));           // [1,2]    (splice will return the elements within range)
console.log(arr.slice(0,2));            // [3.14]   (slice will return array except for elements within range)

arr = [1,2,3,4,5]
let arr1 = arr;                         // assigned by reference    (channging arr will change arr1 as well)
console.log(arr1===arr);                // true     (will check if both the array have same reference)

// clone array
let arr2 = arr.slice(0);                // slice will return new array
// let arr2 = [].concat(arr);           // concat to empty array will return new array with just values of arr
// let arr2 = [...arr]                  // (spread operator) will form a new array and assign each variables with respective values

console.log(arr2===arr);



// for loop in array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// for-of   (will iterate over values of array)
for(let i of fruits){
    console.log(i);
}

// for-in   (will iterate over index of array)
for(let i in fruits){
    console.log(fruits[i]);
}

// Spread operators
let one = [1,2,3];
let two = [11,22,33];
let newOne = [...one, ...two];
console.log("newOne ",newOne);

// Spread operator (...a) and Array destructuring ([a,b] = [1,2])
arr = [1,2,3];
const [aa,...bb] = arr;
console.log(aa);
console.log(bb);





// Objects

const Person = {
    name : "Advait",
    age : 20,
    hobbies : ['Coding','Reading','Travelling'],
    "person name" : "aadii"
}

console.log(Person);
console.log(Person.name);
console.log(Person["name"]);
console.log(Person.age);
console.log(Person["age"])
console.log(Person.hobbies);
console.log(Person["hobbies"]);

console.log(Person["person name"]);         // "aadii"      (can only be accessed by bracket notation)

Person.gender = "male";
console.log(Person);
