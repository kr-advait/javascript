// Objects in typescript

const user = {
    name : "advait",
    laptop : "dell",
    age : 20
}

console.log(user);


// taking object as function parameter

// weird behaviours of Objects with TypeScript (type definition of object properties are considered as object destructuring)
function createUser({name: string, isPaid: boolean}):{}{
    return {
        msg : `New user added, ${string}`
    }
}

// :object      or      :{}         or      :{propertyName:propertyType}

// function createUser1({name:string, isPaid:boolean}):{}{ 
//     return {
//         myProperty : "This is my property"
//     }
// }


let newUser = createUser({name:"advait", isPaid:true});
console.log(newUser);



// return object from the function

function createCourse(name:string,price:number):{name:string,price:number}{
    return {name, price};
}


let course1 = createCourse("NodeJs",3000);
let course2 = createCourse("ReactJs",2000);
let course3 = createCourse("VueJs",2000);

console.log(course1);
console.log(course2);
console.log(course3);

export {};