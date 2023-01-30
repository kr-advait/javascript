// Functions


// 1 - function declaration

function sayHello(name){
    console.log("Hello, there... ", name);
}

sayHello('Advait');


// 2 - function expression

const sayHello2 = function(name){
    console.log(`Hello, there... ${name}`);
}

sayHello2('Karan');


// 3 - arrow function

const sayHello3 = (name)=>{
    console.log(`Hello, there... ${name}`);
}

sayHello3('Parth');

// or - if you have only one parameter and function is doing only one task
const sayHello4 = name => console.log(`Hello, there... ${name}`);

sayHello4('Manav');




// default parameters

function sum(a,b=5){
    console.log(`a=${a}, b=${b}, a+b=${a+b}`);
}

sum(3,7)    // a=3, b=7 so a+b will be 10
sum(4);     // will print 9 as a=4 is passed as argument but b argument is not passed so b=5 default parameter is considered



// rest parameters

function restFunc(a,...b){
     console.log(`a = ${a} , b = ${b}`);
}

restFunc(1,2,3,4,5);




// parameter destructuring

function paramDestruct({ id:userId, data:userData }){
    console.log(userId);
    console.log(userData);
}

let newObject = {
    id: 5,
    data : {
        name : "advait",
        laptop : "dell"
    }
}

paramDestruct(newObject);