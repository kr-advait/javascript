// Objects


// To create empty object
let user1 = new Object();       // Object constructor syntax
// OR
let user2 = {};                     // Object literal syntax

let myFruit = 'apple';

// Syntax       { key : value}  or  {"key" : value}
let user = {
    name : "Advait",
    age : 20,
    [myFruit+'Count'] : 50          // (Computed properties) - key will become 'appleCount'
}



// CREATE properties

user.gender = "male";
user.hobbies = ['Reading','Coding'];



// READ properties  (Dot notation / Bracket notation)

console.log(user.name);             // Dot notation
console.log(user["name"]);          // Bracket notation

// use bracket notation when there is space in key
user["new property"] = "This is my new property";
console.log(user["new property"]);

console.log(user["appleCount"]);



// UPDATE properties

user.appleCount = 100;
user.hobbies.push('Travelling');



// DELETE properties

delete user.gender;


console.log(user);





// returning objects from function

function makeUser(name,age){
    return {
        name : name,        // making key-'name' and assigning value of name variable to it 
        age : age           // same like name
    }
}
// or shorthand property
function makeUser1(name,age,gender){
    return{
        name,       // will be considered as (name : name)
        age,        // same as (age : age)
        gender      // same as (gender : gender)
    }
}
console.log(makeUser('John',35));
console.log(makeUser1('David',23,'male'));




// we can also use language-reserved keywords as keys in object

let myKeywords = {
    for : 1,
    console : {
        log : "Hello, there"
    },
    return : "let's go back"
}

console.log(myKeywords.console.log);
console.log(myKeywords.for, myKeywords.return);





// checking presence of "key" in object by 'in' keyword

console.log(user.thisPropertyIsNotDefinedBefore === undefined);         // true
// JavaScript will not give any error if property doesn't exist but it will return undefined

console.log("age" in user);                         // true
console.log("New propery present" in user);         // false

// special case
let obj = {test : undefined};
console.log(obj);
console.log(obj.test);          // undefined (as we assigned it)

console.log(obj.test === undefined);        // undefined 
//(here we have assigned undefined as value but if we want to check if test property is present then we might misunderstand that test is not present )
// this is solved by 'in' keyword
console.log("test" in obj);                // true  (as test property is present in object)





// Iterating objects    (for-in loop)
user = {
    name : "Advait",
    age : 20,
    gender : 'male'
}

for(let key in user){
    console.log(user[key]);
}





// copy by reference
user1 = user;                       // now user1 will reference the same object as user
console.log(user1 === user);        // comparision by reference (both variables point to same object in memory)



// const objects can change     (as location in memory will always be same, properties are free to change)
const fruits = {
    apples : 10,
    orange : 5,
    banana : 7
}

fruits.pear = 12;
fruits.banana = 15;

console.log(fruits);
// fruits = {apples : 1}; will cause error because const can't be changed



// clone, merge and assign

let fruits1 = {};
for (let key in fruits){
    fruits1[key] = fruits[key];
}
console.log(fruits1)

// or

let fruits2 = {};
Object.assign(fruits2,fruits);
console.log(fruits2);

// or


// Cloning nested objects with structuredClone
let fruits3 = {
    red : {
        apple : 10
    },
    green : {
        apple : 20
    }
};

let fruits4 = structuredClone(fruits3);
console.log(fruits3.red === fruits4.red);       // false copy complete object as new object without copying the reference
console.log(fruits3);
console.log(fruits4);



// Optional chaining    (checks if keys are present)
console.log(fruits3?.red?.apple);
console.log(fruits3?.green?.apple);
console.log(fruits3?.yellow?.apple);



// Object spread

let newFruits = { ...fruits, ...fruits4, additionalProperty : "Property can be added with spread"};
console.log(newFruits);
newFruits.__proto__.hello = "hello";        // __proto__ is attached with every object in JavaScript
console.log(newFruits.__proto__);


let objectFromString = { ..."abcd" };
console.log(objectFromString);

let objectFromArray = { ...['item1', 'item2', 'item3'] };
console.log(objectFromArray);



// Object destructuring

let band = {
    bandName : "Coldplay",
    year : 2002,
    singers : ['ColdPlay','Ed sheeran','Alan Walker'],
    famousSong : {
        song : "Hymn for the Weekend"
    }
}

let {bandName:myBand, famousSong, ...restProperties} = band;       // value of bandName will be stored in myBand variable
console.log(myBand);
console.log(famousSong);
console.log(restProperties);


// Objects inside array

const users = [
    { firstName : "Advait", lastName : "Trivedi" },
    { firstName : "Bhavin", lastName : "Virani" },
    { firstName : "Parth", lastName : "Patel" }
];

for (let user of users){
    for (let data of Object.keys(user)){
        console.log(user[data]);
    }
}

console.log(users);