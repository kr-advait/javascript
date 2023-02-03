// Type aliases - allows us to create allows us to create custom types

type User = {
    name : string;
    age : number;
    work : object;
};

function createUser(user:User):void{
    console.log("user created...");
    console.log(`name - ${user.name}, age - ${user.age}, work - ${JSON.stringify(user.work)}`);
}

createUser({name:"advait",age:20,work:{laptop:"dell",tech:"backend"}});