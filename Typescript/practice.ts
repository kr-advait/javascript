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






function hello(){
    return "Hello, there";
}

let speak = hello();
console.log(speak);


