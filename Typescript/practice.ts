// Learn TypeScript

/*
Types present in TypeScript
-> number, string, boolean, object, null, undefined, array
some new types -> any, void, never, unknown
*/

// Syntax:- let variableName:type = value;





// string
let myStr: string = "hello";
myStr += " world";
console.log(`myStr:string - ${myStr}`);

myStr = 5;      //indicates - type 'number' is not assignable to type 'string' but it won't stop us from assigning it
console.log(`myStr:string - ${myStr}`);




// number
let a: number = 12.23;
console.log(a);

let userId: number = 880342;
console.log(`userId - ${userId}, type - ${typeof userId}`);

console.log(`userId.toString() - ${userId}, type - ${typeof userId.toString()}`);



// boolean

let myBool: boolean;
myBool = 5 > 3;
console.log(`myBool = 5 > 3 = ${myBool}`);


/* 
Type inference - means no need to define types of variables for obvious things. typescript is smart enough to figure it out

let num: number = 45;       (obviously it is number)
let str: string;
str = "my string is str";   (we know immediately after declaring that it is string)
*/ 




// "any" keyword - is a get away for type checking and will accept any type of values to be assigned

let anyType: any = "new type any";
console.log(`anyType:any = ${anyType}`);

anyType = 12;
console.log(`anyType:any = ${anyType}`);

// here speak becomes of type any by inference as hello() can return anything passed to it
function hello(value){
    return value;
}

let speak = hello("hello there");
console.log(`speak = hello("${speak}") -> returned ${typeof speak}`);

speak = hello(1122);
console.log(`speak = hello(${speak}) -> returned ${typeof speak}`);

speak = hello(11<22);
console.log(`speak = hello(${speak}) -> returned ${typeof speak}`);






// functions 



function addTwo(a){
    return(a+2);
}
// here parameter a and plusTwo both are of type any which is not good for any functions
let plusTwo = addTwo(2);
console.log(`plusTwo = addTwo(2) -> returns ${plusTwo}, type - ${typeof plusTwo}`);

plusTwo = addTwo("2");
console.log(`plusTwo = addTwo("2") -> returns ${plusTwo}, type - ${typeof plusTwo}`);




// function with static typed parameters
function signUpUser(name:string, password:string, isSubcribed:boolean = false){
    return {name, password, isSubcribed};
}

let newUser = signUpUser("advait","myPassword1",true);
console.log(newUser);

let newUser2 = signUpUser("parth","parth18");
console.log(newUser2);




// function with static typed return value
function wishMorning(): string{
    return("Good Morning");
}
console.log(`wishMorning():string returns ${wishMorning()}`);



function addNumbers(a: number, b: number): number{
    return a+b;
}
console.log(`addNumbers(2,3):number returns ${addNumbers(2,3)}`);




const heroes = ["ironman","thor","hulk","black panther","captain america"];

let myHeroes = heroes.map((hero): string =>{
   return `My hero is ${hero}`; 
})

console.log(myHeroes);

console.log(heroes);


let heroCount = heroes.reduce((a:string,b:string,c:number):string =>{
    return `${c+1}`;
})

console.log(`heros count = ${heroCount}`);




// void

function showError(error: string): void{
    console.log("This is an error",error);
}

showError("404: Page not found");



// never

function handleError(error: string): never{
    throw new Error(`Error: ${error}`);
}

// handleError("program crashed");          it will stop the program execution
